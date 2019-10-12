import { ApolloLink, InMemoryCache } from 'apollo-boost';
import {
    ApolloClient,
    ApolloQueryResult,
    ErrorPolicy,
    FetchPolicy,
    MutationOptions,
    OperationVariables,
    QueryOptions,
} from 'apollo-client';
import { FetchResult } from 'apollo-link';
import { setContext } from 'apollo-link-context';
import { onError } from 'apollo-link-error';
import { createHttpLink } from 'apollo-link-http';
import apolloLogger from 'apollo-link-logger';
import Api from '../business/Api';
import { API_URL, GITHUB_KEY } from '../business/common/common-constants';

const WebApi = (): Api => {
    const httpLink = createHttpLink({
        uri: API_URL,
    });

    const authLink = setContext(async (_: any, { headers }: any) => {
        const token = GITHUB_KEY;
        // return the headers to the context so httpLink can read them
        return {
            headers: {
                ...headers,
                authorization: token ? `Bearer ${token}` : '',
            },
        };
    });

    const errorLink = onError(({ networkError }) => {
        if (networkError) {
            // eslint-disable-next-line no-console
            console.error(`[Network error]: ${networkError}`);
        }
    });

    const link = authLink.concat(httpLink);

    const links = [errorLink, link];

    if (process.env.NODE_ENV === 'development') {
        links.unshift(apolloLogger);
    }

    const apolloClient: ApolloClient<any> = new ApolloClient({
        cache: new InMemoryCache(),
        link: ApolloLink.from(links),
    });

    function query<T, TVariables = OperationVariables>(
        options: QueryOptions<TVariables>,
    ): Promise<ApolloQueryResult<T>> {
        const defaultOptions = {
            fetchPolicy: 'no-cache' as FetchPolicy,
            errorPolicy: 'all' as ErrorPolicy,
        };
        return apolloClient.query({ ...defaultOptions, ...options });
    }

    function mutate<T, TVariables = OperationVariables>(
        options: MutationOptions<T, TVariables>,
    ): Promise<FetchResult<T>> {
        const defaultOptions = { errorPolicy: 'all' as ErrorPolicy };
        return apolloClient.mutate({ ...defaultOptions, ...options });
    }

    return { query, mutate };
};

export default WebApi;
