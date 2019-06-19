import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleAddQuestion } from '../actions/questions';
import { Redirect } from 'react-router-dom';

class NewQuestion extends Component {
  state = {
    optionOneText: '',
    optionTwoText: '',
    toHome: false
  };

  handleChangeOptionOneText = (e) => {
    const optionOneText = e.target.value;

    this.setState(() => ({
      optionOneText
    }));
  };

  handleChangeOptionTwoText = (e) => {
    const optionTwoText = e.target.value;

    this.setState(() => ({
      optionTwoText
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { optionOneText, optionTwoText } = this.state;
    const { dispatch } = this.props;

    dispatch(handleAddQuestion(optionOneText, optionTwoText));

    this.setState({
      optionOneText: '',
      optionTwoText: '',
      toHome: true
    });
  };

  render() {
    const { optionOneText, optionTwoText, toHome } = this.state;

    if (toHome === true) {
      return <Redirect to='/' />;
    }

    return (
      <div className="card">
        <h5 className="card-header">Create new Question</h5>
        <div className="card-body">
          <form onSubmit={this.handleSubmit}>
            <p>Complete the questions</p>
            
            <h4>Would you rather ...</h4>
            
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="Enter Option One Text Here"
                value={optionOneText}
                onChange={this.handleChangeOptionOneText}
              />
            </div>

            <p className="text-center">OR</p>

            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="Enter Option Two Text Here"
                value={optionTwoText}
                onChange={this.handleChangeOptionTwoText}
              />
            </div>
            <div className="form-group">
              <button
                className="btn btn-outline-dark btn-block"
                disabled={optionOneText === '' || optionTwoText === ''}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };
};

export default connect()(NewQuestion);