import { camelizeKeys } from 'humps';
import { schema, normalize } from 'normalizr';
import 'isomorphic-fetch';

const API_ROOT = 'https://api.github.com/';

// Extracts the next page URL from Github API response.
function getNextPageUrl(jsonResponse) {
    if (jsonResponse.next) {
        return jsonResponse.next;
    }

    return null;
}

// Fetches an API response and normalizes the result JSON according to schema.
// This makes every API response have the same shape, regardless of how nested it was.
export function callApi(endpoint, schema) {
    const fullUrl = endpoint.indexOf(API_ROOT) === -1 ? API_ROOT + endpoint : endpoint;

    return fetch(fullUrl)
        .then(response => response.json().then(json => ({ json, response })))
        .then(({ json, response }) => {
            if (!response.ok) {
                return Promise.reject(json);
            }

            const camelizedJson = camelizeKeys(json.results || json);
            const nextPageUrl = getNextPageUrl(json);

            return Object.assign({}, normalize(camelizedJson, schema), { nextPageUrl });
        })
        .then(
            response => ({ response }),
            error => ({ error: error.message || 'Something bad happened' }),
        );
}

// Schemas for SWAPI API responses.
// const personSchema = new schema.Entity('name', { idAttribute: 'name' });
//
// const personSchemaArray = new schema.Array(personSchema);



// Schemas for Github API responses.
export const userSchema = new schema.Entity('users', {}, {
    idAttribute: 'login',
});

export const repoSchema = new schema.Entity('repos', {},{
    idAttribute: 'fullName',
});

repoSchema.define({
    owner: userSchema,
});

// const userSchemaArray = new schema.Array(userSchema);
const repoSchemaArray = new schema.Array(repoSchema);

// api services
// export const fetchPersonApiService = personId => callApi(`peopleReducer/${personId}`, personSchema);
export const fetchPersonApiService = personId => callApi(`users/mauriciotasca`, userSchema);

// export const fetchPeopleApiService = name => callApi(`peopleReducer?name=${name}`, personSchemaArray);
export const fetchPeopleApiService = name => callApi(`users/mauriciotasca/repos`, repoSchemaArray);
