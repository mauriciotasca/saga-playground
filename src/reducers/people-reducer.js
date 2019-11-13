export default function people(state = {}, action) {
    switch (action.type) {
        case 'PERSON_FETCH_REQUESTED':
        case 'PEOPLE_FETCH_REQUESTED':
            return {...state};


        case 'PERSON_FETCH_SUCCEEDED':
            return {...state, users: action.payload.response.entities.users};


        case 'PEOPLE_FETCH_SUCCEEDED':
            return {...state, repos: action.payload.response.entities.repos};


        case 'PERSON_FETCH_FAILED':
        case 'PEOPLE_FETCH_FAILED':
            return {...state};
        default:
            return state;
    }
}
