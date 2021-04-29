// const { drawMagazineCover, drawMagazineTitle } = require('../shared/shared');

const magazinesURL = 'https://www.googleapis.com/books/v1/volumes?q=time&printType=magazines';

function drawMagazineList({ items }) {
  const ul = document.querySelector('ul');
  items.forEach((magazine) => {
    const li = document.createElement('li');
    li.className = 'magazine';

    const { id } = magazine;
    const search = `?id=${id}`;
    const detailUrl = '../book-detail/book-detail.html';
    const a = document.createElement('a');
    a.href = `${detailUrl}${search}`;

    li.appendChild(a);
    ul.appendChild(li);

    const { volumeInfo } = magazine;
    const { imageLinks, title } = volumeInfo;
    const { thumbnail } = imageLinks;
    drawMagazineTitle(title, a);
    drawMagazineCover(thumbnail, a, title);
  });
}

module.exports = {
  drawMagazineList
};
