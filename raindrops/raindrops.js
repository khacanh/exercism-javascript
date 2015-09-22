var CONV = {
  3: 'Pling',
  5: 'Plang',
  7: 'Plong'
};

var Raindrops = function() {
};

Raindrops.prototype.convert = function(n) {
  var uniquePrimeFactors = function(n) {
    var primes = [];

    while (n != 1) {
      var p = 2;
      while (n % p != 0) {
        p++;
      }
      if (primes.indexOf(p) === -1) {
        primes.push(p);
      }
      n /= p;
    };

    return primes;
  }

  return uniquePrimeFactors(n).filter(function(p) {
    return CONV[String(p)];
  }).reduce(function(c, e) {
    return c + CONV[String(e)];
  }, '') || String(n);
};

module.exports = Raindrops;

