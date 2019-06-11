import React, { Component } from 'react'
import { connect } from 'react-redux'
import LoginPage from './LoginPage'
import ListQuestions from './ListQuestions'

class Dashboard extends Component {
  render() {
    return (
      <div>
        {this.props.authed !== true
          ? <LoginPage />
          : <ListQuestions />
        }
      </div>
    )
  }
}

function mapStateToProps ({ authedUser}) {
  return {
    authed: authedUser !== null
  }
}

export default connect(mapStateToProps)(Dashboard)