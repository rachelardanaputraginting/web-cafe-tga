import { Menu } from '@headlessui/react'
import clsx from 'clsx'
import { Link, usePage } from '@inertiajs/react';


function Links({ href, children, ...props }) {
    return (
        <Menu.Item>
            {({ active }) => (
                <Link
                    {...props}
                    className={clsx(usePage().url == href && 'font-semibold text-white ', 'bg-primary w-full block text-left text-white py-1.5 px-3 text-sm hover:bg-secondary')}
                    href={href}
                >
                    {children}
                </Link>
            )}
        </Menu.Item>
    )
}

function DropdownMenu({ className, label, children, href, ...props }) {
    return (
        <Menu className="relative" as="div">
            {({ open }) => (
                <>
                    <Menu.Button
                        href={href}
                        {...props}
                        className={clsx(open && 'font-semibold text-white', 'flex items-center gap-x-2 text-white', className)}
                    >
                        {label}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={clsx('w-5 h-5 transition duration-200 text-white', open && 'rotate-180')}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                    </Menu.Button>
                    <Menu.Items className="py-1 mt-2 rounded-lg shadow-sm border overflow-hidden absolute w-64 top-full right-0">
                        {children}
                    </Menu.Items>
                </>
            )
            }

        </Menu >
    )
}

function Divider() {
    return <div className='bg-gray-500 my-1 w-full block h-px' />
}

DropdownMenu.Links = Links
DropdownMenu.Divider = Divider
export default DropdownMenu;
