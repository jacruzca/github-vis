import { memo } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { IRootState } from '../../../business/Reducers';
import {
    selectUsersList,
    selectUsersListError,
    selectUsersListLoading,
    selectUsersListLogin,
} from '../../../business/users/users-list-selectors';
import withErrorBoundary from '../../utils/hocs/WithErrorBoundary';
import UsersPage from '../components/UsersPage';

const mapStateToProps = (state: IRootState) => {
    return {
        error: selectUsersListError(state),
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
