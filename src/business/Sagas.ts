import { ApolloQueryResult } from 'apollo-boost';
import { Action } from 'redux';
import { fork, put } from 'redux-saga/effects';
import { actionFailed } from './common/common-actions';
import user from './users/user-sagas';
import usersList from './users/users-list-sagas';

export function* handleResponse<T>(
    res: ApolloQueryResult<T>,
    errorType: string,
    success: (data: T) => Action<any>,
) {
    try {
        if (res.errors) {
            yield put(actionFailed(errorType, res.errors));
        }
        if (res.data) {
            yield put(success(res.data));
        }
    } catch (err) {
        throw err;
    }
}

export default function* rootSaga(api: any) {
    yield fork(usersList, api);
    yield fork(user, api);
}
