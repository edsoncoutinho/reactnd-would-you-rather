import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import LoadingBar from 'react-redux-loading';
import ListQuestions from './ListQuestions';
import NewQuestion from './NewQuestion';
import Leaderboard from './Leaderboard';
import Questions from './Questions';
import PageNotFound from './PageNotFound';
import LoginPage from './LoginPage';
import Nav from './Nav';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  };
  render() {
    const { authed, loading } = this.props;
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <Nav />
          {!authed && <LoginPage />}
          {authed && loading === false
            ? <div className="container-fluid">
              <Switch>
                <Route path='/' exact component={ListQuestions} />
                <Route path='/add' exact component={NewQuestion} />
                <Route path='/leaderboard' exact component={Leaderboard} />
                <Route path='/questions/:question_id' exact component={Questions} />
                <Route path='/404' component={PageNotFound} />
                <Redirect from='*' to='/404' />
              </Switch>
            </div>
            : null
          }
        </Fragment>
      </Router>
    );
  };
};

function mapStateToProps({ authedUser, loadingBar }) {
  return {
    loading: loadingBar.default === 1,
    authed: authedUser
  };
};

export default connect(mapStateToProps)(App);
