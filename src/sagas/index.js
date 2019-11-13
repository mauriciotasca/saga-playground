import { all, fork } from 'redux-saga/effects';
import { peopleSaga, personSaga } from './people-sagas';


export default function*() {
    yield all([fork(personSaga), fork(peopleSaga)]);
}
