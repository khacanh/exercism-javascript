var Luhn = function(n) {
  this.checkDigit = n % 10;
  this.addends = String(n).split('')
    .reverse()
    .map(function(d, i) {
      if (i % 2 === 1) {
        var r = Number(d) * 2;
        return r > 9 ? r - 9 : r;
      } else {
        return Number(d);
      }
    })
    .reverse();

  this.checksum = this.addends.reduce(function(s, c) {
    return s + c;
  }, 0);

  this.valid = this.checksum % 10 === 0;
};

Luhn.create = function(n) {
  if (new Luhn(n).valid) {
    return n;
  } else {
    var luhn = new Luhn(n * 10);
    return n * 10 + (luhn.checksum * 9) % 10;
  }
};

module.exports = Luhn;

