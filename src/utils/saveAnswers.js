import store from '../store/index.js';
import _ from 'lodash';

export const contactAnswers = (id, state) => {
    console.log("[contactAnswers]=  " + id + " - " + state)
    let storedAnswers = store.getState().results.answers;
    let removeDuplicate = _.filter(storedAnswers, (skill) => { return skill.id !== id; });
    let newStoredAnswers = _.concat(removeDuplicate, [{id:id, state:state}])
    console.log(newStoredAnswers)
    let uniqStoredAnswers = _.uniqWith(newStoredAnswers, _.isEqual)
    return uniqStoredAnswers;
}