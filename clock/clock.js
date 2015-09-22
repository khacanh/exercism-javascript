function lpad(i, n, c) {
  var s = String(i);
  for (var i = s.length; i < n; i++) {
    s = c + s;
  }
  return s;
}

var Clock = function(hour, min) {
  this.hour = hour;
  if (min === undefined) {
    min = 0;
  }
  this.min = min;
};

Clock.prototype.hourString = function() {
  return lpad(this.hour, 2, '0');
};

Clock.prototype.minString = function() {
  return lpad(this.min, 2, '0');
};

Clock.prototype.toString = function() {
  return this.hourString() + ':' + this.minString();
};

Clock.prototype.plus = function(min) {
  this.min += min;

  this.hour += Math.floor(this.min / 60);
  this.hour %= 24;

  this.min %= 60;

  return this;
};

Clock.prototype.minus = function(min) {
  var hour = Math.floor(min / 60);
  min = min % 60;

  if (this.min < min) {
    this.min = this.min + 60 - min;
    this.hour = (this.hour + 24 - 1 - hour) % 24;
  } else {
    this.min  -= min;
    this.hour -= hour;
  }

  return this;
};

Clock.prototype.equals = function(clock) {
  return this.toString() === clock.toString();
};

function at(hour, min) {
  return new Clock(hour, min);
}

module.exports.at = at;

