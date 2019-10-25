export const USERS_ROUTE = '/';
export const USER_ROUTE = (login?: string) =>
    login ? `/user/${login}` : '/user/:login';
