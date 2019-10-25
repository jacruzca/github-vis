import React, { FunctionComponent, useEffect } from 'react';
import { useParams } from 'react-router';
import { User } from '../../../../business/users/users-types';
import Layout from '../../../common/components/Layout';
import DisplayErrorComponent from '../../../utils/components/DisplayErrorComponent';
import DisplayLoadingComponent from '../../../utils/components/DisplayLoadingComponent';
import UserComponent from './UserComponent';

export type UserPageProps = {
    errors?: Error[];
    loading?: boolean;
    user?: User;
    loadUser: (login: string, from?: Date, to?: Date) => void;
};

const UserPage: FunctionComponent<UserPageProps> = ({
    errors,
    loading,
    user,
    loadUser,
}: UserPageProps) => {
    const { login } = useParams();
    useEffect(() => {
        if (login) {
            loadUser(login);
        }
    }, [loadUser, login]);

    return (
        <Layout>
            <>
                <DisplayErrorComponent errors={errors} />
                <DisplayLoadingComponent loading={loading} />
                {user && <UserComponent user={user}></UserComponent>}
            </>
        </Layout>
    );
};

export default UserPage;
