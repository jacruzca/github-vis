/**
 * User list selectors
 */

import { createSelector } from 'reselect';
import { DefaultState } from '../common/common-types';
import { IRootState } from '../Reducers';
import { UsersListResult } from './users-api';

export const selectUsersListResponse = (state: IRootState) => state.usersList;

export const selectUsersListData = createSelector(
    selectUsersListResponse,
    (response: DefaultState<UsersListResult>) => response.data,
);

export const selectUsersListError = createSelector(
    selectUsersListResponse,
    (response: DefaultState<UsersListResult>) => response.error,
);

export const selectUsersListLoading = createSelector(
    selectUsersListResponse,
    (response: DefaultState<UsersListResult>) => response.loading,
);

export const selectUsersList = createSelector(
    selectUsersListData,
    (data?: UsersListResult) =>
        data && data.search && data.search.edges ? data.search.edges.map(edge => edge.node) : [],
);
