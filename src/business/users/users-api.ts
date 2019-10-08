import { ApolloQueryResult } from 'apollo-client';
import gql from 'graphql-tag';
import Api from '../Api';
import { ApiPagination, Edge, PageInfo, PAGE_INFO_FIELDS } from '../common/common-types';
import { User } from './users-types';

export const USER_FIELDS = `
    id  
    name
    login
    avatarUrl(size: 200)
`;

export interface UsersListResult {
    search: {
        userCount: number;
        pageInfo: PageInfo;
        edges: [Edge<User>];
    };
}

const UsersApi = (api: Api) => {
    const getUsersList = (login?: string, pagination?: ApiPagination): Promise<ApolloQueryResult<UsersListResult>> => {
        const USERS_QUERY = gql`
            query($login: String!, $first: Int) {
                search(query: $login, type: USER, first: $first) {
                    userCount
                    pageInfo {
                        ${PAGE_INFO_FIELDS}
                    }
                    edges {
                        node {
                            ... on User {
                                ${USER_FIELDS}
                            }
                        }
                        cursor
                    }
                }
            }
        `;
        const result = api.query({
            query: USERS_QUERY,
            variables: {
                login,
                ...pagination,
            },
        });
        return result as Promise<ApolloQueryResult<UsersListResult>>;
    };

    return { getUsersList };
};

export default UsersApi;
