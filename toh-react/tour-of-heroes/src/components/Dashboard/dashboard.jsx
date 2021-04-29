import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from '../Header/Header';

import './dasboard.css';

export default function Dashboard({ heroes }) {
  return (
    <div>
      <Header />
      <h3>Top Heroes</h3>
      <div className="grid grid-pad p-4">
        {heroes.map((hero) => <Link key={hero.id} to="/hero-detail/:heroId" className="col-1-4"><div className="module hero"><h4>{hero.name}</h4></div></Link>)}
      </div>
    </div>
  );
}
Dashboard.propTypes = {
  heroes: PropTypes.arrayOf(PropTypes.object).isRequired
};
