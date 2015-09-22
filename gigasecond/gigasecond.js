var Gigasecond = function(dt) {
  var gigaDate = new Date(dt.getTime() + 1000000000000);
  this.giga = new Date(gigaDate.getFullYear(), gigaDate.getMonth(), gigaDate.getDate());
};

Gigasecond.prototype.date = function() {
  return this.giga;
};

module.exports = Gigasecond;

