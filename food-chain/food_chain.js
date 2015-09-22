var DATA = [
  {
    animal: 'fly'
  },
  {
    animal: 'spider',
    expression: 'It wriggled and jiggled and tickled inside her.',
    that: 'that wriggled and jiggled and tickled inside her'
  },
  {
    animal: 'bird',
    expression: 'How absurd to swallow a bird!'
  },
  {
    animal: 'cat',
    expression: 'Imagine that, to swallow a cat!'
  },
  {
    animal: 'dog',
    expression: 'What a hog, to swallow a dog!'
  },
  {
    animal: 'goat',
    expression: 'Just opened her throat and swallowed a goat!'
  },
  {
    animal: 'cow',
    expression: "I don't know how she swallowed a cow!"
  },
  {
    animal: 'horse',
    expression: "She's dead, of course!"
  },
];


var verse = function(start) {
  var result = '';
  var i = start - 1;
  var verseData = DATA[i];

  result += 'I know an old lady who swallowed a ' + verseData.animal;
  result += '.\n';

  if (verseData.expression) {
    result += verseData.expression;
    result += '\n';
  }

  if (i < DATA.length - 1) {
    for (var j = i-1; j >= 0; j--) {
      result += 'She swallowed the ' + DATA[j+1].animal;
      result += ' to catch the ' + DATA[j].animal;
      if (DATA[j].that) {
        result += ' ' + DATA[j].that;
      }
      result += '.\n';
    }
    result += "I don't know why she swallowed the fly. Perhaps she'll die.\n";
  }

  return result;
}

var verses = function(start, end) {
  var result = '';
  for(var i = start; i <= end; i++) {
    result += verse(i);
    result += '\n';
  }
  return result;
}

module.exports.verse = verse;
module.exports.verses = verses;

