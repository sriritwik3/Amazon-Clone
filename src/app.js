import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
