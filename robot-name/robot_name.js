var lpad = function(i, n, c) {
  var s = String(i);
  for(var i = s.length; i < n; i++) {
    s = c + s;
  }
  return s;
};

var randomChar = function() {
  return String.fromCharCode(65 + Math.floor(Math.random() * 26));
};

var Robot = function() {
  this._randomUniqueName = function() {
    var possibleNewName = '';

    do {
      possibleNewName = randomChar() + randomChar() +
        lpad(Math.floor(Math.random() * 1000), 3, '0');
    } while (Robot._usedNames[possibleNewName]);

    Robot._usedNames[possibleNewName] = true;
    return possibleNewName;
  };

  this.name = this._randomUniqueName();
};

Robot._usedNames = {};

Robot.prototype.reset = function() {
  this.name = this._randomUniqueName();
}

module.exports = Robot;

