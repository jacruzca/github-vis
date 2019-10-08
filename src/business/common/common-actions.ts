/**
 * Default builder for error actions.
 * Rationale: Most of the error actions are handled the same way. With a type and an error message
 * When the app grows, most of the error actions will be the same
 * @param {string} type the action type
 */

export interface ErrorAction<T> {
    type: T;
    error: Error;
}

export function actionFailed<T>(type: T, error: Error): ErrorAction<T> {
    return {
        type,
        error,
    };
}
