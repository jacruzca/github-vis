import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';
import { initialState as IS } from '../../business/Reducers';

const mockStore = configureMockStore();

export const renderWithRedux = (
    component: any,
    initialState = IS,
    store = mockStore(initialState),
) => {
    return {
        ...render(<Provider store={store}>{component}</Provider>),
        store,
    };
};

const renderWithPlainRouter = (component: any) => {
    return <BrowserRouter>{component}</BrowserRouter>;
};

export const renderWithRouter = (component: any) => {
    return {
        ...render(<BrowserRouter>{component}</BrowserRouter>),
    };
};

export const renderWithReduxAndRouter = (
    component: any,
    initialState = IS,
    store = mockStore(initialState),
) => {
    return renderWithRedux(
        renderWithPlainRouter(component),
        initialState,
        store,
    );
};
