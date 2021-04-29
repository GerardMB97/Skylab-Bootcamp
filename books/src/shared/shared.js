function getInfo(url) {
  const fetchResponse = fetch(url);
  const jsonResponse = fetchResponse
    .then((response) => response.json());
  return jsonResponse;
}
function drawMagazineCover(cover, aElement, titleName) {
  const img = document.createElement('img');
  img.src = cover;
  img.alt = titleName;
  img.className = 'cover';

  aElement.appendChild(img);
}

function drawMagazineTitle(titleName, aElement) {
  const h2 = document.createElement('h2');
  h2.innerText = titleName;
  aElement.appendChild(h2);
}

module.exports = { getInfo, drawMagazineTitle, drawMagazineCover };
