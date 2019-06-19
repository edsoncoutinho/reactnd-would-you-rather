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

    const { user } = this.state;
    const { dispatch } = this.props;

    dispatch(setAuthedUser(user));
  };

  render() {
    const { user } = this.state;
    return (
      <div className="container">
        <div className="card">
          <h5 className="card-header">Would You Rather</h5>
          <div className="card-body">
            <form onSubmit={this.handleSubmit}>
              <h3>Sign in</h3>
              <div className="form-group">
                <select
                  id="user"
                  className="form-control"
                  onChange={this.handleChange}
                  defaultValue={user}
                >
                  <option value="">Select User</option>
                  {
                    this.props.options.map(option =>
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    )
                  }
                </select>
              </div>
              <div className="form-group">
                <button
                  className="btn btn-outline-dark btn-block"
                  disabled={user === ''}
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
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