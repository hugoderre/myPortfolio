import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import Mentions from './components/Mentions';

const Main = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/mentions-legales' component={Mentions}></Route>
    </Switch>
  );
}

export default Main;