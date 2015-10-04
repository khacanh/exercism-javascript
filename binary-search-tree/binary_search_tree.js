var Bst = function(val) {
  this.left = null;
  this.right = null;
  this.data = val;
};

Bst.prototype._isLeaf = function() {
  return !this.left && !this.right;
};

Bst.prototype.insert = function(newVal) {
  var node = this;
  while (true) {
    if (node.data < newVal) {
      if (node.right) {
        node = node.right;
      } else {
        node.right = new Bst(newVal);
        break;
      }
    } else {
      if (node.left) {
        node = node.left;
      } else {
        node.left = new Bst(newVal);
        break;
      }
    }
  }
};

Bst.prototype.each = function(fn) {
  function recursion(bst) {
    if (!bst) {
      return null;
    } else if (bst._isLeaf()) {
      fn(bst.data);
    } else {
      recursion(bst.left);
      fn(bst.data);
      recursion(bst.right);
    }
  }

  recursion(this);
};

module.exports = Bst;

