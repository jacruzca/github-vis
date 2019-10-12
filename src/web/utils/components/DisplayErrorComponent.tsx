/* eslint-disable react/jsx-props-no-spreading */
import React, { FunctionComponent } from 'react';

type Props = {
    errors?: Error[];
};

const DisplayErrorComponent: FunctionComponent<Props> = ({ errors }: Props) => {
    if (errors) {
        return (
            <div data-testid="users-error">
                {errors.map((error: Error, index: number) => (
                    <div
                        key={index}
                        className="alert alert-danger"
                        role="alert"
                    >
                        {error.message}
                    </div>
                ))}
            </div>
        );
    }
    return null;
};

export default DisplayErrorComponent;
