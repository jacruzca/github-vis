import { DefaultState } from '../common/common-types';
import { UsersListResult } from './users-api';

export const LOAD_USERS = 'USERS/LOAD';
export type LOAD_USERS = typeof LOAD_USERS;
export const LOAD_USERS_SUCCESS = 'USERS/LOAD_SUCCESS';
export type LOAD_USERS_SUCCESS = typeof LOAD_USERS_SUCCESS;
export const LOAD_USERS_ERROR = 'USERS/LOAD_ERROR';
export type LOAD_USERS_ERROR = typeof LOAD_USERS_ERROR;

export type User = {
    id: string;
    bio: string;
    avatarUrl: string;
    email: string;
    name: string;
    login: string;
};

type UsersListOwnState = {
    login?: string;
};
export type UsersListState = DefaultState<UsersListResult> & UsersListOwnState;
