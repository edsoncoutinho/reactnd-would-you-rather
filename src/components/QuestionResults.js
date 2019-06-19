import React, { Component } from 'react';
import { connect } from 'react-redux';
import { formatQuestion } from '../utils/helpers';

class QuestionResults extends Component {
  render() {
    const { authedUser, question } = this.props;

    const { name, avatar, optionOne, optionTwo, optionOnePercent, optionTwoPercent, votesNumber } = question;
    
    const styleOptionOne = {
      width: `${optionOnePercent}%`
    }

    const styleOptionTwo = {
      width: `${optionTwoPercent}%`
    }

    return (
      <div className="card">
        <h5 className="card-header">Asked by {name}</h5>
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
              <h5>Results:</h5>
              <div className="card">
                <div className="card-body">
                  <span className="badge badge-pill badge-success float-right">{optionOne.votes.includes(authedUser) && 'Your vote!'}</span>
                  <p>Would you rather {optionOne.text}</p>
                  <div className="progress">
                    <div className="progress-bar bg-info" role="progressbar" style={styleOptionOne} aria-valuenow={optionOnePercent} aria-valuemin="0" aria-valuemax="100">{optionOnePercent}%</div>
                  </div>
                  <p className="text-center text-muted">{optionOne.votes.length} out of {votesNumber} votes</p>
                </div>
              </div>

              <div className="card">
                <div className="card-body">
                  <span className="badge badge-pill badge-success float-right">{optionTwo.votes.includes(authedUser) && 'Your vote!'}</span>
                  <p>Would you rather {optionTwo.text}</p>
                  <div className="progress">
                    <div className="progress-bar bg-info" role="progressbar" style={styleOptionTwo} aria-valuenow={optionTwoPercent} aria-valuemin="0" aria-valuemax="100">{optionTwoPercent}%</div>
                  </div>
                  <p className="text-center text-muted">{optionTwo.votes.length} out of {votesNumber} votes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
};

function mapStateToProps({ authedUser, users, questions }, { id }) {
  const question = questions[id];

  return {
    authedUser,
    question: question
      ? formatQuestion(question, users[question.author])
      : null
  };
};

export default connect(mapStateToProps)(QuestionResults);