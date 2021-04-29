import EventEmitter from 'events';
import dispatcher from '../dispatcher/dispatcher';
import heroActionTypes from '../actions/heroActionTypes';

const CHANGE = 'CHANGE';
let heroes = [
  { id: 1, name: 'Spider Man' }];

let selectedHero = null;
class HeroStore extends EventEmitter {
  addEventListener(callback) {
    this.on(CHANGE, callback);
  }

  removeEventListener(callback) {
    this.removeListener(CHANGE, callback);
  }

  emitChange() {
    this.emit(CHANGE);
  }

  // eslint-disable-next-line class-methods-use-this
  getHeroes() {
    return heroes;
  }

  // eslint-disable-next-line class-methods-use-this
  getHero() {
    return selectedHero;
  }
}
function generateId() {
  if (heroes.length === 0) {
    return 1;
  }
  const IDarray = heroes.map((hero) => hero.id);
  const biggestID = Math.max(...IDarray);
  const nextID = biggestID + 1;
  return nextID;
}
const heroStore = new HeroStore();

dispatcher.register((action) => {
  // eslint-disable-next-line no-debugger
  debugger;
  switch (action.type) {
    case heroActionTypes.ADD_HERO:
      heroes = [...heroes, { ...action.hero, id: generateId() }];
      heroStore.emitChange();
      break;
    case heroActionTypes.REMOVE_HERO:
      heroes = heroes.filter((hero) => hero.id !== action.payload);
      heroStore.emitChange();
      break;
    case heroActionTypes.UPDATE_HERO:
      heroes = heroes.map((hero) => {
        if (hero.id === action.hero.id) {
          return action.hero;
        }
        return hero;
      });
      heroStore.emitChange();
      break;
    case heroActionTypes.LOAD_HEROES:
      selectedHero = heroes.find((hero) => hero.id === action.heroId);
      heroStore.emitChange();
      break;
    default:
      break;
  }
});

export default heroStore;
