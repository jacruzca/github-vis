import React from 'react';
import withErrorBoundary from '../../utils/hocs/WithErrorBoundary';

type Props = {
    onSubmitForm: () => void;
};

const UsersPage = ({ onSubmitForm }: Props) => {
    return <div>Home page!</div>;
};

export default withErrorBoundary(UsersPage);
