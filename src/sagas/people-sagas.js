import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchPeopleApiService, fetchPersonApiService } from '../api';

function* fetchPerson(action) {
    try {
        const person = yield call(fetchPersonApiService, action.payload.personId);
        yield put({ type: 'PERSON_FETCH_SUCCEEDED', payload: person });
    } catch (e) {
        yield put({ type: 'PERSON_FETCH_FAILED', message: e.message });
    }
}

function* fetchPeople(action) {
    try {
        const personMap = yield call(fetchPeopleApiService, action.payload.name);
        yield put({ type: 'PEOPLE_FETCH_SUCCEEDED', payload: personMap });
    } catch (e) {
        yield put({ type: 'PEOPLE_FETCH_FAILED', message: e.message });
    }
}

export function* personSaga() {
    yield takeLatest('PERSON_FETCH_REQUESTED', fetchPerson);
}

export function* peopleSaga() {
    yield takeLatest('PEOPLE_FETCH_REQUESTED', fetchPeople);
}
