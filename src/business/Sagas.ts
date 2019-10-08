import { fork } from 'redux-saga/effects';
import usersList from './users/users-list-sagas';

export default function* rootSaga(api: any) {
    yield fork(usersList, api);
}
