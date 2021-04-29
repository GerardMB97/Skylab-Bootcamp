const { describe, expect } = require('@jest/globals');
const {
  drawPokemonName, drawPokemonSprite, getPokeInfo, parseIdFromLocation, drawPokemonTypes,
  drawPokemonInfo, showText
} = require('./pokemon-detail');

beforeEach(() => {
  const pokeInfo = {
    name: 'bulbasaur',
    age: 15
  };
  const jsonResponse = new Promise((resolve) => resolve(pokeInfo));
  const fetchResponseMock = { json: jest.fn().mockReturnValue(jsonResponse) };
  const fetchReturnValue = new Promise((resolve) => resolve(fetchResponseMock));
  global.fetch = jest.fn().mockReturnValue(fetchReturnValue);

  const main = document.createElement('main');
  const body = document.querySelector('body');
  body.appendChild(main);
});

describe('Given a function parseIDFromLocation', () => {
  describe('When passed a location with search ?id=4  ', () => {
    test('Then it should return t4', () => {
      const location = { search: '?id=4' };
      const id = parseIdFromLocation(location);
      expect(id).toBe(4);
    });
  });
});

describe('Given a function gePokemonInfo', () => {
  describe('When invoked', () => {
    test('Then return an object with count equals 1', () => getPokeInfo().then((pokeInformation) => {
      expect(pokeInformation).toEqual({ age: 15, name: 'bulbasaur' });
    }));
  });
});

describe('Given a function drawPokemonSprite', () => {
  describe('When invoked with argument { front_default:"bulbasaur"}', () => {
    test('It should add an image with src bulbasaur', () => {
      const testObject = { sprites: { front_default: 'bulbasaur' } };
      const spriteScreen = document.createElement('div');
      spriteScreen.className = 'sprite-screen';
      const body = document.querySelector('body');
      body.appendChild(spriteScreen);
      drawPokemonSprite(testObject);

      const img = document.querySelector('img');
      expect(img.src).toBe('http://localhost/bulbasaur');
    });
  });
});
describe('Given a function drawPokemonName', () => {
  describe('When invoked with argument "bulbasaur"', () => {
    test('It should add an h2 with innertext bulbasaur', () => {
      const pokeInfo = { name: 'bulbasaur', id: 1 };
      drawPokemonName(pokeInfo);

      const h2 = document.querySelector('h2');
      expect(h2.innerText).toBe('#1 BULBASAUR');
    });
  });
});
describe('Given a function drawPokemonTypes', () => {
  describe('When invoked with an object with 2 types', () => {
    test('It should add a span with fire as inner text', () => {
      const pokeTypes = {
        types: [
          {
            type: {
              name: 'fire'
            }
          }
        ]
      };
      const typesDiv = document.createElement('div');
      typesDiv.className = 'types';
      const body = document.querySelector('body');
      body.appendChild(typesDiv);

      drawPokemonTypes(pokeTypes);

      const span = document.querySelector('.type0');

      expect(span.innerText).toBe('fire');

      drawPokemonTypes(pokeTypes);
      expect(span.style.backgroundColor).toEqual('rgb(255, 97, 67)');
    });
  });
});

describe('Given a function drawPokemonInfo', () => {
  describe('When invoked with an argument "{height:45, wegiht:905}"', () => {
    test('Then it should add 2 p with inner text height:45 weight:905', () => {
      const testObject = { height: 45, weight: 905 };

      const div = document.createElement('div');
      div.className = 'info-screen';

      const body = document.querySelector('body');
      body.appendChild(div);
      drawPokemonInfo(testObject);

      const weightP = document.querySelector('.weight');
      const heightP = document.querySelector('.height');
      expect(weightP.innerHTML).toBe('w');
      expect(heightP.innerHTML).toBe('h');
    });
  });
});
describe('Given a function showText', () => {
  describe('When invoked with arguments body, "hello", 0, 100"', () => {
    test('Then body inner html should be hello', () => {
      const body = document.querySelector('body');
      body.innerHTML = '';
      showText(body, 'hello', 0, 100);

      expect(body.innerHTML).toBe('h');
    });
  });
});
