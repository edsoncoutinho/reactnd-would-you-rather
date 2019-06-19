import React, { Component } from 'react';
import { connect } from 'react-redux';
import Question from './Question';

class ListQuestions extends Component {
  state = {
    tab: 0
  }

  handleTab = (tab) => {
    this.setState({
      tab
    });
  };

  render() {
    return (
      <div className="card">
        <div className="card-header">
          <ul className="nav nav-tabs card-header-tabs nav-justified">
            <li className="nav-item">
              <button onClick={() => this.handleTab(0)} className={this.state.tab ? 'nav-link btn-block' : 'nav-link btn-block active'}>
                Unanswered Questions
              </button>
            </li>
            <li className="nav-item">
              <button onClick={() => this.handleTab(1)} className={this.state.tab ? 'nav-link btn-block active' : 'nav-link btn-block'}>
                Answered Questions
              </button>
            </li>
          </ul>
        </div>
        <div className="card-body">
          <div className="tab-content">
            <div className={this.state.tab ? 'tab-pane' : 'tab-pane active'}>
              {!this.props.unansweredQuestions.length && 'Very well! All questions were answered.'}
              {this.props.unansweredQuestions.map((id) => (
                <div key={id}>
                  <Question id={id} />
                </div>
              ))}
            </div>
            <div className={this.state.tab ? 'tab-pane active' : 'tab-pane'}>
              {!this.props.answeredQuestions.length && 'Opps! No results to display right now.'}
              {this.props.answeredQuestions.map((id) => (
                <div key={id}>
                  <Question id={id} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };
};

function mapStateToProps({ authedUser, users, questions }) {
  const answeredQuestions = Object.keys(users[authedUser].answers)
    .sort((a, b, ) => questions[b].timestamp - questions[a].timestamp);
  const unansweredQuestions = Object.keys(questions).filter(id => !answeredQuestions.includes(id))
    .sort((a, b, ) => questions[b].timestamp - questions[a].timestamp);

  return {
    unansweredQuestions,
    answeredQuestions
  };
};

export default connect(mapStateToProps)(ListQuestions);