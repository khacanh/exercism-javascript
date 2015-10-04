var MAP = {
 C: 'clover',
 G: 'grass',
 R: 'radishes',
 V: 'violets'
};

var STUDENTS = ['Alice', 'Bob', 'Charlie', 'David', 'Eve', 'Fred',
    'Ginny', 'Harriet', 'Ileana', 'Joseph', 'Kincaid', 'Larry'];

var Garden = function(diagram, students) {
  students = students ? students.sort() : STUDENTS;

  var rows = diagram.split('\n'), firstRow = rows[0], secondRow = rows[1];

  var self = this;

  students.forEach(function(e, i) {
    var plantMap = firstRow.slice(i*2, i*2+2) + secondRow.slice(i*2, i*2+2);
    self[e.toLowerCase()] = plantMap.split('').map(function(k) {
      return MAP[k];
    });
  });
};

module.exports = Garden;

