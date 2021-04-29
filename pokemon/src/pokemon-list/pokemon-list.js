function getPokemonId(url) {
  const location = url;
  const withoutFirst = location.replace('https://pokeapi.co/api/v2/pokemon/', '');
  const ID = +withoutFirst.split('/')[0];
  return ID;
}
function drawPokemonList(pokemons) {
  const leftUl = document.querySelector('.left-list');
  const rightUl = document.querySelector('.right-list');

  leftUl.innerHTML = '';
  rightUl.innerHTML = '';
  for (let i = 0; i < pokemons.length; i += 1) {
    const li = document.createElement('li');
    const { name } = pokemons[i];
    const { url } = pokemons[i];
    const a = document.createElement('a');

    const pokemonID = getPokemonId(url);
    const detailUrl = '../pokemon-detail/pokemon-detail.html';
    const search = `?id=${pokemonID}`;

    a.href = detailUrl + search;

    const span = document.createElement('span');
    span.innerText = pokemonID;

    if (i < pokemons.length / 2) {
      li.appendChild(span);
      leftUl.appendChild(a);
    } else {
      li.appendChild(span);
      rightUl.appendChild(a);
    }
    li.innerHTML += name;
    a.appendChild(li);
  }
}
const pokeApi = 'https://pokeapi.co/api/v2/';
const first20 = 'pokemon?limit=20&offset=0';

function drawAsync(url) {
  let next;
  fetch(url)
    .then((response) => response.json())
    .then((pokes) => {
      const {
        count, previous, results
      } = pokes;
      next = pokes.next;
      console.log(pokes.next);

      drawPokemonList(results);
      const buttonNext = document.getElementsByTagName('button')[1];
      buttonNext.setAttribute('onclick', `drawAsync("${next}")`);
      const buttonPrevious = document.getElementsByTagName('button')[0];
      buttonPrevious.setAttribute('onclick', `drawAsync("${previous}")`);
    });
}
