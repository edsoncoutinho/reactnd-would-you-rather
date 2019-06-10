import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import LoadingBar from 'react-redux-loading'
import Dashboard from './Dashboard';
import AnswerQuestion from './AnswerQuestion'
import QuestionResults from './QuestionResults'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render () {
    return (
      <Fragment>
        <LoadingBar />
        {this.props.loading === true
          ? null
          : <div>
              <Dashboard />
              <AnswerQuestion id={"8xf0y6ziyjabvozdd253nd"} />
              <QuestionResults id={"6ni6ok3ym7mf1p33lnez"} />
            </div>
        }
      </Fragment>
    );
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App);
