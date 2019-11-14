import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchPeopleApiService, fetchPersonApiService } from '../api';
import {
    fetchPersonFailed,
    fetchPersonSucceeded, fetchReposFailed,
    fetchReposSucceeded
} from '../actions';

import actionTypes from '../types';

function* fetchPerson(action) {
    try {
        const responseWrapper = yield call(fetchPersonApiService, action.payload.personId);
        yield put(fetchPersonSucceeded(responseWrapper));
    } catch (e) {
        yield put(fetchPersonFailed(e.message));
    }
}

function* fetchPeople(action) {
    try {
        const responseWrapper = yield call(fetchPeopleApiService, action.payload.name);
        yield put(fetchReposSucceeded(responseWrapper));
    } catch (e) {
        yield put(fetchReposFailed(e.message));
    }
}

export function* personSaga() {
    yield takeLatest(actionTypes.PERSON_FETCH_REQUESTED, fetchPerson);
}

export function* peopleSaga() {
    yield takeLatest(actionTypes.PEOPLE_FETCH_REQUESTED, fetchPeople);
}
