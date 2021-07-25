import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Home from "../pages/Home";
import Offers from "../pages/Offers";

const index = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/offers" exact component={Offers} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default index;
