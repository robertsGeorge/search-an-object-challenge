function print(message) {
  var output_div = document.getElementById('output');
  output_div.innerHTML = message;
}

var report = '';
var student;

var i = 0;
while (i < students.length) {
  student = students[i];
  report += '<h2>Student: ' + student.name + '</h2>';
  report += '<p>Track: ' + student.track + '</p>';
  report += '<p>Achievements: ' + student.achievements + '</p>';
  report += '<p>Points: ' + student.points + '</p>';
  i += 1;
}
print(report);
