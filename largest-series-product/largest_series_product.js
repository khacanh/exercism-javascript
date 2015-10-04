var Series = function(str) {
  this.digits = str.split('').map(function(e) { return Number(e); });
};

Series.prototype.slices = function(num) {
  if (num > this.digits.length) {
    throw new Error('Slice size is too big.');
  }
  var result = [];
  for (var i = 0, len = this.digits.length; i <= len - num; i++) {
    result.push(this.digits.slice(i, i + num));
  }
  return result;
};

Series.prototype.largestProduct = function(num) {
  return this.slices(num).reduce(function(c, e) {
    return Math.max(c, eval(e.join(' * ')) || 1);
  }, 0);
};

module.exports = Series;

