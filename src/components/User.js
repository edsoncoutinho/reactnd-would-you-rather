import React from 'react';
import { connect } from 'react-redux';
import { UNSET_AUTHED_USER } from '../actions/authedUser';

const User = props => {
  if (!props.user) {
    return null;
  }

  return (
    <span className="navbar-text">
      <span>{`Hello, ${props.user.name}`}</span>
      <img
        className="navbar-avatar bg-white"
        src={props.user.avatarURL}
        alt={`Avatar of ${props.user.name}`}
      />
      <button className="btn btn-outline-secondary" onClick={props.logout}>Logout</button>
    </span>
  );
};

const mapStateToProps = ({ authedUser, users }) => {
  return {
    user: authedUser
      ? users[authedUser]
      : null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch({ type: UNSET_AUTHED_USER }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(User);