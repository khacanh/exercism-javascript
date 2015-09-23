var Crypto = function(input) {
  this.input = input.toLowerCase().replace(/[^\w]/g, '');
  this._rows = findRowsCols(this.input.length)[0];
  this._cols = findRowsCols(this.input.length)[1];
};

Crypto.prototype.normalizePlaintext = function() {
  return this.input;
};

function findRowsCols(length) {
  var l = 1, h = length;

  while (l < h) {
    if (l * h >= length) {
      h--;
    } else {
      l++;
    }
  }

  if (l * h < length) {
    h++;
  }

  return [l, h];
};

Crypto.prototype.size = function() {
  return this._cols;
};

Crypto.prototype.plaintextSegments = function() {
  var segments = [];

  for (var i = 0; i < this._rows; i++) {
    segments.push(this.input.slice(i * this._cols, (i + 1) *this._cols));
  }

  return segments;
};

Crypto.prototype.ciphertext = function() {
  var segments = this.plaintextSegments();
  var result = '';
  for (var i = 0; i < this._cols; i++) {
    for (var j = 0; j < this._rows; j++) {
      result += segments[j][i] || '';
    }
  }

  return result;
};

Crypto.prototype.normalizeCiphertext = function() {
  var regex = new RegExp('(.{'+ this._cols + '})', 'g');
  return this.ciphertext().replace(regex, '$1 ').trim();
};

module.exports = Crypto;

