import { cleanup, render } from '@testing-library/react';
import React from 'react';
import { fakeUsersList } from '../../utils/UserFaker';
import UsersList from '../UsersList';

describe('UsersList tests', () => {
    afterEach(cleanup);
    it('should show a list of users', () => {
        const totalUsers = 5;
        const users = fakeUsersList(totalUsers);
        const { getByTestId } = render(<UsersList usersList={users} />);
        expect(getByTestId('users-list').children).toHaveLength(totalUsers);
    });

    it('should show a no results message', () => {
        const { getByTestId, queryByTestId } = render(<UsersList usersList={[]} />);
        expect(getByTestId('no-results')).toBeDefined();
        expect(queryByTestId('users-list')).toBeNull();
    });
});
