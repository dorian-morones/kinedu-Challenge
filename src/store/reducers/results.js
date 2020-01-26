import * as actionTypes from "../actions/actionTypes";

const Results = {
    task: [],
    answers: [],
    loading: false,
  };

export const resultsReducer = (state = Results, action) => {
    switch (action.type) {
      case actionTypes.LOADING_RESULTS:
        return { ...state, loading: action.payload };
      case actionTypes.RECEIVE_RESULTS:
        return {
          ...state,
          task: action.payload,
        };
      case actionTypes.SAVE_ANSWERS:
        return {
          ...state,
          answers: action.payload,
        };
      default:
        return {
          ...state
        };
    }
  };

  export default resultsReducer;
