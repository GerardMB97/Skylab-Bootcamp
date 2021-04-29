// const { drawMagazineTitle, drawMagazineCover } = require('../shared/shared');

const fixedURL = 'https://www.googleapis.com/books/v1/volumes/';

function parseIdFromLocation(currentLocation) {
  const { search } = currentLocation;

  const withoutQuestionMark = search.replace('?', '');
  const idQuery = withoutQuestionMark.split('=');
  const id = idQuery[1];

  return id;
}

const Id = parseIdFromLocation(location);
const magazineUrl = `${fixedURL}${Id}`;

function drawMagazineDescription(htmlElement, { description }) {
  const p = document.createElement('p');
  p.innerText = description;
  htmlElement.appendChild(p);
}
function drawMagazineAuthors(authors, htmlElement) {
  const li = document.createElement('li');
  li.innerText = '';
  li.innerText = 'Authors: ';
  authors.forEach((author) => {
    li.innerText += `${author} `;
  });
  htmlElement.appendChild(li);
}

function drawMagazinePublisher(publisher, htmlElement) {
  const li = document.createElement('li');
  li.innerText = 'Publisher: ';
  li.innerText += publisher;
  htmlElement.appendChild(li);
}

function drawMagazinePageCount(pageCount, htmlElement) {
  const li = document.createElement('li');
  li.innerText = `Page count: ${pageCount}`;
  htmlElement.appendChild(li);
}

function drawMagazineInfo({ authors, publisher, pageCount }, htmlElement) {
  const ul = document.createElement('ul');
  htmlElement.appendChild(ul);
  drawMagazineAuthors(authors, ul);
  drawMagazinePublisher(publisher, ul);
  drawMagazinePageCount(pageCount, ul);
}

function drawMagazineDetail(magazineInfo) {
  const { volumeInfo } = magazineInfo;
  const { title } = volumeInfo;
  const header = document.querySelector('header');
  drawMagazineTitle(title, header);

  const { imageLinks } = volumeInfo;
  const { large } = imageLinks;
  const main = document.querySelector('main');
  drawMagazineCover(large, main, title);
  drawMagazineInfo(volumeInfo, main);
  drawMagazineDescription(main, volumeInfo);
}

module.exports = {
  parseIdFromLocation, drawMagazineDescription, drawMagazineAuthors, drawMagazinePublisher
};
