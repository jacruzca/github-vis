import produce from 'immer';
import { LoadUser } from './user-actions';
import {
    LOAD_USER,
    LOAD_USER_ERROR,
    LOAD_USER_SUCCESS,
    UserState,
} from './users-types';

// The initial state of the App
export const userInitialState: UserState = {
    loading: false,
};

const userReducer = (state = userInitialState, action: LoadUser) =>
    produce(state, draft => {
        switch (action.type) {
            case LOAD_USER:
                draft.loading = true;
                break;

            case LOAD_USER_SUCCESS:
                draft.data = action.data;
                draft.loading = false;
                break;

            case LOAD_USER_ERROR:
                draft.errors = [...action.errors];
                draft.loading = false;
                break;
        }
    });

export default userReducer;
