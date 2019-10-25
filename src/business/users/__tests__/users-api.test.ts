import { NetworkStatus } from 'apollo-boost';
import { ApolloQueryResult } from 'apollo-client';
import { GraphQLError } from 'graphql';
import Api from '../../Api';
import UsersApi, { UserResult, UsersListResult } from '../users-api';
import { fakeUserResult, fakeUsersListResult } from '../__mocks__/UserFaker';

describe('Users API tests', () => {
    describe('Users List tests', () => {
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
                errors: [
                    new GraphQLError('error 1'),
                    new GraphQLError('error 2'),
                ],
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

    describe('User tests', () => {
        it('should successfully return the user', async () => {
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
            const usersApi = UsersApi(api);
            const login = 'jacruzca';
            const result = await usersApi.getUser(
                login,
                new Date('2019-06-06'),
                new Date(),
            );

            expect(api.query).toHaveBeenCalled();
            expect(result).toEqual(expected);
        });

        it('should successfully return the errors', async () => {
            const expected: ApolloQueryResult<undefined> = {
                data: undefined,
                errors: [
                    new GraphQLError('error 1'),
                    new GraphQLError('error 2'),
                ],
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
            const result = await usersApi.getUser(
                login,
                new Date(),
                new Date(),
            );

            expect(api.query).toHaveBeenCalled();
            expect(result).toEqual(expected);
            expect(result.errors).toHaveLength(2);
        });
    });
});
