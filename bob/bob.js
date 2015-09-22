var Bob = function() {
}

Bob.prototype.hey = function(str) {
  str = str.trim();
  if (str.length === 0) {
    return 'Fine. Be that way!';
  } else if (str.replace(/[^A-z]/g, '').match(/^[A-Z|^]+$/)) {
    return 'Whoa, chill out!';
  } else if (str.match(/.*\?$/)) {
    return 'Sure.';
  } else {
    return 'Whatever.';
  }

};

module.exports = Bob;

