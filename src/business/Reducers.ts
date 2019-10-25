/**
 * Combination of all reducers
 */

import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';
import history from '../web/utils/History';
import user, { userInitialState } from './users/user-reducers';
import usersList, { usersListInitialState } from './users/users-list-reducers';
import { UsersListState, UserState } from './users/users-types';

export type RootState = {
    usersList: UsersListState;
    user: UserState;
};

export const initialState: RootState = {
    usersList: usersListInitialState,
    user: userInitialState,
};

export default function createReducer() {
    const rootReducer = combineReducers({
        router: connectRouter(history),
        usersList,
        user,
    });

    return rootReducer;
}
