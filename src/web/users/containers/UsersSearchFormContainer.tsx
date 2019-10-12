import React, { memo } from 'react';
import { connect } from 'react-redux';
import { compose, Dispatch } from 'redux';
import { ApiPagination } from '../../../business/common/common-types';
import { RootState } from '../../../business/Reducers';
import {
    loadUsers,
    LoadUsers,
} from '../../../business/users/users-list-actions';
import { selectUsersListLogin } from '../../../business/users/users-list-selectors';
import UsersSearchForm, {
    UsersSearchFormProps,
} from '../components/UsersSearchForm';

const mapStateToProps = (state: RootState) => {
    return {
        login: selectUsersListLogin(state),
    };
};

const mapDispatchToProps = (
    dispatch: Dispatch<LoadUsers>,
): Partial<UsersSearchFormProps> => {
    return {
        loadUsers: (login?: string, pagination?: ApiPagination) => {
            dispatch(loadUsers(login, pagination));
        },
    };
};

const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps,
);

export default compose(
    withConnect,
    memo,
)(UsersSearchForm) as React.ComponentType;
