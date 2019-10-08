import { createSelector } from 'reselect';

export const selectError = fromSelector => () => {
    return createSelector(
        fromSelector,
        state => {
            console.log('state', state);
            return state.error;
        },
    );
};

export const selectLoading = fromSelector => () =>
    createSelector(
        fromSelector,
        state => state.loading,
    );
