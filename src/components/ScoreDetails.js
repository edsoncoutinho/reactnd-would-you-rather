import React, { Component } from 'react'
import { connect } from 'react-redux'

class ScoreDetails extends Component {
  render() {
    const { name, avatar, score, answeredQuestions, createdQuestions, leaders } = this.props

    return (
      <div>
        <h3>{name}</h3>
        <p>Ranking: {leaders}</p>
        <p><img
          src={avatar}
          alt={`Avatar of ${name}`}
        /></p>
        <p>Answered questions: {answeredQuestions}</p>
        <p>Created questions: {createdQuestions}</p>
        <h4>Score</h4>
        <p>{score}</p>
      </div>
    )
  }
}

function mapStateToProps({ users }, { id, ranking }) {
  const user = users[id];

  const answeredQuestions = user.questions.length;
  const createdQuestions = Object.keys(user.answers).length;

  let leaders = '';
  switch (ranking) {
    case 0:
      leaders = 'first';
      break;
    case 1:
      leaders = 'second';
      break;
    case 2:
      leaders = 'third';
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
  }
}

export default connect(mapStateToProps)(ScoreDetails)