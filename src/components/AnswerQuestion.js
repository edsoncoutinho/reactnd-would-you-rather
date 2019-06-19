import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
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

    if (question === null) {
      return <Redirect to='/404' />;
    }

    return (
      <div className="card">
        <h5 className="card-header">{question.name} asks:</h5>
        <div className="card-body">
          <div className="row">
            <div className="col-sm-4 d-flex align-items-center justify-content-center border-right">
              <img
                src={question.avatar}
                alt={`Avatar of ${question.name}`}
                className='card-avatar'
              />
            </div>
            <div className="col-sm-8">
              <form onSubmit={this.handleSubmit}>
                <h4>Would You Rather ...</h4>
                <div className="form-group">
                  <input type="radio" id="optionOne" name="answer" value="optionOne" defaultChecked={this.state.answer === 'optionOne'} onClick={this.handleChange} /> {question.optionOne.text}
                </div>
                <div className="form-group">
                  <input type="radio" name="answer" value="optionTwo" defaultChecked={this.state.answer === 'optionTwo'} onClick={this.handleChange} /> {question.optionTwo.text}
                </div>
                <div className="form-group">
                  <button className="btn btn-outline-dark btn-block" type='submit'>
                    Submit
                </button>
                </div>
              </form>
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
    qid: id,
    question: question
      ? formatQuestion(question, users[question.author])
      : null
  };
};

export default connect(mapStateToProps)(AnswerQuestion);