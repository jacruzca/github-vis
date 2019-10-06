/* eslint-disable react/forbid-prop-types */
import React, { ErrorInfo } from 'react';

const DefaultFallbackComponent = ({ error, errorInfo }: { error: Error; errorInfo: ErrorInfo }) => {
    return (
        <div>
            <h3>Something wrong happened</h3>
            <details style={{ whiteSpace: 'pre-wrap' }}>
                {error && error.toString()}
                <br />
                {errorInfo.componentStack}
            </details>
        </div>
    );
};

export default DefaultFallbackComponent;
