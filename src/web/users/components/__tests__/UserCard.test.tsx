import { cleanup, render } from '@testing-library/react';
import React from 'react';
import { fakeUser } from '../../../../business/users/__mocks__/UserFaker';
import UserCard from '../UserCard';

describe('User Card tests', () => {
    afterEach(cleanup);

    it('should show the name of the user in card', () => {
        const user = fakeUser();
        const { getByTestId } = render(<UserCard user={user} />);
        expect(getByTestId('login')).toHaveTextContent(`${user.login}`);
        expect(getByTestId('name')).toHaveTextContent(`${user.name}`);
    });
});
