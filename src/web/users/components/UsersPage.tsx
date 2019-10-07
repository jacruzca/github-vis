import React from 'react';
import Layout from '../../common/components/Layout';
import withErrorBoundary from '../../utils/hocs/WithErrorBoundary';
import UsersSearchForm from './UsersSearchForm';

type Props = {
    onSubmitForm: () => void;
};

const UsersPage = ({ onSubmitForm }: Props) => {
    return (
        <Layout>
            <>
                <UsersSearchForm />
                <div>Home page!</div>
            </>
        </Layout>
    );
};

export default withErrorBoundary(UsersPage);
