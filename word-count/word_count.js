module.exports = function(str) {
  var result = {};

  str.replace(/[\n\t]/, ' ')
    .replace(/[\s]{2,}/, ' ')
    .trim()
    .split(' ')
    .forEach(function(e) {
      var eCount = (result[e] == null || typeof result[e] === 'function') ? 0 : result[e];
      result[e] = eCount + 1;
    });

  return result;
};

