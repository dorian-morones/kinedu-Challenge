/* global ROOT_URL*/
import * as actionTypes from "./actionTypes";
import axios from 'axios';


export const loadingResults = loading => {
  return {
    type: actionTypes.LOADING_RESULTS,
    payload: loading
  };
};

export const receiveResults = data => {
    return {
      type: actionTypes.RECEIVE_RESULTS,
      payload: data
    };
  };

export const saveAnswers = items => {
  return{
    type: actionTypes.SAVE_ANSWERS,
    payload: items
  }
}

export const getResults = (skills) => {
    const url = skills; 
    return function (dispatch) {
      dispatch(loadingResults(true));
      return axios({
        url: url,
        timeout: 10000
      })
        .then(function (response) {
            dispatch(receiveResults(response.data));
            dispatch(loadingResults(false));
        })
        .catch(function (err) {
          console.error(err);
          dispatch(loadingResults(false));
        });
    };
  };