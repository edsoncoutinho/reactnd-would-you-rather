import React, { Component } from 'react';
import { connect } from 'react-redux';
import { formatQuestion } from '../utils/helpers';

class QuestionResults extends Component {
  render() {
    const { authedUser, question } = this.props;

    if (question === null) {
      return <p>This Question doesn't exist</p>;
    }

    const { name, avatar, optionOne, optionTwo, optionOnePercent, optionTwoPercent, votesNumber } = question;
    return (
      <div>
        <p>Asked by {name}</p>
        <p><img
          src={avatar}
          alt={`Avatar of ${name}`}
          className='avatar'
        /></p>
        <p>Results:</p>
        <p>Would you rather {optionOne.text}</p>
        <p>{optionOne.votes.includes(authedUser) && 'Your vote was in option one'}</p>
        <p>{optionOnePercent}%</p>
        <p>{optionOne.votes.length} out of {votesNumber} votes</p>
        <p>Would you rather {optionTwo.text}</p>
        <p>{optionTwo.votes.includes(authedUser) && 'Your vote was in option two'}</p>
        <p>{optionTwoPercent}%</p>
        <p>{optionTwo.votes.length} out of {votesNumber} votes</p>
      </div>
    );
  };
};

function mapStateToProps({ authedUser, users, questions }, { id }) {
  const question = questions[id];

  return {
    authedUser,
    qid: id,
    question: question
      ? formatQuestion(question, users[question.author])
      : null
  };
};

export default connect(mapStateToProps)(QuestionResults);