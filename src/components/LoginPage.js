import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setAuthedUser } from '../actions/authedUser';

class LoginPage extends Component {
  state = {
    user: ''
  };

  handleChange = (e) => {
    const user = e.target.value;

    this.setState(() => ({
      user
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const user = this.state.user;
    const { dispatch } = this.props;

    dispatch(setAuthedUser(user));
  };

  render() {
    return (
      <div>
        <h3>Sign in</h3>
        <form onSubmit={this.handleSubmit}>
          <select
            onChange={this.handleChange}
            defaultValue={this.state.user}
          >
            <option value="">Select User</option>
            {
              this.props.options.map(option =>
                <option key={option.value} value={option.value}>{option.label}</option>
              )
            }
          </select>
          <button>
            Sign in
          </button>
        </form>

      </div>
    );
  };
};

function mapStateToProps({ users }) {
  const options = Object.keys(users).map(uid => ({ "label": users[uid].name, "value": users[uid].id, "avatar": users[uid].avatarURL }));
  return {
    options
  };
};

export default connect(mapStateToProps)(LoginPage);