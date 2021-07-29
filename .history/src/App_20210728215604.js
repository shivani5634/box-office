import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import Navs from './components/Navs';
import Home from './pages/Home';
import Starred from './pages/Starred';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/starred">
        <Starred />
      </Route>
      <Route exact path="/show/:id"></Route>
      <Route>
        <div>not found</div>
      </Route>
    </Switch>
  );
}

export default App;