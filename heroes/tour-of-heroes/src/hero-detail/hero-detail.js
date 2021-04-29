const { brotliDecompressSync } = require('zlib');

// const { HEROES } = require('../../hero');

function parseIdFromLocation(currentLocation) {
  const id = currentLocation.search;
  const withoutQuestionMark = id.replace('?', '');

  const searchMatrix = withoutQuestionMark.split('&');

  const idQuery = searchMatrix.find((search) => search.includes('id'));

  return idQuery ? +idQuery.split('=')[1] : null;
}

function drawTitle(heroName) {
  const nameElement = document.getElementById('hero__title-name');
  nameElement.innerText = `${heroName} Details`;
}

function drawInput(heroName) {
  const nameInput = document.getElementById('hero__name');
  nameInput.value = heroName;
}
function drawHeroName(heroName) {
  drawTitle(heroName);
  drawInput(heroName);
}

function drawHeroId(heroId) {
  const idElement = document.getElementById('hero__id');
  idElement.innerText = +heroId;
}

function drawHeroImg(name, images) {
  const pictureDiv = document.querySelector('.picture');

  const heroImg = document.createElement('img');
  const { sm } = images;
  heroImg.src = sm;
  heroImg.alt = name;
  heroImg.className = 'photo';
  pictureDiv.appendChild(heroImg);
}

function getHeroBio(biography) {
  const biographySection = document.querySelector('.biography');

  const properties = Object.keys(biography);
  const propertiesValus = Object.values(biography);

  for (let i = 0; i < properties.length; i += 1) {
    const span = document.createElement('span');
    span.innerHTML = `<b>${properties[i]}</b> : ${propertiesValus[i]}`;
    biographySection.appendChild(span);
  }
}

function getHeroStats(powerstats) {
  const statsName = Object.keys(powerstats);
  const statsValues = Object.values(powerstats);
  const graph = document.querySelector('.graph');

  for (let i = 0; i < statsName.length; i += 1) {
    let backgroundBarColor;

    if (statsValues[i] <= 35) {
      backgroundBarColor = 'rgb(235, 58, 52)';
    } else if (statsValues[i] <= 75) {
      backgroundBarColor = 'rgb(229, 235, 52)';
    } else {
      backgroundBarColor = 'rgb(50, 168, 82)';
    }

    const graphBar = document.createElement('div');
    graphBar.className = 'graph__bar';
    graphBar.style.height = `${statsValues[i]}%`;
    graphBar.style.backgroundColor = backgroundBarColor;

    const statName = document.createElement('span');
    statName.innerText = `${statsName[i]}`;

    graphBar.appendChild(statName);
    graph.appendChild(graphBar);
  }
}

function drawHeroInfo({
  name, id, biography, images, powerstats
}) {
  drawHeroName(name);
  drawHeroId(id);
  drawHeroImg(name, images);
  getHeroBio(biography);
  getHeroStats(powerstats);
}

module.exports = {
  parseIdFromLocation,
  drawHeroInfo,
  drawHeroImg,
  getHeroBio,
  getHeroStats,
  drawHeroName,
  drawTitle,
  drawInput,
  drawHeroId

};
