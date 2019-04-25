import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { signUp } from "../ducks/auth";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();

    this.props.signUp(this.state.username, this.state.password);
    // some other things
  }

  render() {
    if (this.props.auth.username) {
      return <Redirect to="/account" />;
    }
    return (
      <div>
        <h1>Signup</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Username
            <input
              onChange={this.handleChange}
              value={this.state.username}
              name="username"
            />
          </label>
          <label>
            Password
            <input
              onChange={this.handleChange}
              value={this.state.password}
              name="password"
              type="password"
            />
          </label>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = reduxState => reduxState;

export default connect(
  mapStateToProps,
  { signUp }
)(Signup);
