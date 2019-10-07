import { ApolloQueryResult } from 'apollo-client';
import gql from 'graphql-tag';
import Api from '../Api';
import { ApiPagination } from '../common/types/common-types';
import { User } from '../users/users-types';

export const USER_FIELDS = `
id  
name
login
`;

export interface UsersListResult {
    errors?: [];
    data: {
        users: [User];
    };
}

export default (api: Api) => {
    const getUsersList = (pagination: ApiPagination) => {
        const USERS_QUERY = gql`
            query($pagination: PaginationFilter!) {
                allArchivedEntries(pagination: $pagination) {
                ${USER_FIELDS}
                }
            }
        `;
        const result = api.query({
            query: USERS_QUERY,
            variables: {
                pagination,
            },
        });
        return result as Promise<ApolloQueryResult<UsersListResult>>;
    };

    return { getUsersList };
};
