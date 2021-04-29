// const { HEROES } = require('../../hero');

function getHref(id, name) {
  return `../hero-detail/hero-detail.html?id=${id}&name=${name}`;
}

function paintTopHeroNames(heroes) {
  for (let i = 0; i < heroes.length; i += 1) {
    const container = document.querySelector('.grid');

    const heroDetail = document.createElement('a');
    heroDetail.className = 'col-1-4';

    const heroDiv = document.createElement('div');
    heroDiv.className = 'module hero';

    const heroNameElement = document.createElement('h4');

    const { id, name } = heroes[i];

    heroDetail.href = getHref(id, name);
    heroNameElement.innerText = name;

    container.appendChild(heroDetail);
    heroDetail.appendChild(heroDiv);
    heroDiv.appendChild(heroNameElement);
  }
}

const dashboardHeroes = HEROES.slice(1, 5);

module.exports = { paintTopHeroNames };
