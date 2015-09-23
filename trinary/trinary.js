var Trinary = function(s) {
  this.s = s;
};

Trinary.prototype.toDecimal = function() {
  return this.s
    .split('')
    .reduce(function(c, e) {
      return c * 3 + Number(e);
    }, 0) || 0;
};

module.exports = Trinary;

