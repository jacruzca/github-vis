/**
 * Combination of all reducers
 */

import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';
import history from '../web/utils/History';
import usersList, { usersListInitialState } from './users/users-list-reducers';
import { UsersListState } from './users/users-types';

export type RootState = {
    usersList: UsersListState;
};

export const initialState: RootState = {
    usersList: usersListInitialState,
};

export default function createReducer() {
    const rootReducer = combineReducers({
        router: connectRouter(history),
        usersList,
    });

    return rootReducer;
}
