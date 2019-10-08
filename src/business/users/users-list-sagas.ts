import { ApolloQueryResult } from 'apollo-boost';
import { call, put, takeLatest } from 'redux-saga/effects';
import Api from '../Api';
import { actionFailed } from '../common/common-actions';
import UsersApi, { UsersListResult } from './users-api';
import { LoadUsersAction, loadUsersSuccess } from './users-list-actions';
import { LOAD_USERS, LOAD_USERS_ERROR } from './users-types';

export function* getUsers(api: Api, action: LoadUsersAction) {
    try {
        const { login, pagination = { first: 10 } } = action;
        const usersApi = UsersApi(api);
        const res: ApolloQueryResult<UsersListResult> = yield call(usersApi.getUsersList, login, pagination);
        yield put(loadUsersSuccess(res.data));
    } catch (err) {
        yield put(actionFailed(LOAD_USERS_ERROR, err));
    }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* watchLoadUsers(api: Api) {
    yield takeLatest(LOAD_USERS, getUsers, api);
}
