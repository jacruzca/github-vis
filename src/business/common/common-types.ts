export type ApiPagination = {
    first?: number;
};

export type PageInfo = {
    startCursor: string;
    endCursor: string;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
};

export type Edge<T> = {
    node: T;
    cursor: string;
};

export type DefaultState<T> = {
    loading: boolean;
    error?: Error;
    data?: T;
};

export const PAGE_INFO_FIELDS = `
    startCursor, 
    endCursor, 
    hasNextPage, 
    hasPreviousPage
`;
