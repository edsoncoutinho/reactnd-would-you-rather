import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import LoadingBar from 'react-redux-loading'
import ListQuestions from './ListQuestions';
import NewQuestion from './NewQuestion';
import Scoreboard from './Scoreboard';
import Questions from './Questions';
import PageNotFound from './PageNotFound';
import LoginPage from './LoginPage';
import User from './User';
import Nav from './Nav';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    const { authed, loading } = this.props;
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <Nav />
          {authed
            ? <User />
            : <LoginPage />
          }
          {authed && loading === false
            ? <div>
              <Switch>
                <Route path='/' exact component={ListQuestions} />
                <Route path='/add' exact component={NewQuestion} />
                <Route path='/leaderboard' exact component={Scoreboard} />
                <Route path='/questions/:question_id' exact component={Questions} />
                <Route path="*" component={PageNotFound} />
              </Switch>
            </div>
            : null
          }
        </Fragment>
      </Router>
    );
  }
}

function mapStateToProps({ authedUser, loadingBar }) {
  console.log(authedUser)
  return {
    loading: loadingBar.default === 1,
    authed: authedUser
  }
}

export default connect(mapStateToProps)(App);
