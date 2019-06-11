import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'

class ListQuestions extends Component {
  render() {
    return (
      <div>
        <h3>Unanswered Questions</h3>
        <ul>
          {this.props.unansweredQuestions.map((id) => (
            <li key={id}>
              <Question id={id}/>
            </li>
          ))}
        </ul>
        
        <h3>Answered Questions</h3>
        <ul>
          {this.props.answeredQuestions.map((id) => (
            <li key={id}>
              <Question id={id}/>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

function mapStateToProps ({ authedUser, users, questions}) {
  const answeredQuestions = Object.keys(users[authedUser].answers);
  const unansweredQuestions = Object.keys(questions).filter(id => !answeredQuestions.includes(id));

  return {
    unansweredQuestions,
    answeredQuestions
  }
}

export default connect(mapStateToProps)(ListQuestions)