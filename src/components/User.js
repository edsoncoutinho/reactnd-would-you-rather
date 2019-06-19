import React, { Component } from 'react';
import { connect } from 'react-redux';
import { unsetAuthedUser } from '../actions/authedUser';

class User extends Component {
  handleLogout = (e) => {
    e.preventDefault();
    this.props.dispatch(unsetAuthedUser());
  };

  render() {
    const { user } = this.props;

    if (!user) {
      return null;
    }

    return (
      <span className="navbar-text">
        <span>{`Hello, ${user.name}`}</span>
        <img
          className="navbar-avatar bg-white"
          src={user.avatarURL}
          alt={`Avatar of ${user.name}`}
        />
        <button className="btn btn-outline-secondary" onClick={this.handleLogout}>Logout</button>
      </span>
    );
  };
};

const mapStateToProps = ({ authedUser, users }) => {
  return {
    user: authedUser
      ? users[authedUser]
      : null

  };
};

export default connect(mapStateToProps)(User);