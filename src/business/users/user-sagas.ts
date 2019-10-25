import { ApolloQueryResult } from 'apollo-boost';
import { call, put, takeLatest } from 'redux-saga/effects';
import Api from '../Api';
import { actionFailed } from '../common/common-actions';
import { handleResponse } from '../Sagas';
import { LoadUserAction, loadUserSuccess } from './user-actions';
import UsersApi, { UserResult } from './users-api';
import { LOAD_USER, LOAD_USER_ERROR } from './users-types';

export function* getUser(api: Api, action: LoadUserAction) {
    try {
        const { login, from, to } = action;
        const usersApi = UsersApi(api);
        const res: ApolloQueryResult<UserResult> = yield call(
            usersApi.getUser,
            login,
            from,
            to,
        );

        yield handleResponse<UserResult>(res, LOAD_USER_ERROR, loadUserSuccess);
    } catch (err) {
        yield put(actionFailed(LOAD_USER_ERROR, [err]));
    }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* watchLoadUser(api: Api) {
    yield takeLatest(LOAD_USER, getUser, api);
}
