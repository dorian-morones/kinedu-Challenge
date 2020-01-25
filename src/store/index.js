import configStore from './store-config';
import { getResults } from './actions';

let skills = "../../data/skills_2"
const store = configStore();
store.dispatch(getResults(skills));

export default store;