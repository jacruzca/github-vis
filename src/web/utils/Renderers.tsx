import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { Store } from 'redux';
import configureStore from '../../business/Store';

export const renderWithRedux = (
    component: JSX.Element,
    store: Store<any, any> = configureStore({}),
) => {
    return {
        ...render(<Provider store={store}>{component}</Provider>),
        store,
    };
};

export const renderWithRouter = (component: JSX.Element) => {
    return <BrowserRouter>{component}</BrowserRouter>;
};

export const renderWithReduxAndRouter = (
    component: JSX.Element,
    store = configureStore({}),
) => {
    return renderWithRedux(renderWithRouter(component), store);
};
