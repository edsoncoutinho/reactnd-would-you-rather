import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddQuestion } from '../actions/questions'

class NewQuestion extends Component {
  state = {
    optionOneText: '',
    optionTwoText: '',
  }

  handleChangeOptionOneText = (e) => {
    const optionOneText = e.target.value

    this.setState(() => ({
      optionOneText
    }))
  }

  handleChangeOptionTwoText = (e) => {
    const optionTwoText = e.target.value

    this.setState(() => ({
      optionTwoText
    }))
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const { optionOneText, optionTwoText } = this.state
    const { dispatch } = this.props

    dispatch(handleAddQuestion(optionOneText, optionTwoText))

    this.setState({
      optionOneText: '',
      optionTwoText: '',
    })
  }

  render() {
    const { optionOneText, optionTwoText } = this.state

    return (
      <div>
        <h3>Create new Question</h3>
        <form onSubmit={this.handleSubmit}>
          <p>Complete the questions</p>
          <h4>Would you rather ...</h4>
          <input
            type="text"
            placeholder="Enter Option One Text Here"
            value={optionOneText}
            onChange={this.handleChangeOptionOneText}
          />
          <p>OR</p>
          <input
            type="text"
            placeholder="Enter Option Two Text Here"
            value={optionTwoText}
            onChange={this.handleChangeOptionTwoText}
          />
          <button
            disabled={optionOneText === '' || optionTwoText === ''}>
            Submit
          </button>
        </form>
      </div>
    )
  }
}

export default connect()(NewQuestion)