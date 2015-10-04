var BinarySearch = function(elements) {
  var prevEle = elements[0];
  this.array = [];
  for (var i in elements) {
    if (prevEle > elements[i]) {
      this.array = undefined;
      break;
    } else {
      this.array.push(elements[i]);
      prevEle = elements[i];
    }
  }
};

BinarySearch.prototype.indexOf = function(ele) {
  var lI = 0;
  var hI = this.array.length - 1;
  while (lI < hI) {
    var mI = Math.floor((hI - lI) / 2);
    if (this.array[mI] === ele) {
      return mI;
    } else if (this.array[mI] > ele) {
      lI = mI;
    } else {
      hI = mI;
    }
  }

  return -1;
};

module.exports = BinarySearch;

