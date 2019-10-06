/**
 * Combination of all reducers
 */

import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';
import history from '../web/utils/History';

export default function createReducer() {
    const rootReducer = combineReducers({
        router: connectRouter(history),
    });

    return rootReducer;
}
