var PhoneNumber = function(input) {
  this.normalized = input.replace(/[^0-9]/g, '').replace(/^1(\d{10,10})/, '$1');
  if (this.normalized.length != 10) {
    this.normalized = '0000000000';
  }
};

PhoneNumber.prototype.number = function() {
  return this.normalized;
};

PhoneNumber.prototype.toString = function() {
  return this.normalized.replace(/(\d{3,3})(\d{3,3})(\d+)/, '($1) $2-$3');
};

PhoneNumber.prototype.areaCode = function() {
  return this.normalized.slice(0,3);
};

module.exports = PhoneNumber;

