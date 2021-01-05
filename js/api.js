async function apiGet() {
  const response = await fetch('http://0.0.0.0:5000/api/todo');
  const data = await response.json();
  return data;
}

apiGet().then(data => {
  const notes = data['todos'];
  if (notes) {
    listDom.innerHTML = '';
    for (let todo of notes) addNote(todo);
  }
});

async function apiPost(note) {
  const response = await fetch(`http://0.0.0.0:5000/api/todo?note=${note}`, { method: 'POST' });
  const data = await response.json();
  return data;
}

async function apiDelete(note) {
  const response = await fetch(`http://0.0.0.0:5000/api/todo?note=${note}`, { method: 'DELETE' });
  return response;
}
