module.exports = function(dnaA, dnaB) {
  if (dnaA === null || dnaB === null || dnaA.length != dnaB.length) {
    throw new Error('DNA strands must be of equal length.');
  }

  var sum = 0;
  for(var i = 0, len = dnaA.length; i < len; i++) {
    if (dnaA.charAt(i) != dnaB.charAt(i)) {
      sum++;
    }
  }

  return sum;
};

