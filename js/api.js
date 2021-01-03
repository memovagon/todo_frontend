function apiGet() {
  var request = new XMLHttpRequest();
  request.open('GET', 'http://0.0.0.0:5000/api/todo', true);
  request.onload = function () {
    console.log('API GET');

    const data = JSON.parse(this.response);
    if (data) {
      listDom.innerHTML = '';
      for (let todo of data['todos']) addNote(todo);
    }
  };
  request.send();
}

function apiDelete(note) {
  var request = new XMLHttpRequest();
  request.open('DELETE', `http://0.0.0.0:5000/api/todo?note=${note}`, true);

  request.onload = function () {
    console.log('API DELETE');
  };
  request.send();
}

function apiPost(note) {
  var request = new XMLHttpRequest();
  request.open('POST', `http://0.0.0.0:5000/api/todo?note=${note}`, true);

  request.onload = function () {
    console.log('API POST');
  };
  request.send();
}
