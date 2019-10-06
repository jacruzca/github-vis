import React, { ErrorInfo } from 'react';

type Props = {
    onError: (error: Error, errorInfo: object) => void;
    onReset: () => void;
    FallbackComponent: React.ComponentType<any>;
};
type State = {
    readonly error: Error | null;
    readonly errorInfo: ErrorInfo | null;
};

class ErrorBoundaryComponent extends React.Component<Props, State> {
    readonly state: State = {
        error: null,
        errorInfo: null,
    };

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        const { onError } = this.props;

        if (typeof onError === 'function') {
            onError(error, errorInfo);
        }

        this.setState({ error, errorInfo });
    }

    render() {
        const { error, errorInfo } = this.state;
        const { children, FallbackComponent } = this.props;
        if (error) {
            // You can render any custom fallback UI
            return <FallbackComponent error={error} errorInfo={errorInfo} />;
        }

        return children || null;
    }
}

export default ErrorBoundaryComponent;
