var Binary = function(str) {
  this.str = str;
};

Binary.prototype.toDecimal = function() {
  return this.str.split('').reduce(function(c, e) {
    return c * 2 + Number(e);
  }, 0) || 0;
};

module.exports = Binary;

