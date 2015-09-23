module.exports = function(arr, fn) {
  var result = [];

  arr.forEach(function(e) {
    result.push(fn(e));
  });

  return result;
};

