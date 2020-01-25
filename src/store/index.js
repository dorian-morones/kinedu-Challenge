import configStore from './store-config';
import { getResults } from './actions';

let skills = "../../data/skills_23.json"
const store = configStore();
store.dispatch(getResults(skills));

export default store;