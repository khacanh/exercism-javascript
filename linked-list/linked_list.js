var Element = function(val, ele) {
  this.val = val;
  if (!ele) {
    this.prev = this;
    this.next = this;
  } else {
    this.prev = ele;
    this.next = ele.next;
    ele.next = this;
    if (ele.prev === ele) {
      ele.prev = this;
    }
  }
};

Element.prototype.removeSelf = function() {
  var prev = this.prev;
  if (prev === this) {
    return null;
  } else {
    prev.next = this.next;
    prev.next.prev = prev;
  }
  return prev;
};

var Deque = function() {
  this.cur = null;
};

Deque.prototype.push = function(v) {
  this.cur = new Element(v, this.cur);
};

Deque.prototype.pop = function() {
  if (!this.cur) {
    return undefined;
  }
  var val = this.cur.val;

  this.cur = this.cur.removeSelf();

  return val;
};

Deque.prototype.shift = function() {
  var first = this.cur.next;
  if (!first) {
    return undefined;
  }
  var val = first.val;
  this.cur.next = first.next;

  return val;
};

Deque.prototype.unshift = function(v) {
  var element = new Element(v, this.cur);
  this.cur = element.prev;
};

Deque.prototype.count = function() {
  if (!this.cur) {
    return 0;
  }
  var count = 1;
  var next = this.cur.next;
  while (next != this.cur) {
    count++;
    next = next.next;
  }
  return count;
};

Deque.prototype.delete = function(v) {
  var next = this.cur;
  while (next) {
    if (next.val === v) {
      next.removeSelf();
      break;
    }
    next = next.next;
    if (next === this.cur) {
      break;
    }
  }
};

module.exports = Deque;

