import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Dashboard from "./features/Dashboard";

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Redirect to="/" />
    </Switch>
  );
};

export default App;
