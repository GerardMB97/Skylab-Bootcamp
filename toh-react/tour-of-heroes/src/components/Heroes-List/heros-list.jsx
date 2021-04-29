import React, { useState, useEffect } from 'react';
import ListElement from './list-element';
import Header from '../Header/Header';
import heroStore from '../../flux/stores/heroStore';
import { updateHero } from '../../flux/actions/heroActions';

export default function HeroesList() {
  const [heroes, setHeroes] = useState(heroStore.getHeroes());
  const [heroName, setHeroName] = useState('');

  function onChanges() {
    setHeroes(heroStore.getHeroes());
  }

  useEffect(() => {
    heroStore.addEventListener(onChanges);

    return () => {
      heroStore.removeEventListener(onChanges);
    };
  }, [heroes]);

  return (
    <div>
      <Header />
      <h2 className="p-4">My Heroes</h2>
      <div className="ml-4 d-flex">
        <label htmlFor="heroName">
          Hero name:
          <input
            className="ml-2"
            id="heroName"
            onChange={(event) => setHeroName(event.target.value)}
            value={heroName}
          />
        </label>

        <button
          className="ml-2 add"
          type="button"
          onClick={() => {
            updateHero({ name: heroName });
            setHeroName('');
          }}
        >
          add
        </button>

      </div>
      <ul className="heroes p-4">
        {heroes.map((hero) => (
          <ListElement
            hero={hero}
            heroName={heroName}
            heroNameSetter={setHeroName}
            key={hero.id}
          />
        ))}
      </ul>
    </div>
  );
}
