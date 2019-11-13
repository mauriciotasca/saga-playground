import { combineReducers } from 'redux';
import people from './people-reducer';

const reducers = combineReducers({
    people,
});

export default reducers;
