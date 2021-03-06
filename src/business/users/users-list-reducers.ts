import produce from 'immer';
import { LoadUsers } from './users-list-actions';
import {
    LOAD_USERS,
    LOAD_USERS_ERROR,
    LOAD_USERS_SUCCESS,
    UsersListState,
} from './users-types';

// The initial state of the App
export const usersListInitialState: UsersListState = {
    loading: false,
    login: 'jacruz',
};

/* eslint-disable default-case, no-param-reassign */
/* 
Notice that it is not needed to handle the default case, a producer 
that doesn't do anything will simply return the original state. 
*/
const usersListReducer = (state = usersListInitialState, action: LoadUsers) =>
    produce(state, draft => {
        switch (action.type) {
            case LOAD_USERS:
                draft.loading = true;
                if (action.login) {
                    draft.login = action.login;
                }
                break;

            case LOAD_USERS_SUCCESS:
                draft.data = action.data;
                draft.loading = false;
                break;

            case LOAD_USERS_ERROR:
                draft.errors = [...action.errors];
                draft.loading = false;
                break;
        }
    });

export default usersListReducer;
