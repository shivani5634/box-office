import React from "react";
import { Switch, Route } from "react-router-dom";
import Navs from "./components/Navs";

function App() {
  return (
    <div>
      <Navs />
      <Switch>
        <Route exact path="/">
          this is my home page
        </Route>
        <Route exact path="/starred">
          this is my starred page
        </Route>
        <Route>this is not found 404.</Route>
      </Switch>
    </div>
  );
}

export default App;
