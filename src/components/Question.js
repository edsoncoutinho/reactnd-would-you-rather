import React, { Component } from 'react';
import { connect } from 'react-redux';
import { formatQuestion } from '../utils/helpers';
import { Link, withRouter } from 'react-router-dom';

class Question extends Component {
  render() {
    const { question } = this.props;

    if (question === null) {
      return <p>This Question doesn't exist</p>;
    }

    const { id, name, avatar, text } = question;
    return (

      <div className="card">
        <div className="card-header">
          {name} asks:
        </div>

        <div className="card-body">
          <div className="row">
            <div className="col-sm-4 d-flex align-items-center justify-content-center border-right">
              <img
                src={avatar}
                alt={`Avatar of ${name}`}
                className='card-avatar'
              />
            </div>
            <div className="col-sm-8">
              <h5>Would you rather</h5>
              <p>... {text} ...</p>
              <Link to={`/questions/${id}`}>
                <button className="btn btn-outline-dark btn-block">View Poll</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  };
};

function mapStateToProps({ users, questions }, { id }) {
  const question = questions[id];
  return {
    question: question
      ? formatQuestion(question, users[question.author])
      : null
  };
};

export default withRouter(connect(mapStateToProps)(Question));