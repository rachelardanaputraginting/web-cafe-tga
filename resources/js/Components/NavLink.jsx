import { Link, usePage } from '@inertiajs/react';
import clsx from 'clsx';

export default function NavLink({ href, className, active, children, ...props }) {
    return (
        <Link
            {...props}
            href={href}
            className={clsx(usePage().url == href && 'font-semibold text-white',
                className,
                'text-gray-50 hover:text-gray-300 py-3')}
        >
            {children}
        </Link>
    );
}
