import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Account from "./components/Account";
import Signup from "./components/Signup";
import "./App.css";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Switch>
          <Route path="/signup" component={Signup} />
          <Route path="/account" component={Account} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
