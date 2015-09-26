var Hexadecimal = function(s) {
  this.s = s;
};

Hexadecimal.prototype.toDecimal = function() {
  if (this.s.match(/[^0-9^a-f]/g)) {
    return 0;
  }

  return this.s
    .split('')
    .reduce(function(c, e) {
      var val = 0;
      if (e.match(/[0-9]/)) {
        val = Number(e);
      } else {
        val = e.charCodeAt() - 87;
      }
      return c * 16 + val;
    }, 0);
};

module.exports = Hexadecimal;

