var Triplet = function(a, b, c) {
  var sorted = [a, b, c].sort();
  this.a = sorted[0], this.b = sorted[1], this.c = sorted[2];
};

Triplet.prototype.isPythagorean = function() {
  return this.c * this.c === this.a * this.a + this.b * this.b;
};

Triplet.prototype.sum = function() {
  return this.a + this.b + this.c;
};

Triplet.prototype.product = function() {
  return this.a * this.b * this.c;
};

Triplet.where = function(query) {
  if (query.minFactor == null) {
    query.minFactor = 3;
  }

  var result = findTriplets(query.minFactor, query.maxFactor);

  if (query.sum != null) {
    return result.filter(function(tri) {
      return tri.sum() === query.sum;
    });
  } else {
    return result;
  }
};

function findTriplets(a, max) {
  var result = [];
  for (var ia = a; ia < max; ia++) {
    for (var ib = ia + 1; ib < max; ib++) {
      var ic = Math.sqrt(ia * ia + ib * ib);
      if (ic === Math.floor(ic)) {
        result.push(new Triplet(ia, ib, ic));
      }
    }
  }
  return result;
};

module.exports = Triplet;

