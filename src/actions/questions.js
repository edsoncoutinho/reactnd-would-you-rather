import { saveQuestion, saveQuestionAnswer } from '../utils/api';
import { showLoading, hideLoading } from 'react-redux-loading';
import { addUserAnswer } from './users';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ADD_QUESTION = 'ADD_QUESTION';
export const ADD_QUESTION_ANSWER = 'ADD_QUESTION_ANSWER';

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  };
};

function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question
  };
};

export function handleAddQuestion(optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    const { authedUser } = getState();

    return saveQuestion({
      optionOneText,
      optionTwoText,
      author: authedUser
    })
      .then((question) => dispatch(addQuestion(question)));
  }
}

function addQuestionAnswer({ authedUser, qid, answer }) {
  return {
    type: ADD_QUESTION_ANSWER,
    authedUser,
    qid,
    answer
  };
};

export function handleAddQuestionAnswer(info) {
  return (dispatch) => {
    dispatch(showLoading());

    return saveQuestionAnswer(info)
      .then(() => {
        dispatch(addQuestionAnswer(info));
        dispatch(addUserAnswer(info));
      })
      .then(() => dispatch(hideLoading()))
      .catch((e) => {
        console.warn('Error in saveQuestionAnswer: ', e)
        alert('The was an error on answer the question. Try again.')
      });
  };
};