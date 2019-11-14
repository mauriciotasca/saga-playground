const initialState = {
    users: {},
    errorMessage: null,
    loading: false,
};

export default function peopleReducer(state = initialState, action) {
    switch (action.type) {
        case 'PERSON_FETCH_REQUESTED':
        case 'PEOPLE_FETCH_REQUESTED':
            return { ...state, loading: true };

        case 'PERSON_FETCH_SUCCEEDED':
            return { ...state, users: action.payload.users, loading: false };

        case 'PEOPLE_FETCH_SUCCEEDED':
            return { ...state, repos: action.payload.repos, loading: false };

        case 'PERSON_FETCH_FAILED':
        case 'PEOPLE_FETCH_FAILED':
            return { ...state, errorMessage: action.payload.errorMessage, loading: false };
        default:
            return state;
    }
}
