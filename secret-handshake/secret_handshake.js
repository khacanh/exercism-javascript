var SECRETS = {
  1: 'wink',
  10: 'double blink',
  100: 'close your eyes',
  1000: 'jump'
};

var SecretHandshake = function(n) {
  if (typeof n != 'number') {
    throw new Error('Handshake must be a number');
  }
  this.n = n;
};

SecretHandshake.prototype.commands = function() {
  var result = [];

  var padding = '';
  var reversed = this.n > 8;
  while (this.n > 0 && result.length < 4) {
    var action = SECRETS[this.n % 2 + padding];
    if (action) {
      if (reversed) {
        result.unshift(action);
      } else {
        result.push(action);
      }
    }

    this.n = this.n >> 1;
    padding += '0';
  }

  return result;
};

module.exports = SecretHandshake;

