import React, { Component } from 'react';
import { connect } from 'react-redux';

class ScoreDetails extends Component {
  render() {
    const { name, avatar, score, answeredQuestions, createdQuestions, leaders } = this.props;

    return (
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-sm-3 border-right d-flex align-items-center justify-content-center">
              <img
                src={avatar}
                alt={`Avatar of ${name}`}
                className="card-avatar"
              />
            </div>
            <div className="col-sm-6">
              <h4><span className="badge badge-pill badge-success">{leaders}</span> {name}</h4>
              <div className="mt-4">
                <p className="text-justify">Answered questions: {answeredQuestions}</p>
                <p className="text-justify">Created questions: {createdQuestions}</p>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="card text-center">
                <div className="card-header">Score</div>
                <div className="card-body">
                  <h4><span className="badge badge-pill badge-secondary">{score}</span></h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
};

function mapStateToProps({ users }, { id, ranking }) {
  const user = users[id];

  const answeredQuestions = user.questions.length;
  const createdQuestions = Object.keys(user.answers).length;

  let leaders = '';
  switch (ranking) {
    case 0:
      leaders = '1º';
      break;
    case 1:
      leaders = '2º';
      break;
    case 2:
      leaders = '3º';
      break;
    default:
      leaders = '';
      break
  }

  return {
    name: user.name,
    avatar: user.avatarURL,
    score: answeredQuestions + createdQuestions,
    answeredQuestions,
    createdQuestions,
    leaders
  };
};

export default connect(mapStateToProps)(ScoreDetails);