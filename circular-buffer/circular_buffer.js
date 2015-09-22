var CircularBufferEmptyException = new Error('Empty');
var CircularBufferFullException = new Error('Full');

var CircularBuffer = function(n) {
  this.size = n;
  this.buffer = [];
};

CircularBuffer.prototype.write = function(e) {
  if (this.buffer.length === this.size) {
    throw CircularBufferFullException;
  }
  if (e != null && e != undefined) {
    this.buffer.push(e);
  }
};

CircularBuffer.prototype.forceWrite = function(e) {
  this.buffer.shift();
  this.buffer.push(e);
};

CircularBuffer.prototype.read = function() {
  if (this.buffer.length === 0) {
    throw CircularBufferEmptyException;
  }

  return this.buffer.shift();
};

CircularBuffer.prototype.clear = function() {
  this.buffer = [];
};

function circularBuffer(n) {
  return new CircularBuffer(n);
}

module.exports.circularBuffer = circularBuffer;

module.exports.bufferEmptyException = function() {
  return CircularBufferEmptyException;
};

module.exports.bufferFullException = function() {
  return CircularBufferFullException;
};

