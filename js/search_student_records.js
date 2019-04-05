
var searchTerm;
var student;
var message = '';

function print(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}

function getStudentReport(object) {
  var report = '<h2>Name: ' + object.name + '</h2>';
  report += '<p>Track: ' + object.track + '</p>';
  report += '<p>Achievements: ' + object.achievements + '</p>';
  report += '<p>Points: ' + object.points + '</p>';
  return report;
}

while (true) {
  searchTerm = prompt('Search student records: type a name [Sarah] or type \'quit\' to end');
  if (searchTerm === null || searchTerm.toLowerCase() === 'quit') {
    break;
  }
  searchTerm = searchTerm.toLowerCase();
   
  for (var i = 0; i < students.length; i++) {
    student = students[i]; 
    if (student.name === searchTerm) { 
      message += getStudentReport(student);
    }
  }
  // break loop if var message  is truthy (i.e. contains a student's records)
  if (message) { 
    break;
  } else alert(`Sorry, ${searchTerm} is not in our records`);
}
print(message + '<h2>Reload to search for another student</h2>');