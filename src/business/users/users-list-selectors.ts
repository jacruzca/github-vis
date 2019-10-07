/**
 * User list selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './users-list-reducer';
import { UsersListState } from './users-types';

export const selectUsers = (state: UsersListState) => state.users || initialState;
export const selectUsersList = () =>
    createSelector(
        selectUsers,
        users => users,
    );
