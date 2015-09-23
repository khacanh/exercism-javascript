var LETTERS = 'abcdefghijklmnopqrstuvwxyz';

var Cipher = function(key) {
  if (key != null && !key.match(/[a-z]/g)) {
    throw new Error('Bad key');
  }

  this.key = key || (function() {
    var str = '';
    for (var i = 0; i < 100; i++) {
      str += LETTERS[Math.floor(Math.random() * 26)];
    }
    return str;
  })();
};

Cipher.prototype.encode = function(str) {
  var self = this;

  return str.split('').map(function(c, index) {
    var i = (c.charCodeAt() + self.key[index].charCodeAt() - 194) % 26;
    return LETTERS[i];
  }).join('');
};

Cipher.prototype.decode = function(str) {
  var self = this;

  return str.split('').map(function(c, index) {
    var i = (c.charCodeAt() - self.key[index].charCodeAt() + 26) % 26;
    return LETTERS[i];
  }).join('');
};

module.exports = Cipher;

