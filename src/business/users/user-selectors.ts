/**
 * User selectors
 */

import { createSelector } from 'reselect';
import { RootState } from '../Reducers';
import { UserResult } from './users-api';
import { UserState } from './users-types';

export const selectUserResponse = (state: RootState) => state.user;

export const selectUserData = createSelector(
    selectUserResponse,
    (response: UserState) => response.data,
);

export const selectUserErrors = createSelector(
    selectUserResponse,
    (response: UserState) => response.errors,
);

export const selectUserLoading = createSelector(
    selectUserResponse,
    (response: UserState) => response.loading,
);

export const selectUser = createSelector(
    selectUserData,
    (data?: UserResult) => (data ? data.user : undefined),
);
