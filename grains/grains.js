var BigInt = require('./big_integer');

var Grains = function() {
};

Grains.prototype.square = function(n) {
  var result = BigInt(1);
  for(var i = 0; i < n-1; i++) {
    result = result.multiply(2);
  }

  return result.toString();
};

Grains.prototype.total = function() {
  var sum = BigInt(0);
  for(var i = 1; i <= 64; i++) {
    sum = sum.plus(this.square(i));
  }

  return sum.toString();
};

module.exports = Grains;

