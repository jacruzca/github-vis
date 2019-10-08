/* eslint-disable react/jsx-props-no-spreading */
import React, { FunctionComponent } from 'react';

type Props = {
    error?: Error;
};

const DisplayErrorComponent: FunctionComponent<Props> = ({ error }: Props) => {
    if (error) {
        return (
            <div className="alert alert-danger" role="alert">
                {error.message}
            </div>
        );
    }
    return null;
};

export default DisplayErrorComponent;
