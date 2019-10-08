import { ErrorAction } from '../common/common-actions';
import { ApiPagination } from '../common/common-types';
import { UsersListResult } from './users-api';
import { LOAD_USERS, LOAD_USERS_ERROR, LOAD_USERS_SUCCESS } from './users-types';

export interface LoadUsersAction {
    type: LOAD_USERS;
    login?: string;
    pagination?: ApiPagination;
}

export interface LoadUsersSuccess {
    type: LOAD_USERS_SUCCESS;
    data: UsersListResult;
}

export type LoadUsers = LoadUsersAction | LoadUsersSuccess | ErrorAction<LOAD_USERS_ERROR>;

export const loadUsers = (login?: string, pagination?: ApiPagination): LoadUsersAction => {
    return {
        type: LOAD_USERS,
        login,
        pagination,
    };
};

export const loadUsersSuccess = (data: UsersListResult): LoadUsersSuccess => {
    return {
        type: LOAD_USERS_SUCCESS,
        data,
    };
};
