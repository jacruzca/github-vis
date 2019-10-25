import { ApolloQueryResult, NetworkStatus } from 'apollo-boost';
import { GraphQLError } from 'graphql';
import { expectSaga } from 'redux-saga-test-plan';
import Api from '../../Api';
import { actionFailed } from '../../common/common-actions';
import { loadUser, loadUserSuccess } from '../user-actions';
import { getUser } from '../user-sagas';
import { UserResult } from '../users-api';
import { LOAD_USER_ERROR } from '../users-types';
import { fakeUserResult } from '../__mocks__/UserFaker';

describe('User sagas tests', () => {
    const login = 'jacruzca';
    const from = new Date();
    const to = new Date();
    it('should dispatch the success action', async () => {
        const expected: ApolloQueryResult<UserResult> = {
            data: fakeUserResult(),
            loading: false,
            networkStatus: NetworkStatus.ready,
            stale: false,
        };
        const expectedPromise: Promise<
            ApolloQueryResult<UserResult>
        > = new Promise(resolve => resolve(expected));
        const api: Api = {
            query: jest.fn().mockImplementation(() => expectedPromise),
            mutate: jest.fn(),
        };
        const expectedAction = loadUserSuccess(expected.data);
        const loadUserAction = loadUser(login, from, to);

        return expectSaga(getUser as any, api, loadUserAction)
            .put({ type: expectedAction.type, data: expectedAction.data })
            .run();
    });

    it('should dispatch the error action', async () => {
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
            LOAD_USER_ERROR,
            expected.errors as any,
        );
        const loadUserAction = loadUser(login, from, to);

        return expectSaga(getUser as any, api, loadUserAction)
            .put({ type: expectedAction.type, errors: expectedAction.errors })
            .run();
    });

    it('should throw an error and dispatch error action', async () => {
        const expectedError = new Error('Error 1');
        const expectedPromise: Promise<
            ApolloQueryResult<undefined>
        > = new Promise((_r, reject) => reject(expectedError));
        const api: Api = {
            query: jest.fn().mockImplementation(() => expectedPromise),
            mutate: jest.fn(),
        };
        const expectedAction = actionFailed(LOAD_USER_ERROR, [expectedError]);
        const loadUserAction = loadUser(login, from, to);

        return expectSaga(getUser as any, api, loadUserAction)
            .put({ type: expectedAction.type, errors: expectedAction.errors })
            .run();
    });
});
