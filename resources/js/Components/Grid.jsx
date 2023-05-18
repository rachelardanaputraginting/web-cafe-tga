import clsx from 'clsx';
import React from 'react';

export default function Grid({ className = "", cols = 3, children }) {
    return (
        <div
            className={clsx(
                className,
                cols == 3 && 'lg:grid-cols-3 gap-4',
                cols == 2 && 'lg:grid-cols-2',
                cols == 4 && 'lg:grid-cols-4',
                'grid grid-cols-1 md:grid-cols-2 md:gap-16 lg:gap-8'
            )}
        >
            {children}
        </div>
    );
}
