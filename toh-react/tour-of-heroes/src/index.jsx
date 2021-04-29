import React from 'react';
import { render } from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter, Route, Switch, Link, Redirect
} from 'react-router-dom';
import HeroesList from './components/Heroes-List/heros-list';
import Dashboard from './components/Dashboard/dashboard';
import HeroDetail from './components/Hero-Detail/hero-detail';

import heroStore from './flux/stores/heroStore';

const heroes = heroStore.getHeroes();

render(

  <BrowserRouter>
    <Switch>
      <Route path="/" exact>
        <Dashboard heroes={heroes} />
      </Route>
      <Route path="/heroes-list">
        <HeroesList />
      </Route>
      <Route path="/hero-detail/:heroId" component={HeroDetail} />
      <Redirect path="/dashboard" to="/" />
      <Route>
        <h1>End of path!</h1>
        <Link to="/">Back to safety</Link>
      </Route>
    </Switch>
  </BrowserRouter>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
