import { cleanup } from '@testing-library/react';
import React from 'react';
import { usersListInitialState } from '../../../../business/users/users-list-reducers';
import { renderWithReduxAndRouter } from '../../../utils/Renderers';
import UsersSearchFormContainer from '../UsersSearchFormContainer';

describe('UsersContainer tests', () => {
    afterEach(cleanup);

    it('should take default login value from redux store in the search form', () => {
        const login = 'jacruzca';
        const { getByTestId } = renderWithReduxAndRouter(
            <UsersSearchFormContainer />,
            {
                usersList: { ...usersListInitialState, ...{ login } },
            },
        );
        const searchLoginInput = getByTestId('login-input') as HTMLInputElement;
        expect(searchLoginInput.value).toBe(login);
    });
});
