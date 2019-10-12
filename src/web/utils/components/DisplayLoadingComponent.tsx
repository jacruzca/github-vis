import React from 'react';
import LoaderComponent from './LoaderComponent';

type Props = {
    loading?: boolean;
};

const DisplayLoadingComponent = ({ loading }: Props) => {
    if (loading) {
        return (
            <div
                data-testid="loading"
                className="d-flex justify-content-center"
            >
                <LoaderComponent />
            </div>
        );
    }
    return null;
};

export default DisplayLoadingComponent;
