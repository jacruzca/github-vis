import { cleanup, render } from '@testing-library/react';
import React from 'react';
import DefaultFallbackComponent from '../DefaultFallbackComponent';

describe('DefaultFallbackComponent tests', () => {
    afterEach(cleanup);

    it('should show the error', () => {
        const errorMessage = 'error';
        const errorInfo = {
            componentStack: 'stack',
        };
        const { getByTestId } = render(
            <DefaultFallbackComponent
                error={new Error(errorMessage)}
                errorInfo={errorInfo}
            />,
        );
        expect(getByTestId('fallback')).toHaveTextContent(errorMessage);
    });
});
