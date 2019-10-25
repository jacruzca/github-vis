import { ErrorAction } from '../common/common-actions';
import { UserResult } from './users-api';
import { LOAD_USER, LOAD_USER_ERROR, LOAD_USER_SUCCESS } from './users-types';

export interface LoadUserAction {
    type: LOAD_USER;
    login: string;
    from?: Date;
    to?: Date;
}

export interface LoadUserSuccess {
    type: LOAD_USER_SUCCESS;
    data: UserResult;
}

export type LoadUser =
    | LoadUserAction
    | LoadUserSuccess
    | ErrorAction<LOAD_USER_ERROR>;

export const loadUser = (
    login: string,
    from?: Date,
    to?: Date,
): LoadUserAction => {
    return {
        type: LOAD_USER,
        login,
        from,
        to,
    };
};

export const loadUserSuccess = (data: UserResult): LoadUserSuccess => {
    return {
        type: LOAD_USER_SUCCESS,
        data,
    };
};
