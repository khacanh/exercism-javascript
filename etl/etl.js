module.exports = function(old) {
  var result = {};

  for(var score in old) {
    var chars = old[score];
    score = score - '0';

    chars.forEach(function(c) {
      result[c.toLowerCase()] = score;
    });
  }

  return result;
};

