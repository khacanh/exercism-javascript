module.exports.for = function(n) {
  var primeFactors = [];
  var remaining = n;

  while (remaining != 1) {
    var p = 2;
    while (remaining % p != 0) {
      p++;
    }
    primeFactors.push(p);
    remaining /= p;
  };

  return primeFactors;
};

