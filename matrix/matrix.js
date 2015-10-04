var Matrix = function(str) {
  this.rows    = [];
  this.columns = [];

  var self = this;

  str.split('\n').forEach(function(rowStr, rI) {
    rowStr.split(' ').forEach(function(ele, cI) {
      if (!self.rows[rI]) {
        self.rows[rI] = [];
      }
      self.rows[rI].push(Number(ele));
      if (!self.columns[cI]) {
        self.columns[cI] = [];
      }
      self.columns[cI].push(Number(ele));
    });
  });
};

module.exports = Matrix;

