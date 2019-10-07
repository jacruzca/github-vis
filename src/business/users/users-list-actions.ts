import { ErrorAction } from '../common/actions/common-actions';
import { ApiPagination } from '../common/types/common-types';
import { LOAD_USERS, LOAD_USERS_ERROR, LOAD_USERS_SUCCESS, User } from './users-types';

export type LoadUsersFilter = {
    name: string;
};

export interface LoadUsersAction {
    type: LOAD_USERS;
    filters: LoadUsersFilter;
    pagination: ApiPagination;
}

export interface LoadUsersSuccess {
    type: LOAD_USERS_SUCCESS;
    users: [User?];
}

export type LoadUsers = LoadUsersAction | LoadUsersSuccess | ErrorAction<LOAD_USERS_ERROR>;

export const loadUsers = (filters: LoadUsersFilter, pagination: ApiPagination): LoadUsersAction => {
    return {
        type: LOAD_USERS,
        filters,
        pagination,
    };
};

export const loadUsersSuccess = (users: [User?]): LoadUsersSuccess => {
    return {
        type: LOAD_USERS_SUCCESS,
        users,
    };
};
