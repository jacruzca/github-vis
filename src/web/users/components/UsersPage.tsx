import React, { FunctionComponent } from 'react';
import { User } from '../../../business/users/users-types';
import Layout from '../../common/components/Layout';
import DisplayErrorComponent from '../../utils/components/DisplayErrorComponent';
import DisplayLoadingComponent from '../../utils/components/DisplayLoadingComponent';
import UsersList from './UsersList';
import UsersSearchForm from './UsersSearchForm';

export type UsersPageProps = {
    error?: Error;
    loading?: boolean;
    login?: string;
    usersList: User[];
};

const UsersPage: FunctionComponent<UsersPageProps> = ({ error, loading, usersList, login }: UsersPageProps) => {
    return (
        <Layout>
            <>
                <UsersSearchForm />
                <DisplayErrorComponent error={error} />
                <DisplayLoadingComponent loading={loading} />
                <UsersList usersList={usersList} login={login}></UsersList>
            </>
        </Layout>
    );
};

export default UsersPage;
