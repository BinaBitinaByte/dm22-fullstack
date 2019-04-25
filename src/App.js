import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import Home from "./components/Home";
import Account from "./components/Account";
import Signup from "./components/Signup";
import "./App.css";
import { me } from "./ducks/auth";

class App extends React.Component {
  componentDidMount() {
    this.props.me();
  }
  render() {
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
}

export default connect(
  state => state,
  { me }
)(App);
