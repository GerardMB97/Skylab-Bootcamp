const {
  parseIdFromLocation, drawMagazineDescription, drawMagazineAuthors, drawMagazinePublisher
} = require('./book-detail');

describe('Given a function parseIdFromLocation', () => {
  describe('When invoked with an object that has search ?id=4567', () => {
    test('then it should return 4567', () => {
      const location = { search: '?id=qQwEAAAAMBAJ' };
      const result = parseIdFromLocation(location);
      expect(result).toBe('qQwEAAAAMBAJ');
    });
  });
});
describe('Given a function drawMagazineInfo', () => {
  describe('When invoked with an object that has a property description saying "hello"', () => {
    test('then it add a p with innerText hello', () => {
      const testObject = { description: 'hello' };
      const body = document.querySelector('body');

      drawMagazineDescription(body, testObject);
      const p = document.querySelector('p');
      expect(p.innerText).toBe('hello');
    });
  });
});
describe('Given a function drawMagazineAuthors', () => {
  describe('When invoked with an array [Jhon, David]', () => {
    test('then it add a li with innerText Jhon David', () => {
      const body = document.querySelector('body');

      drawMagazineAuthors(['Jhon', 'David'], body);
      const li = document.getElementsByTagName('li')[0];
      expect(li.innerText).toBe('Authors: Jhon David ');
    });
  });
});
describe('Given a function drawMagazinePublisher', () => {
  describe('When invoked with a string saying Fred', () => {
    test('then it should add a li with innerText Fred', () => {
      const body = document.querySelector('body');

      drawMagazinePublisher('Fred', body);
      const li = document.getElementsByTagName('li')[1];
      expect(li.innerText).toBe('Publisher: Fred');
    });
  });
});
