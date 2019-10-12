import React, { FunctionComponent } from 'react';
import { User } from '../../../business/users/users-types';
import Layout from '../../common/components/Layout';
import DisplayErrorComponent from '../../utils/components/DisplayErrorComponent';
import DisplayLoadingComponent from '../../utils/components/DisplayLoadingComponent';
import UsersSearchFormContainer from '../containers/UsersSearchFormContainer';
import UsersList from './UsersList';

export type UsersPageProps = {
    errors?: Error[];
    loading?: boolean;
    login?: string;
    usersList: User[];
};

const UsersPage: FunctionComponent<UsersPageProps> = ({
    errors,
    loading,
    usersList,
    login,
}: UsersPageProps) => {
    return (
        <Layout>
            <>
                <UsersSearchFormContainer />
                <DisplayErrorComponent errors={errors} />
                <DisplayLoadingComponent loading={loading} />
                <UsersList usersList={usersList} login={login}></UsersList>
            </>
        </Layout>
    );
};

export default UsersPage;
