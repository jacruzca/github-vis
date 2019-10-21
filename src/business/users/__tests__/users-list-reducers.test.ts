import produce from 'immer';
import { actionFailed } from '../../common/common-actions';
import { loadUsers, loadUsersSuccess } from '../users-list-actions';
import usersListReducer, {
    usersListInitialState,
} from '../users-list-reducers';
import { LOAD_USERS_ERROR } from '../users-types';
import { fakeUsersListResult } from '../__mocks__/UserFaker';

describe('Users List Reducers tests', () => {
    it('should return the initial state', () => {
        const result = usersListReducer(undefined, {});
        expect(result).toEqual(usersListInitialState);
    });
    it('should handle the LOAD_USERS action correctly', () => {
        const login = 'jacruzca';
        let expected = produce(usersListInitialState, draft => {
            draft.loading = true;
            draft.login = login;
        });
        expect(
            usersListReducer(usersListInitialState, loadUsers(login)),
        ).toEqual(expected);

        expected = produce(usersListInitialState, draft => {
            draft.loading = true;
        });
        expect(usersListReducer(usersListInitialState, loadUsers())).toEqual(
            expected,
        );
    });

    it('should handle the LOAD_USERS_SUCCESS action correctly', () => {
        const data = fakeUsersListResult();
        const expected = produce(usersListInitialState, draft => {
            draft.loading = false;
            draft.data = data;
        });
        expect(
            usersListReducer(usersListInitialState, loadUsersSuccess(data)),
        ).toEqual(expected);
    });

    it('should handle the LOAD_USERS_ERROR action correctly', () => {
        const errors = [new Error('error 1'), new Error('error 2')];
        const expected = produce(usersListInitialState, draft => {
            draft.loading = false;
            draft.errors = errors;
        });
        expect(
            usersListReducer(
                usersListInitialState,
                actionFailed(LOAD_USERS_ERROR, errors),
            ),
        ).toEqual(expected);
    });
});
