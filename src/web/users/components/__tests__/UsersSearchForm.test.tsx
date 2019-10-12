import { cleanup, fireEvent, render } from '@testing-library/react';
import React from 'react';
import UsersSearchForm from '../UsersSearchForm';

describe('UsersSearchForm tests', () => {
    afterEach(cleanup);
    it('submits on mount', () => {
        const loadUsers = jest.fn();
        render(<UsersSearchForm loadUsers={loadUsers} />);
        //expect to have been called on mount
        expect(loadUsers).toHaveBeenCalled();
    });
    it('submits', () => {
        const loadUsers = jest.fn();
        const { getByTestId } = render(<UsersSearchForm loadUsers={loadUsers} />);
        fireEvent.submit(getByTestId('users-search-form'));
        //expect to have been called after submitting the form
        expect(loadUsers).toHaveBeenCalled();
    });
});
