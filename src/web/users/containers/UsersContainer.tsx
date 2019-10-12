import { memo } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { RootState } from '../../../business/Reducers';
import {
    selectUsersList,
    selectUsersListErrors,
    selectUsersListLoading,
    selectUsersListLogin,
} from '../../../business/users/users-list-selectors';
import withErrorBoundary from '../../utils/hocs/WithErrorBoundary';
import UsersPage, { UsersPageProps } from '../components/UsersPage';

const mapStateToProps = (state: RootState): UsersPageProps => {
    return {
        errors: selectUsersListErrors(state),
        loading: selectUsersListLoading(state),
        usersList: selectUsersList(state),
        login: selectUsersListLogin(state),
    };
};

const withConnect = connect(
    mapStateToProps,
    null,
);

export default compose(
    withConnect,
    memo,
)(withErrorBoundary(UsersPage));
