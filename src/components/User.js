import React, { Component } from 'react';
import { connect } from 'react-redux';
import { unsetAuthedUser } from '../actions/authedUser';

class User extends Component {
  handleLogout = (e) => {
    e.preventDefault();
    this.props.dispatch(unsetAuthedUser());
  }

  render() {
    const { user } = this.props
    return (
      <ul>
        <li>{`Hello, ${user.name}`}</li>
        <li>
          <img
            src={user.avatarURL}
            alt={`Avatar of ${user.name}`}
            className='avatar'
          />
        </li>
        <li><a onClick={this.handleLogout}>Logout</a></li>
      </ul>
    )
  }
}

const mapStateToProps = ({ authedUser, users }) => {
  return {
    user: users[authedUser]
  }
}

export default connect(mapStateToProps)(User)