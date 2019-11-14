import actionTypes from '../types';
import { NormalizedSchema } from 'normalizr';

// FETCH USER -----------------------------------
export const fetchPersonRequested = personId => ({
    type: actionTypes.PERSON_FETCH_REQUESTED,
    payload: { personId },
});

export const fetchPersonSucceeded = responseWrapper => {
    const { response } = responseWrapper;

    const {
        entities: { users },
    }: NormalizedSchema = response;

    return {
        type: actionTypes.PERSON_FETCH_SUCCEEDED,
        payload: { users },
    };
};

export const fetchPersonFailed = errorMessage => ({
    type: actionTypes.PERSON_FETCH_FAILED,
    payload: { errorMessage },
});

// FETCH REPOS -----------------------------------
export const fetchReposRequested = personId => ({
    type: actionTypes.PEOPLE_FETCH_REQUESTED,
    payload: { personId },
});

export const fetchReposSucceeded = responseWrapper => {
    const { response } = responseWrapper;

    const {
        entities: { repos },
    }: NormalizedSchema = response;

    return {
        type: actionTypes.PEOPLE_FETCH_SUCCEEDED,
        payload: { repos },
    };
};

export const fetchReposFailed = errorMessage => ({
    type: actionTypes.PEOPLE_FETCH_FAILED,
    payload: { errorMessage },
});
