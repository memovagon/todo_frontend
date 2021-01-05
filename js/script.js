'use strict';

//valiables
const CHECK = 'fa-check-circle';
const UNCHECK = 'fa-circle-thin';

//selectors

const inputDom = document.querySelector('#input');
const listDom = document.querySelector('.list');
const dateDom = document.querySelector('.date');

// events

inputDom.addEventListener('keypress', eventEnterPressed);
listDom.addEventListener('click', eventListClicked);

//main
dateDom.textContent = getDate();
apiGetData();

// functions

function eventEnterPressed(event) {
  if (event.key == 'Enter') {
    const note = inputDom.value;
    addNote(note);
    inputDom.value = '';
    apiPostData(note);
  }
}

function eventListClicked(event) {
  const element = event.target;

  if (element.attributes.job.value == 'complete') checkNote(element);
  if (element.attributes.job.value == 'delete') {
    deleteNote(element);
    const note = element.parentNode.querySelector('.text').textContent;
    apiDeleteData(note);
  }
}

function addNote(note) {
  const POSITION = 'beforeend';
  const item = `<li class="item">
  <i class="fa fa-circle-thin complete" job="complete"></i>
  <p class="text">${note}</p>
  <i class="fa fa-trash-o delete" job="delete"></i>
  </li>`;
  listDom.insertAdjacentHTML(POSITION, item);
}

function checkNote(element) {
  element.classList.toggle(CHECK);
  element.classList.toggle(UNCHECK);
}

function deleteNote(element) {
  element.parentNode.parentNode.removeChild(element.parentNode);
}

function getDate() {
  // prettier-ignore
  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday','Friday', 'Saturday'];
  // prettier-ignore
  var months = ['Jan','Feb','Mar','Apr','May','Jun', 'Jul','Aug','Sep','Oct','Nov','Dec' ];

  const now = new Date();
  const day = days[now.getDay()];
  const date = now.getDate();
  const month = months[now.getMonth()];
  const fullDate = `${day}, ${month} ${date}`;
  return fullDate;
}
