import { combineReducers } from 'redux';
import peopleReducer from './people-reducer';

const reducers = combineReducers({
    peopleReducer,
});

export default reducers;
