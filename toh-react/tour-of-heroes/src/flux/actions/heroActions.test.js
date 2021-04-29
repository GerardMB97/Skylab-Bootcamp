import { describe } from '@jest/globals';
import dispatcher from '../dispatcher/dispatcher';
import { loadHero, updateHero, deleteHeroes } from './heroActions';

describe('Given a save hero function', () => {
  describe('When inoked with an object with no ID', () => {
    test('Then app dispatcher object.type will be "ADD_HERO"', () => {
      const spy = jest.spyOn(dispatcher, 'dispatch');
      const hero = { name: 'Dr.Dre' };
      updateHero(hero);

      const dispatchArg = { hero: { name: 'Dr.Dre' }, type: 'ADD_HERO' };

      expect(spy).toHaveBeenCalledWith(dispatchArg);
      spy.mockRestore();
    });
  });
  describe('When invoked with an object with ID', () => {
    test('Then app dispatcher object.type will be "UPDTAE_HERO"', () => {
      const spy = jest.spyOn(dispatcher, 'dispatch');
      const hero = { name: 'Dr.Dre', id: 15 };
      updateHero(hero);
      const dispatchArg = { hero: { name: 'Dr.Dre', id: 15 }, type: 'UPDATE_HERO' };

      expect(spy).toHaveBeenCalledWith(dispatchArg);
      spy.mockRestore();
    });
  });
});
describe('Given a loadHero function', () => {
  describe('When invoked with 15 as argument', () => {
    test('dispatcher object.type will be "LOAD_HERO"', () => {
      const spy = jest.spyOn(dispatcher, 'dispatch');
      loadHero(15);
      const dispatchArg = { heroId: 15, type: 'LOAD_HEROES' };
      expect(spy).toHaveBeenCalledWith(dispatchArg);
      spy.mockRestore();
    });
  });
});
describe('Given a deleteHeroes function', () => {
  describe('When invoked with 15 as argument', () => {
    test('dispatcher object.type will be "DELETE_HERO"', () => {
      const spy = jest.spyOn(dispatcher, 'dispatch');
      deleteHeroes(15);
      const dispatchArg = { payload: 15, type: 'REMOVE_HERO' };
      expect(spy).toHaveBeenCalledWith(dispatchArg);
      spy.mockRestore();
    });
  });
});
