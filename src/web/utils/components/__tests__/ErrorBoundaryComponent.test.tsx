import { cleanup, render } from '@testing-library/react';
import React from 'react';
import DefaultFallbackComponent from '../DefaultFallbackComponent';
import ErrorBoundaryComponent from '../ErrorBoundaryComponent';

function Bomb({ shouldThrow }: { shouldThrow?: boolean }) {
    if (shouldThrow) {
        throw new Error('💣');
    } else {
        return null;
    }
}

describe('ErrorBoundaryComponent tests', () => {
    beforeAll(() => {
        jest.spyOn(console, 'error').mockImplementation(() => {});
    });

    afterAll(() => {
        (console.error as jest.Mock).mockRestore();
    });

    afterEach(() => {
        cleanup();
        jest.clearAllMocks();
    });

    it('should call onError', () => {
        const onError = jest.fn().mockImplementation(() => {});
        const { rerender } = render(
            <ErrorBoundaryComponent
                FallbackComponent={DefaultFallbackComponent}
                onError={onError}
            >
                <Bomb />
            </ErrorBoundaryComponent>,
        );

        rerender(
            <ErrorBoundaryComponent
                FallbackComponent={DefaultFallbackComponent}
                onError={onError}
            >
                <Bomb shouldThrow={true} />
            </ErrorBoundaryComponent>,
        );

        const error = expect.any(Error);
        const info = { componentStack: expect.stringContaining('Bomb') };
        expect(onError).toHaveBeenCalledWith(error, info);
        expect(console.error).toHaveBeenCalledTimes(2);

        (console.error as jest.Mock).mockClear();
    });

    it('should display children if no error', () => {
        const onError = jest.fn();
        const { getByTestId } = render(
            <ErrorBoundaryComponent
                FallbackComponent={DefaultFallbackComponent}
                onError={onError}
            >
                <div data-testid="child" />
            </ErrorBoundaryComponent>,
        );

        expect(onError).not.toHaveBeenCalled();
        expect(getByTestId('child')).toBeDefined();
    });
});
