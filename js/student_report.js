function print(message) {
  var output_div = document.getElementById('output');
  output_div.innerHTML = message;
}

function buildHTML(arr) {
  var html = '';
  for (var i = 0; i < arr.length; i += 1) {
    for (var prop in arr[i]) {
      if (prop === 'name') {
        html += '<br>' + '<h2>' + 'student' + ': ' + arr[i][prop] + '</h2>';
      } else {
        html += '<p>' + prop + ': ' + arr[i][prop] + '</p>';
      }
    }
  }
  print(html);
}

buildHTML(students);