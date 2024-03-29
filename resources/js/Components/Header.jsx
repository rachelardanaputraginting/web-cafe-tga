import clsx from 'clsx';
import React from 'react';

function Header({ className = '', children }) {
    return (
        <div
            className={clsx(
                className,
                ' mb-8 mt-36 md:mb-32 grid grid-cols-12 bg-primary py-12 lg:pt-48 sm:pb-32 pb-12'
            )}
        >
            <div className="col-span-10 col-start-2">
                <div className="max-w-4xl">{children}</div>
            </div>
        </div>
    );
}

function Title({ children }) {
    return (
        <h1 className="text-2xl font-bold text-white lg:text-6xl">
            {children}
        </h1>
    );
}

function Subtitle({ children }) {
    return (
        <h4 className="mt-2 lg:mt-6 leading-relaxed text-gray-300 lg:text-2xl">
            {children}
        </h4>
    );
}

function Content({ children }) {
    return (
        <div className="mt-6 leading-relaxed text-gray-400 lg:text-xl">
            {children}
        </div>
    );
}

Header.Title = Title;
Header.Subtitle = Subtitle;
Header.Content = Content;

export default Header;
