import { NetworkStatus } from 'apollo-boost';
import { ApolloQueryResult } from 'apollo-client';
import { GraphQLError } from 'graphql';
import Api from '../../Api';
import UsersApi, { UsersListResult } from '../users-api';
import { fakeUsersListResult } from '../__mocks__/UserFaker';

describe('Users List Selectors tests', () => {
    it('should successfully return the users list', async () => {
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
        const usersApi = UsersApi(api);
        const login = 'jacruzca';
        const result = await usersApi.getUsersList(login);

        expect(api.query).toHaveBeenCalled();
        expect(result).toEqual(expected);
    });

    it('should successfully return the errors', async () => {
        const expected: ApolloQueryResult<undefined> = {
            data: undefined,
            errors: [new GraphQLError('error 1'), new GraphQLError('error 2')],
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
        const usersApi = UsersApi(api);
        const login = 'jacruzca';
        const result = await usersApi.getUsersList(login);

        expect(api.query).toHaveBeenCalled();
        expect(result).toEqual(expected);
        expect(result.errors).toHaveLength(2);
    });
});
