module.exports = function(dna) {
  var trans = {
    G: 'C',
    C: 'G',
    T: 'A',
    A: 'U'
  };

  var rna = "";

  for(var i = 0, len = dna.length; i < len; i++) {
    rna += trans[dna[i]];
  };

  return rna;
};

