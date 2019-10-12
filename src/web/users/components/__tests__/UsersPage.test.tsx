import { cleanup } from '@testing-library/react';
import React from 'react';
import { renderWithReduxAndRouter } from '../../../utils/Renderers';
import UsersPage from '../UsersPage';

describe('UsersPage tests', () => {
    afterEach(cleanup);

    it('should display errors if any', () => {
        const { getByTestId } = renderWithReduxAndRouter(
            <UsersPage
                errors={[new Error('error 1'), new Error('error 2')]}
                usersList={[]}
            />,
        );
        const errorsContainer = getByTestId('users-error');
        expect(errorsContainer).toBeVisible();
        expect(errorsContainer.children).toHaveLength(2);
    });

    it('should display the loading component if loading', () => {
        const { getByTestId } = renderWithReduxAndRouter(
            <UsersPage loading={true} usersList={[]} />,
        );
        expect(getByTestId('loading')).toBeVisible();
    });
});
