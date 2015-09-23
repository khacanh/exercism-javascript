var Sieve = function(limit) {
  var squared = Math.ceil(Math.sqrt(limit));
  var remaining = [];
  for (var i = 2; i <= limit; i++) {
    remaining.push(i);
  }
  var primeIndex = 0;
  for (var i = 2; i <= squared ; i++) {
    primeIndex++;
    var tmp = [];
    for (var j = primeIndex, len = remaining.length; j < len; j++) {
      var cur = remaining[j];
      if (cur % i != 0) {
        tmp.push(cur);
      }
    }
    remaining = remaining.slice(0, primeIndex).concat(tmp);
  }

  this.primes = remaining;
};

module.exports = Sieve;

