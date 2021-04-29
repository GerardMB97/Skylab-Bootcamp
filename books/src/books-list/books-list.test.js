const {
  drawMagazineList
} = require('./books-list');

const { getInfo, drawMagazineCover, drawMagazineTitle } = require('../shared/shared');

beforeAll(() => {
  const magazineList = ['hello'];

  const jsonResponse = new Promise((resolve) => resolve(magazineList));
  const fetchResponseMock = { json: jest.fn().mockReturnValue(jsonResponse) };
  const fetchReturnValue = new Promise((resolve) => resolve(fetchResponseMock));
  global.fetch = jest.fn().mockReturnValue(fetchReturnValue);
});

beforeEach(() => {
  let body = document.querySelector('body');
  body = '';
});

describe('Given a function getInfo', () => {
  describe('When invoked', () => {
    test('Then it should return an empty array', () => getInfo().then((list) => {
      expect(list).toEqual(['hello']);
    }));
  });
});

describe('Given a function createMagazineList', () => {
  describe('When invoked with an object that has a property items that is an array of length 1', () => {
    test('Then it should draw 1 li element1', () => {
      const testObject = { items: [{ volumeInfo: { imageLinks: 'hi' } }] };

      const ul = document.createElement('ul');
      const body = document.querySelector('body');
      body.append(ul);

      drawMagazineList(testObject);
      const li = document.getElementsByTagName('li');
      expect(li.length).toBe(1);
    });
  });
});
describe('Given a function drawMagazineCover', () => {
  describe('When invoked recieving a string "hi" an a a HTMl element and a string hello', () => {
    test('Then it should create an img with source hi and alt hello', () => {
      const a = document.createElement('a');

      const body = document.querySelector('body');
      body.innerHTML = '';
      body.appendChild(a);

      drawMagazineCover('hi', a, 'hello');

      const img = document.querySelector('img');
      expect(img.src).toBe('http://localhost/hi');
      expect(img.alt).toBe('hello');
    });
  });
});
describe('Given a function drawMagazineTitle', () => {
  describe('When invoked recieving a string "hi" an a a HTMl element ', () => {
    test('Then it should create an h2 with inner text hi', () => {
      const a = document.createElement('a');

      const body = document.querySelector('body');
      body.innerHTML = '';
      body.appendChild(a);

      drawMagazineTitle('hi', a);
      const h2 = document.querySelector('h2');
      expect(h2.innerText).toBe('hi');
    });
  });
});
