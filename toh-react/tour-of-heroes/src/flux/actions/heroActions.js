import dispatcher from '../dispatcher/dispatcher';
import heroActionTypes from './heroActionTypes';

export function loadHero(heroId) {
  dispatcher.dispatch({
    type: heroActionTypes.LOAD_HEROES,
    heroId
  });
}

export function deleteHeroes(heroId) {
  dispatcher.dispatch({
    type: heroActionTypes.REMOVE_HERO,
    payload: heroId
  });
}

export function updateHero(hero) {
  // eslint-disable-next-line no-debugger
  debugger;
  dispatcher.dispatch({
    type: hero.id ? heroActionTypes.UPDATE_HERO : heroActionTypes.ADD_HERO,
    hero
  });
}
