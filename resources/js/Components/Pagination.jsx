import { Link } from '@inertiajs/react'
import clsx from 'clsx'
import React from 'react'

export default function Pagination({ meta }) {
    return (
        <div className='flex items-center w-full justify-center gap-2 my-10'>
            {meta.links.map((link, i) => (
                <Link className={clsx(link.active && 'text-blue-500 font-semibold', 'text-black text-center')}
                    // preserveScroll
                    key={i} href={link.url}>
                    {link.label}
                </Link>
            ))}
        </div>
    )
}
