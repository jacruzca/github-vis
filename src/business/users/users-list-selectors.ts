/**
 * User list selectors
 */

import { createSelector } from 'reselect';
import { IRootState } from '../Reducers';
import { UsersListResult } from './users-api';
import { UsersListState } from './users-types';

export const selectUsersListResponse = (state: IRootState) => state.usersList;

export const selectUsersListLogin = createSelector(
    selectUsersListResponse,
    (response: UsersListState) => response.login,
);

export const selectUsersListData = createSelector(
    selectUsersListResponse,
    (response: UsersListState) => response.data,
);

export const selectUsersListError = createSelector(
    selectUsersListResponse,
    (response: UsersListState) => response.error,
);

export const selectUsersListLoading = createSelector(
    selectUsersListResponse,
    (response: UsersListState) => response.loading,
);

export const selectUsersList = createSelector(
    selectUsersListData,
    (data?: UsersListResult) =>
        data && data.search && data.search.edges ? data.search.edges.map(edge => edge.node) : [],
);
