var MAP = {
  eggs: 1,
  peanuts: 2,
  shellfish: 4,
  strawberries: 8,
  tomatoes: 16,
  chocolate: 32,
  pollen: 64,
  cats: 128
};

var Allergies = function(a) {
  this.allergies = a;
};

Allergies.prototype.list = function() {
  var results = [];

  for (var name in MAP) {
    var mask = MAP[name];
    if (mask & this.allergies) {
      results.push(name);
    }
  }

  return results;
};

Allergies.prototype.allergicTo = function(name) {
  return (this.allergies & MAP[name]) > 0;
};

module.exports = Allergies;


