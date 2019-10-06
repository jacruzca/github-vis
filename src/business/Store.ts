/**
 * Create the redux store
 */

import { routerMiddleware } from 'connected-react-router';
import { History } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import Api from './Api';
import createReducer from './Reducers';
import sagas from './Sagas';

declare let module: { hot: any };

export default function configureStore(initialState = {}, history: History, api: Api) {
    const reduxSagaMonitorOptions = {};

    // this makes redux-sagas work
    const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);

    // routerMiddleware syncs the url path to the state
    const middlewares = [sagaMiddleware, routerMiddleware(history)];
    if (process.env.NODE_ENV === `development`) {
        // eslint-disable-next-line
        const { logger } = require(`redux-logger`);

        middlewares.push(logger);
    }

    const enhancers = [applyMiddleware(...middlewares)];

    const store = createStore(createReducer(), initialState, composeWithDevTools(compose(...enhancers)));

    sagaMiddleware.run(sagas, api);

    return store;
}
