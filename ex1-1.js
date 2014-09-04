'use strict';

function Grades() {
  this.content = [];
}

Grades.prototype.addGrade = function(grade) {
  this.content.push(grade);
  console.log('added ' + grade + ' to grades');
};

Grades.prototype.getAverage = function() {
  if (this.content.length === 0) return null;
  var sum = this.content.reduce(function (a, b) {
    return +a + +b;
  });
  var avg = sum / this.content.length;
  console.log('grade average: ' + avg); 
}

module.exports = Grades;
