var Triangle = function(a, b, c) {
  this.a = a;
  this.b = b;
  this.c = c;
};

Triangle.prototype._validate = function() {
  return (this.a + this.b - this.c) *
    (this.a + this.c - this.b) *
    (this.b + this.c - this.a) >= 0 &&
    this.a * this.b * this.c > 0;
}

Triangle.prototype.kind = function() {
  if (!this._validate()) {
    throw 'Not a valid triangle!';
  }

  if (this.a === this.b && this.b === this.c) {
    return 'equilateral';
  }

  if (this.a === this.b || this.b === this.c || this.c === this.a) {
    return 'isosceles';
  }

  return 'scalene';
};

module.exports = Triangle;

