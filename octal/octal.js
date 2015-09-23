var Octal = function(s) {
  this.s = s;
};

Octal.prototype.toDecimal = function() {
  if (this.s.match(/[^0-7]/g)) {
    return 0;
  }

  return this.s
    .split('')
    .reduce(function(c, e) {
      return c * 8 + Number(e);
    }, 0);
};

module.exports = Octal;

