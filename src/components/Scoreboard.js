import React, { Component } from 'react';
import { connect } from 'react-redux';
import ScoreDetails from './ScoreDetails';

class Scoreboard extends Component {
  render() {
    return (
      <div>
        {this.props.scores.map((user, key) => (
          <li key={user.id}>
            <ScoreDetails id={user.id} ranking={key} />
          </li>
        ))}
      </div>
    )
  }
}

function mapStateToProps({ users }) {
  const scores = Object.keys(users).map(uid => ({ 'id': users[uid].id, 'score': Object.keys(users[uid].answers).length + users[uid].questions.length }))
    .sort((a, b, ) => b.score - a.score);

  return {
    scores
  }
}

export default connect(mapStateToProps)(Scoreboard)