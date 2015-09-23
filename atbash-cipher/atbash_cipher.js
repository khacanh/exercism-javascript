var LETTERS = 'abcdefghijklmnopqrstuvwxyz';

module.exports.encode = function(input) {
  return input.toLowerCase()
    .replace(/[^0-9^a-z]/g, '')
    .replace(/[a-z]/g, function(c) {
      return LETTERS[122 - c.charCodeAt()];
    })
    .replace(/(.{5})/g, "$1 ")
    .trim();
}

