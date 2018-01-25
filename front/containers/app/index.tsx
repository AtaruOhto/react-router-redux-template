import React from 'react';
import { Route, Link } from 'react-router-dom'
import Home from 'containers/home/index'
import About from 'containers/about/index'
import {HOME_ROUTE, ABOUT_ROUTE} from "router/couterRouter";

const App = () => (
  <div>
    <header>
      <Link to={HOME_ROUTE}>Home</Link>
      <Link to={ABOUT_ROUTE}>About</Link>
    </header>

    <main>
      <Route exact path={HOME_ROUTE} component={Home} />
      <Route exact path={ABOUT_ROUTE} component={About} />
    </main>
  </div>
);

export default App
