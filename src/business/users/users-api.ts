import { ApolloQueryResult } from 'apollo-client';
import subDays from 'date-fns/subDays';
import gql from 'graphql-tag';
import Api from '../Api';
import {
    ApiPagination,
    Edge,
    PageInfo,
    PAGE_INFO_FIELDS,
} from '../common/common-types';
import { User } from './users-types';

export const USER_FIELDS = `
    id  
    name
    bio
    login
    avatarUrl(size: 200)
`;

export interface UsersListResult {
    search?: {
        userCount: number;
        pageInfo: PageInfo;
        edges: Edge<User>[];
    };
}

export interface UserResult {
    user?: User;
}

const UsersApi = (api: Api) => {
    const getUser = (
        login: string,
        from: Date = subDays(new Date(), 15),
        to: Date = new Date(),
    ): Promise<ApolloQueryResult<UserResult>> => {
        const USER_QUERY = gql`
            query($login: String!, $from: DateTime!, $to: DateTime!) {
                user(login: $login) {
                    ${USER_FIELDS}
                    contributionsCollection(from: $from, to: $to) {
                        totalCommitContributions
                        endedAt
                        startedAt
                        totalRepositoryContributions
                        contributionCalendar {
                            totalContributions
                            weeks {
                                contributionDays {
                                    contributionCount
                                    date
                                }
                                firstDay
                            }
                        }
                    }
                }
            }
        `;

        const result = api.query({
            query: USER_QUERY,
            variables: {
                login,
                from,
                to,
            },
        });
        return result as Promise<ApolloQueryResult<UserResult>>;
    };

    const getUsersList = (
        login?: string,
        pagination?: ApiPagination,
    ): Promise<ApolloQueryResult<UsersListResult>> => {
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

    return { getUsersList, getUser };
};

export default UsersApi;
