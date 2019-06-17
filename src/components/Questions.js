import React, { Component } from 'react';
import { connect } from 'react-redux';
import AnswerQuestion from './AnswerQuestion';
import QuestionResults from './QuestionResults';

class Questions extends Component {
  render() {
    const { answered, question_id } = this.props;
    return (
      <div>
        {answered
          ? <QuestionResults id={question_id} />
          : <AnswerQuestion id={question_id} />
        }
      </div>
    );
  };
};

function mapStateToProps({ authedUser, users }, props) {
  const { question_id } = props.match.params;
  return {
    answered: Object.keys(users[authedUser].answers).includes(question_id),
    question_id
  };
};

export default connect(mapStateToProps)(Questions);