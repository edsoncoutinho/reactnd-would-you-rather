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
      <Link to={`/questions/${id}`}>
        <p>{name} asks:</p>
        <img
          src={avatar}
          alt={`Avatar of ${name}`}
          className='avatar'
        />
        <p>Wolud you rather</p>
        <p>... {text} ...</p>
      </Link>
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