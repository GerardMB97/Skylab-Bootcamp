const {
  parseIdFromLocation,
  drawHeroInfo,
  drawHeroImg,
  getHeroBio,
  getHeroStats,
  drawHeroName,
  drawTitle,
  drawInput,
  drawHeroId

} = require('./hero-detail');

const { HEROES } = require('../../hero');

test('parseIdFromLocation, should return 11 ', () => {
  const currentLocation = { search: '?id=11' };

  const heroId = parseIdFromLocation(currentLocation);
  expect(heroId).toBe(11);
});
test('parseIdFromLocation, should return null', () => {
  const currentLocation = { search: '?name=Attila' };
  const heroId = parseIdFromLocation(currentLocation);
  expect(heroId).toBe(null);
});

describe('Given a function drawHeroImg ', () => {
  describe('When invoked with an object that has aproperty img that has a property name= "DONKEY"', () => {
    test('alt should be DONKEY', () => {
      const testObject = { name: 'DONKEY', images: { sm: 'hithere' } };
      const pictureDiv = document.createElement('div');
      pictureDiv.className = 'picture';
      const body = document.querySelector('body');
      body.appendChild(pictureDiv);
      drawHeroImg('DONKEY', testObject.images);

      const { alt } = document.getElementsByTagName('img')[0];

      expect(alt).toBe('DONKEY');
    });
    test('src should be hithere', () => {
      const testObject = { name: 'DONKEY', images: { sm: 'hithere' } };

      drawHeroImg('DONKEY', testObject.images);

      const { src } = document.getElementsByTagName('img')[0];
      expect(src).toBe('http://localhost/hithere');
    });
  });
});

describe('Given a function drawHeroName', () => {
  describe('When invoked with parameter Jhon Cena', () => {
    test('title innerText should be Jhon Cena Details', () => {
      const name = 'Jhon Cena';

      const nameElement = document.createElement('div');
      nameElement.id = 'hero__title-name';
      const body = document.querySelector('body');
      body.appendChild(nameElement);

      drawTitle(name);

      const { innerText } = document.getElementById('hero__title-name');
      expect(innerText).toBe('Jhon Cena Details');
    });
  });
});

describe('Given a funciton draw input', () => {
  describe('When invoked with argument "el pollito pio"', () => {
    test('name Inout value should be "el pollito pio""', () => {
      const name = 'el pollito pio';

      const nameInput = document.createElement('input');
      nameInput.id = 'hero__name';
      const body = document.querySelector('body');
      body.appendChild(nameInput);

      drawInput(name);
      const { value } = document.getElementById('hero__name');
      expect(value).toBe(name);
    });
  });
});
describe('Given a funciton draw HeroId', () => {
  describe('When invoked with argument 15', () => {
    test('it should return "el pollito pio"', () => {
      const id = 15;

      const idElement = document.createElement('div');
      idElement.id = 'hero__id';
      const body = document.querySelector('body');
      body.appendChild(idElement);

      drawHeroId(id);
      const { innerText } = document.getElementById('hero__id');
      expect(innerText).toBe(15);
    });
  });
});

describe('Given a function getHeroBio', () => {
  describe('When invoked with an object with a property age: 32', () => {
    test('span innerHTML should be "<b>age</b> : 32"', () => {
      const biographySection = document.createElement('section');
      biographySection.className = 'biography';

      const body = document.querySelector('body');
      body.appendChild(biographySection);

      const testBio = { age: 32 };
      const expectedOutput = '<b>age</b> : 32';
      getHeroBio(testBio);
      const { innerHTML } = document.getElementsByTagName('span')[0];
      expect(innerHTML).toBe(expectedOutput);
    });
  });
});

describe('Given a function getHeroStats', () => {
  describe('Wehn invoked with an object {speed: 77}', () => {
    test('Then the first div height should be 77%', () => {
      const graph = document.createElement('section');
      graph.className = 'graph';

      const body = document.querySelector('body');
      body.appendChild(graph);

      const testStats = { speed: 77 };
      const expectedOutput = '77%';
      getHeroStats(testStats);
      const { height } = document.getElementsByClassName('graph__bar')[0].style;
      expect(height).toBe(expectedOutput);
    });
    test('Then the div color should be green', () => {
      const { backgroundColor } = document.getElementsByClassName('graph__bar')[0].style;
      const expectedColor = 'rgb(50, 168, 82)';
      expect(backgroundColor).toBe(expectedColor);
    });
  });
  describe('When invoked but speed property is 50', () => {
    test('Then div should be yellow', () => {
      const testStats = { speed: 50 };
      getHeroStats(testStats);
      const { backgroundColor } = document.getElementsByClassName('graph__bar')[1].style;
      const expectedColor = 'rgb(229, 235, 52)';

      expect(backgroundColor).toBe(expectedColor);
    });
  });
  describe('When invoked but speed property is 25', () => {
    test('Then div should be red', () => {
      const testStats = { speed: 25 };
      getHeroStats(testStats);
      const { backgroundColor } = document.getElementsByClassName('graph__bar')[2].style;
      const expectedColor = 'rgb(235, 58, 52)';

      expect(backgroundColor).toBe(expectedColor);
    });
  });
});
describe('Given a drawHeroName ', () => {
  describe('when invoked with  a parameter "David"', () => {
    test('Should not throw an error', () => {
      expect(() => drawHeroName('David')).not.toThrowError();
    });
  });
});
describe('Given a drawHeroInfo ', () => {
  describe('when invoked with  an object hero', () => {
    test('Should not throw an error', () => {
      const heroTest = {
        name: 'John', id: 4, biography: { status: 'single' }, images: { sm: 'x' }, powerstats: { agility: 14 }
      };
      expect(() => drawHeroInfo(heroTest)).not.toThrowError();
    });
  });
});
