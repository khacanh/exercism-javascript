const OPERATIONS = {
  'plus': ' + ',
  'minus': ' - ',
  'multiplied by': ' * ',
  'divided by': ' / '
};

var ArgumentError = function() {
};

var WordProblem = function(q) {
  this.q = q;
};

WordProblem.prototype.answer = function() {
  if (!this.q.match(/^What is/)) {
    throw new ArgumentError();
  }

  var str = this.q.replace(/^What is |\?$/g, '').trim();
  var operation = null;
  var sum = null;
  while (str) {
    var extract = extractSyntax(str);
    if (extract.op) {
      operation = extract.ele;
    } else {
      if (sum) {
        sum = eval(sum + operation + extract.ele);
      } else {
        sum = Number(extract.ele);
      }
    }
    str = extract.str;
  }
  return sum;
};

function extractSyntax(str) {
  var operationRegex = new RegExp('^' + Object.keys(OPERATIONS).join('|^'));
  var op = (str.match(operationRegex) || [])[0];
  if (op) {
    var substr = str.slice(op.length).trim();
    return {ele: OPERATIONS[op], str: substr, op: true};
  } else {
    var digit = str.match(/^[-+]*\d+/);
    if (!digit) {
      throw new ArgumentError();
    }
    digit = digit[0];
    var substr = str.slice(digit.length).trim();
    return {ele: digit, str: substr, op: false};
  }
};

module.exports.WordProblem = WordProblem;
module.exports.ArgumentError = ArgumentError;

