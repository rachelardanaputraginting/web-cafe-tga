import { Link, usePage } from '@inertiajs/react';
import clsx from 'clsx';

export default function NavLink({ href, target, className, active, children, ...props }) {
    return (
        <Link
            {...props}
            href={href}
            target={target}
            className={clsx(usePage().url == href && 'font-semibold text-white',
                'text-gray-50 hover:text-gray-300 py-3', className)}
        >
            {children}
        </Link>
    );
}
