import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { initialState as IS } from '../business/Reducers';
import configureStore from '../business/Store';
import './App.css';
import LoaderComponent from './utils/components/LoaderComponent';
import history from './utils/History';
import withErrorBoundary from './utils/hocs/WithErrorBoundary';
import loader from './utils/Loader';
import WebApi from './WebApi';

const UsersContainer = loader(
    () => import('./users/containers/UsersContainer'),
    {
        fallback: <LoaderComponent />,
    },
);

const store = configureStore(IS, history, WebApi());

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <Suspense fallback={<LoaderComponent />}>
                    <Switch>
                        <Route exact path="/" component={UsersContainer} />
                        <Route
                            path="/about"
                            component={() => (
                                <div>
                                    <Link to="/">about!</Link>
                                </div>
                            )}
                        />
                    </Switch>
                </Suspense>
            </Router>
        </Provider>
    );
};

export default withErrorBoundary(App);
