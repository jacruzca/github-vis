/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import DefaultFallbackComponent from '../components/DefaultFallbackComponent';
import ErrorBoundaryComponent from '../components/ErrorBoundaryComponent';

const WithErrorBoundary = (Component, FallbackComponent = DefaultFallbackComponent, onError = null) => {
    const Wrapped = props => (
        <ErrorBoundaryComponent FallbackComponent={FallbackComponent} onError={onError}>
            <Component {...props} />
        </ErrorBoundaryComponent>
    );

    // Format for display in DevTools
    const name = Component.displayName || Component.name;
    Wrapped.displayName = name ? `WithErrorBoundary(${name})` : 'WithErrorBoundary';

    return Wrapped;
};

export default WithErrorBoundary;
