import React, { ComponentType, lazy, Props, Suspense } from 'react';

const Loader = (
    importFunc: () => Promise<{ default: ComponentType<any> }>,
    { fallback }: { fallback: React.ReactElement<any> },
) => {
    const LazyComponent = lazy(importFunc);

    const Component = (props: Props<any>) => (
        <Suspense fallback={fallback}>
            <LazyComponent {...props} />
        </Suspense>
    );

    return Component;
};

export default Loader;
