module.exports = function(n) {
  var roman = '';

  function extract(c, r) {
    while (n >= c) {
      roman += r;
      n -= c;
    }
  };

  extract(1000, 'M');
  extract(900,  'CM');
  extract(500,  'D');
  extract(400,  'CD');
  extract(100,  'C');
  extract(90,   'XC');
  extract(50,   'L');
  extract(40,   'XL');
  extract(10,   'X');
  extract(9,    'IX');
  extract(5,    'V');
  extract(4,    'IV');
  extract(1,    'I');

  return roman;
};

