import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import configureStore from '../business/Store';
import './App.css';
import LoaderComponent from './utils/components/LoaderComponent';
import history from './utils/History';
import withErrorBoundary from './utils/hocs/WithErrorBoundary';
import loader from './utils/Loader';
import WebApi from './WebApi';

const UsersPage = loader(() => import('./users/components/UsersPage'), {
    fallback: <LoaderComponent />,
});

const initialState = {};
const store = configureStore(initialState, history, WebApi());

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <Suspense fallback={<LoaderComponent />}>
                    <Switch>
                        <Route exact path="/" component={UsersPage} />
                        <Route path="/about" component={() => <div>about!</div>} />
                    </Switch>
                </Suspense>
            </Router>
        </Provider>
    );
};

export default withErrorBoundary(App);
