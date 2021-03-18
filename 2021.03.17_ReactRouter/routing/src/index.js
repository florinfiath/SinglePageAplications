import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./components/home";
import About from "./components/about";
import Services from "./components/services";
import './style.css'

const App = () => {
  return (
    <Router>
      <div>
        <h3>Introduction to ReactRouterDOM</h3>
        <ul className="nav">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li className="sub">
            <Link to="/services">Services</Link>
            <ul>
              <li>
                <Link to="/services/service1">Service1</Link>
              </li>
              <li>
                <Link to="/services/service2">Service2</Link>
              </li>
              <li>
                <Link to="/services/service3">Service3</Link>
              </li>
            </ul>
          </li>
        </ul>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/services">
            <Services />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
