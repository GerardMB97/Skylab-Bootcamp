function createHeroesNameBoxes(heroes) {
  for (let i = 0; i < heroes.length; i += 1) {
    const { id, name } = heroes[i];

    const heroesList = document.querySelector('.heroes');

    const listHero = document.createElement('li');

    const heroDetail = document.createElement('a');
    heroDetail.href = `../hero-detail/hero-detail.html?id=${id}&name=${name}`;

    const heroBadge = document.createElement('span');
    heroBadge.className = 'badge';
    heroBadge.innerHTML = id;

    heroDetail.appendChild(heroBadge);
    heroDetail.innerHTML += name;

    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete';
    deleteButton.title = 'delete hero';
    deleteButton.innerText = 'x';

    listHero.appendChild(heroDetail);
    listHero.appendChild(deleteButton);
    heroesList.appendChild(listHero);
  }
}
