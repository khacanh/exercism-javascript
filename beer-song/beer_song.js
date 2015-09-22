module.exports.verse = function(num) {
  function nBottles(n, cap) {
    if (n > 1) {
      return n + ' bottles';
    } else if (n === 1) {
      return '1 bottle';
    } else {
      return cap ? 'No more bottles' : 'no more bottles';
    }
  };

  function getExcited(n) {
    return nBottles(n, true) + ' of beer on the wall, ' +
      nBottles(n) + ' of beer.';
  }

  function nextAction(n) {
    if (n > 1) {
      return 'Take one down and pass it around, ' +
        nBottles(n-1) + ' of beer on the wall.';
    } else if (n === 1) {
      return 'Take it down and pass it around, ' +
       nBottles(n-1) + ' of beer on the wall.';
    } else {
      return 'Go to the store and buy some more, ' +
        '99 bottles of beer on the wall.';
    }
  }

  return getExcited(num) + '\n' + nextAction(num) + '\n';
};

module.exports.sing = function(start, end) {
  if (end === undefined) {
    end = 0;
  }

  var result = '';
  for (var i = start; i >= end; i--) {
    result += this.verse(i);
    if (i > end) {
      result += '\n';
    }
  }

  return result;
};

