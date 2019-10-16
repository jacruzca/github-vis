import { fakeUser } from '../../../web/users/utils/UserFaker';
import { UsersListResult } from '../users-api';
import {
    selectUsersList,
    selectUsersListErrors,
    selectUsersListLoading,
    selectUsersListLogin,
} from '../users-list-selectors';
import { UsersListState } from '../users-types';

describe('Users List Selectors tests', () => {
    it('should return the login from state', () => {
        const usersListState: UsersListState = {
            login: 'jacruzca',
            loading: true,
        };
        const selected = selectUsersListLogin.resultFunc(usersListState);
        expect(selected).toEqual(usersListState.login);
    });
    it('should return the loading from state', () => {
        const usersListState: UsersListState = {
            login: 'jacruzca',
            loading: true,
        };
        const selected = selectUsersListLoading.resultFunc(usersListState);
        expect(selected).toBeTruthy();
    });
    it('should return the errors from state', () => {
        const usersListState: UsersListState = {
            login: 'jacruzca',
            loading: true,
            errors: [new Error('abc')],
        };
        const selected = selectUsersListErrors.resultFunc(usersListState);
        expect(selected).toHaveLength(1);
    });
    it('should return an empty users list from state if no results', () => {
        const usersListResult: UsersListResult = {
            search: {
                edges: [],
                userCount: 0,
                pageInfo: {
                    endCursor: '10',
                    hasNextPage: true,
                    hasPreviousPage: false,
                    startCursor: '1',
                },
            },
        };
        const selected = selectUsersList.resultFunc(usersListResult);
        expect(selected).toHaveLength(0);
    });
    it('should return an empty users list from state if error (data undefined)', () => {
        const selected = selectUsersList.resultFunc(undefined);
        expect(selected).toHaveLength(0);
    });
    it('should return the users list from state', () => {
        const usersListResult: UsersListResult = {
            search: {
                edges: [
                    {
                        node: fakeUser(),
                        cursor: '1',
                    },
                    {
                        node: fakeUser(),
                        cursor: '2',
                    },
                ],
                userCount: 10,
                pageInfo: {
                    endCursor: '10',
                    hasNextPage: true,
                    hasPreviousPage: false,
                    startCursor: '1',
                },
            },
        };
        const selected = selectUsersList.resultFunc(usersListResult);
        expect(selected).toHaveLength(2);
    });
});
