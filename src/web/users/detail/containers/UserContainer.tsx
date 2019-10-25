import { memo } from 'react';
import { connect } from 'react-redux';
import { compose, Dispatch } from 'redux';
import { RootState } from '../../../../business/Reducers';
import { LoadUser, loadUser } from '../../../../business/users/user-actions';
import {
    selectUser,
    selectUserErrors,
    selectUserLoading,
} from '../../../../business/users/user-selectors';
import withErrorBoundary from '../../../utils/hocs/WithErrorBoundary';
import UserPage, { UserPageProps } from '../components/UserPage';

const mapStateToProps = (state: RootState): Partial<UserPageProps> => {
    return {
        errors: selectUserErrors(state),
        loading: selectUserLoading(state),
        user: selectUser(state),
    };
};

const mapDispatchToProps = (
    dispatch: Dispatch<LoadUser>,
): Partial<UserPageProps> => {
    return {
        loadUser: (login: string, from?: Date, to?: Date) => {
            dispatch(loadUser(login, from, to));
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
)(withErrorBoundary(UserPage)) as React.ComponentType;
