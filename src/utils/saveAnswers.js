import store from '../store/index.js';
import _ from 'lodash';

export const saveAnswers = (id, state) => {
    let storedAnswers = store.getState().results.answers;
    let newStoredAnswers = _.concat(storedAnswers, [{id:id, state:state}])
    let uniqStoredAnswers = _.uniqWith(newStoredAnswers, _.isEqual)
    return uniqStoredAnswers;
}