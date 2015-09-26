var Series = function(str) {
  this.digits = str.split('').map(function(e) { return Number(e); });
};

Series.prototype.slices = function(n) {
  if (n > this.digits.length) {
    throw new Error('Slice size is too big.');
  }

  var result = [];

  for (var i = 0, len = this.digits.length; i <= len - n; i++) {
    result.push(this.digits.slice(i, i + n));
  }

  return result;
};

module.exports = Series;

