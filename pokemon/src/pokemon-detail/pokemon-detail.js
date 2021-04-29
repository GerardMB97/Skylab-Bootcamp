function parseIdFromLocation(currentLocation) {
  const id = currentLocation.search;
  const withoutQuestionMark = id.replace('?', '');
  const idQuery = withoutQuestionMark.includes('id');
  return idQuery ? +withoutQuestionMark.split('=')[1] : null;
}
const ID = parseIdFromLocation(location);
const fixedUrl = 'https://pokeapi.co/api/v2/pokemon/';
const URL = `${fixedUrl}${ID}`;

function getPokeInfo(url) {
  const fetchResponse = fetch(url);
  const jsonResponse = fetchResponse
    .then((response) => response.json());
  return jsonResponse;
}

function drawPokemonSprite({ sprites }) {
  const screen = document.querySelector('.sprite-screen');

  const { front_default } = sprites;
  const img = document.createElement('img');
  img.src = front_default;

  screen.appendChild(img);
  img.setAttribute('onload', 'opacity: 0%;');
}

function drawPokemonName({ name, id }) {
  const h2 = document.createElement('h2');
  h2.innerText = `#${id} ${name.toUpperCase()}`;

  const main = document.querySelector('main');
  main.appendChild(h2);
}
function changeTypeColor(name, htmlspan) {
  const span = htmlspan;
  switch (name) {
    case 'normal':
    case 'flying':
      span.style.backgroundColor = 'rgb(204, 138, 105)';
      break;
    case 'fire':
      span.style.backgroundColor = 'rgb(255, 97, 67)';
      break;
    case 'water':
      span.style.backgroundColor = 'rgb(67, 221, 255)';
      break;
    case 'ice':
      span.style.backgroundColor = 'rgb(67, 255, 245)';
      break;
    case 'bug':
    case 'grass':
      span.style.backgroundColor = 'rgb(67, 255, 127)';
      break;
    case 'poison':
      span.style.backgroundColor = 'rgb(199, 31, 184)';
      break;
    case 'electric':
      span.style.backgroundColor = '#FFCD00';
      span.style.color = 'black';
      span.style.border = '1px solid black';
      break;

    default:
      span.style.backgroundColor = 'rgb(227, 219, 215) ';
  }
}

function showText(target, message, index, interval) {
  if (index < message.length) {
    target.innerHTML += message[index];
    index += 1;
    setTimeout(() => { showText(target, message, index, interval); }, interval);
  }
}
function drawPokemonTypes({ types }) {
  const typesDiv = document.querySelector('.types');
  for (let i = 0; i < types.length; i += 1) {
    const span = document.createElement('span');
    const { type } = types[i];
    const { name } = type;
    span.innerText = name;
    span.className = `type${i}`;
    changeTypeColor(name, span);
    typesDiv.append(span);
  }
}

function drawPokemonInfo({ height, weight }) {
  const weightP = document.createElement('p');
  weightP.className = 'weight';
  const weightMessage = `weight: ${weight}`;
  showText(weightP, weightMessage, 0, 100);

  const heightP = document.createElement('p');
  heightP.className = 'height';
  const heightMessage = `height: ${height}`;
  showText(heightP, heightMessage, 0, 100);

  const div = document.querySelector('.info-screen');
  div.appendChild(weightP);
  div.appendChild(heightP);
}

function drawButtons({ id }) {
  const nextUrl = `${fixedUrl}${id + 1}`;
  const prevUrl = `${fixedUrl}${id - 1}`;
  const buttonNext = document.getElementsByTagName('button')[1];
  buttonNext.setAttribute('onclick', `drawAsync("${nextUrl}")`);

  const buttonPrevious = document.getElementsByTagName('button')[0];
  buttonPrevious.setAttribute('onclick', `drawAsync("${prevUrl}")`);
}

function drawPokemondetail(pokemon) {
  drawPokemonSprite(pokemon);
  drawPokemonName(pokemon);
  drawPokemonTypes(pokemon);
  drawPokemonInfo(pokemon);
  drawButtons(pokemon);
}

function clearPage() {
  const screen = document.querySelector('.sprite-screen');
  screen.innerHTML = '';

  const h2 = document.querySelector('h2');
  h2.remove();

  const typesDiv = document.querySelector('.types');
  typesDiv.innerHTML = '';

  const infoScreen = document.querySelector('.info-screen');
  infoScreen.innerHTML = '';
}
let index = 0;
function drawAsync(url) {
  if (index > 0) {
    clearPage();
  }
  index += 1;

  getPokeInfo(url)
    .then((poke) => {
      drawPokemondetail(poke);
    });
}

module.exports = {
  parseIdFromLocation,
  getPokeInfo,
  drawPokemonSprite,
  drawPokemonName,
  drawPokemonTypes,
  drawPokemonInfo,
  showText
};
