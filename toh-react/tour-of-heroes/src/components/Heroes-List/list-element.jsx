import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { deleteHeroes, updateHero } from '../../flux/actions/heroActions';

// eslint-disable-next-line react/prop-types
export default function ListElement({ hero, heroName, heroNameSetter }) {
  // eslint-disable-next-line no-debugger
  debugger;
  function onClickRemove() {
    deleteHeroes(hero.id);
  }

  function onClickUpdate() {
    // eslint-disable-next-line no-debugger
    debugger;
    updateHero({ name: heroName, id: hero.id });
  }
  return (
    <li>
      <Link to={`/hero-detail/${hero.id}`}>
        <span className="badge">{hero.id}</span>
        {hero.name}
      </Link>
      <button onClick={onClickRemove} className="delete" type="button">X</button>
      <button onClick={() => { onClickUpdate(); heroNameSetter(''); }} className="delete" type="button">Update</button>
    </li>
  );
}

ListElement.propTypes = {
  hero: PropTypes.shape({ id: PropTypes.number, name: PropTypes.string }).isRequired
};
