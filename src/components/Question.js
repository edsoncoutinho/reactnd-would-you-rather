import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion } from '../utils/helpers'

class Question extends Component {
  render() {
    const { question } = this.props

    if (question === null) {
      return <p>This Question doesn't exist</p>
    }

    const { name, avatar, text } = question
    return (
      <div>
        <span>{name} asks:</span>
        <img
          src={avatar}
          alt={`Avatar of ${name}`}
          className='avatar'
        />
        <span>Wolud you rather</span>
        <span>... { text } ...</span>

      </div>
    )
  }
}

function mapStateToProps ({ users, questions }, { id } ) {
  const question = questions[id]
  return {
    question: question
      ? formatQuestion(question, users[question.author])
      : null
  }
}

export default connect(mapStateToProps)(Question)