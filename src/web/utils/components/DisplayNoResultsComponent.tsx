/* eslint-disable react/jsx-props-no-spreading */
import React, { FunctionComponent } from 'react';

type Props = {
    isEmpty?: boolean;
    error?: string;
};

const DisplayNoResultsComponent: FunctionComponent<Props> = ({
    isEmpty = false,
    error,
}: Props) => {
    if (isEmpty) {
        return (
            <div
                data-testid="no-results"
                className="alert alert-warning"
                role="alert"
            >
                {error}
            </div>
        );
    }
    return null;
};

export default DisplayNoResultsComponent;
