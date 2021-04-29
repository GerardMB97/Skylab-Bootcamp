import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import '../Heroes-List/heroes-list.css';
import heroStore from '../../flux/stores/heroStore';
import { loadHero } from '../../flux/actions/heroActions';

// eslint-disable-next-line react/prop-types
export default function HeroDetail(props) {
  // eslint-disable-next-line no-debugger
  debugger;
  const [hero, setHero] = useState(heroStore.getHero());
  // eslint-disable-next-line react/prop-types
  const [heroId] = useState(+props.match.params.heroId);

  function selectedChange() {
    setHero(heroStore.getHero());
  }

  useEffect(() => {
    heroStore.addEventListener(selectedChange);

    if (heroId) {
      loadHero(heroId);
    }
    return () => heroStore.removeEventListener(selectedChange);
  }, [heroId]);

  function drawHero() {
    return (
      <div>
        <Header />
        <div className="p-4">
          <h2 id="hero__title-name">{hero.name}</h2>
          <div id="hero__id">
            <span>
              id:
              {hero.id}
            </span>
          </div>
          <div>
            <label htmlFor="heroName">
              name:
              <input id="heroName" />
            </label>
          </div>
          <div className="d-flex">
            <button type="submit" className="m-4">go back</button>
            <button type="submit" className="m-4">save</button>
          </div>
        </div>
      </div>
    );
  }

  function noHero() {
    return <h1>Unknown hero</h1>;
  }

  return hero ? drawHero() : noHero();
}
