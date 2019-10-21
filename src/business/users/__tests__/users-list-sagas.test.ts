import { ApolloQueryResult, NetworkStatus } from 'apollo-boost';
import { GraphQLError } from 'graphql';
import { expectSaga } from 'redux-saga-test-plan';
import Api from '../../Api';
import { actionFailed } from '../../common/common-actions';
import { UsersListResult } from '../users-api';
import { loadUsers, loadUsersSuccess } from '../users-list-actions';
import { getUsers } from '../users-list-sagas';
import { LOAD_USERS_ERROR } from '../users-types';
import { fakeUsersListResult } from '../__mocks__/UserFaker';

describe('Users List sagas tests', () => {
    it('should dispatch the success action', async () => {
        const login = 'jacruzca';
        const expected: ApolloQueryResult<UsersListResult> = {
            data: fakeUsersListResult(),
            loading: false,
            networkStatus: NetworkStatus.ready,
            stale: false,
        };
        const expectedPromise: Promise<
            ApolloQueryResult<UsersListResult>
        > = new Promise(resolve => resolve(expected));
        const api: Api = {
            query: jest.fn().mockImplementation(() => expectedPromise),
            mutate: jest.fn(),
        };
        const expectedAction = loadUsersSuccess(expected.data);
        const loadUsersAction = loadUsers(login);

        return expectSaga(getUsers as any, api, loadUsersAction)
            .put({ type: expectedAction.type, data: expectedAction.data })
            .run();
    });

    it('should dispatch the error action', async () => {
        const login = 'jacruzca';
        const expected: ApolloQueryResult<undefined> = {
            data: undefined,
            errors: [new GraphQLError('error 1')],
            loading: false,
            networkStatus: NetworkStatus.ready,
            stale: false,
        };
        const expectedPromise: Promise<
            ApolloQueryResult<undefined>
        > = new Promise(resolve => resolve(expected));
        const api: Api = {
            query: jest.fn().mockImplementation(() => expectedPromise),
            mutate: jest.fn(),
        };
        const expectedAction = actionFailed(
            LOAD_USERS_ERROR,
            expected.errors as any,
        );
        const loadUsersAction = loadUsers(login);

        return expectSaga(getUsers as any, api, loadUsersAction)
            .put({ type: expectedAction.type, errors: expectedAction.errors })
            .run();
    });

    it('should throw an error and dispatch error action', async () => {
        const login = 'jacruzca';
        const expectedError = new Error('Error 1');
        const expectedPromise: Promise<
            ApolloQueryResult<undefined>
        > = new Promise((_r, reject) => reject(expectedError));
        const api: Api = {
            query: jest.fn().mockImplementation(() => expectedPromise),
            mutate: jest.fn(),
        };
        const expectedAction = actionFailed(LOAD_USERS_ERROR, [expectedError]);
        const loadUsersAction = loadUsers(login);

        return expectSaga(getUsers as any, api, loadUsersAction)
            .put({ type: expectedAction.type, errors: expectedAction.errors })
            .run();
    });
});
