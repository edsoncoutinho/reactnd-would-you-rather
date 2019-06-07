import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import LoadingBar from 'react-redux-loading'
import Dashboard from './Dashboard';
import AnswerQuestion from './AnswerQuestion'

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