import { ApolloQueryResult, MutationOptions, OperationVariables, QueryOptions } from 'apollo-client';
import { FetchResult } from 'apollo-link';

export default interface Api {
    query<T, TVariables = OperationVariables>(options: QueryOptions<TVariables>): Promise<ApolloQueryResult<T>>;
    mutate<T, TVariables = OperationVariables>(options: MutationOptions<T, TVariables>): Promise<FetchResult<T>>;
}
