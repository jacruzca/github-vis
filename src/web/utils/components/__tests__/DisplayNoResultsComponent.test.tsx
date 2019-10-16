import { cleanup, render } from '@testing-library/react';
import React from 'react';
import DisplayNoResultsComponent from '../DisplayNoResultsComponent';

describe('DisplayNoResultsComponent tests', () => {
    afterEach(cleanup);

    it('should show the no results message', () => {
        const errorMessage = 'No results';
        const { getByTestId } = render(
            <DisplayNoResultsComponent isEmpty={true} error={errorMessage} />,
        );
        expect(getByTestId('no-results')).toHaveTextContent(errorMessage);
    });

    it('should not show anything when isEmpty is false', () => {
        const { queryByTestId } = render(<DisplayNoResultsComponent />);
        expect(queryByTestId('no-results')).toBeNull();
    });
});
