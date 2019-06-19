import React, { Component } from 'react';
import { connect } from 'react-redux';
import ScoreDetails from './ScoreDetails';

class Leaderboard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-body">
          {this.props.scores.map((user, key) => (
            <div key={user.id}>
              <ScoreDetails id={user.id} ranking={key} />
            </div>
          ))}
        </div>
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

export default connect(mapStateToProps)(Leaderboard)