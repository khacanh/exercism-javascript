var School = function() {
  this.students = {};
};

School.prototype.add = function(name, grade) {
  var gradeStudents = this.students[grade] || [];
  gradeStudents.push(name);
  this.students[grade] = gradeStudents.sort();
};

School.prototype.grade = function(grade) {
  return this.students[grade] || {};
};

School.prototype.roster = function() {
  return this.students;
};

module.exports = School;

