function filter(arr, fn) {
  var result = [];
  arr.forEach(function(e) {
    if (fn(e)) {
      result.push(e);
    }
  });

  return result;
};

module.exports.keep = function(arr, fn) {
  return filter(arr, fn);
};

module.exports.discard = function(arr, fn) {
  return filter(arr, function(e) { return !fn(e); });
};

