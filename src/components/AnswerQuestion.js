import React, { Component } from 'react';
import { connect } from 'react-redux';
import { formatQuestion } from '../utils/helpers';
import { handleAddQuestionAnswer } from '../actions/questions';

class AnswerQuestion extends Component {
  state = {
    answer: "optionOne"
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { authedUser, qid, dispatch } = this.props;
    const { answer } = this.state;

    dispatch(handleAddQuestionAnswer({ authedUser, qid, answer }));
  };

  handleChange = (e) => {
    const answer = e.target.value;

    this.setState(() => ({
      answer: answer
    }));
  };

  render() {
    const { question } = this.props;

    return (
      <div>
        <span>{ question.name } asks:</span>
        <img
          src={question.avatar}
          alt={`Avatar of ${question.name}`}
          className='avatar'
        />
        <form className='new-tweet' onSubmit={this.handleSubmit}>
          <input type="radio" name="answer" value="optionOne" defaultChecked={this.state.answer === 'optionOne'} onClick={this.handleChange} /> {question.optionOne.text}<br />
          <input type="radio" name="answer" value="optionTwo" defaultChecked={this.state.answer === 'optionTwo'} onClick={this.handleChange} /> {question.optionTwo.text}<br />
          <button type='submit'>
            Submit
          </button>
        </form>
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

export default connect(mapStateToProps)(AnswerQuestion);