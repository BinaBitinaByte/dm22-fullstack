import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function Account(props) {
  if (!props.auth.username) {
    return (
      <h1>
        <Link to="/login">Please Login </Link>
      </h1>
    );
  }
  return (
    <div>
      <h1>Account</h1>
      <p>{props.auth.balance}</p>
    </div>
  );
}

const mapStateToProps = reduxState => reduxState;
export default connect(mapStateToProps)(Account);
