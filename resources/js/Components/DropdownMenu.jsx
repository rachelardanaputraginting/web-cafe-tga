import { Menu } from '@headlessui/react'
import clsx from 'clsx'
import { Link, usePage } from '@inertiajs/react';


function Links({ href, children, ...props }) {
    return (
        <Menu.Item>
            {({ active }) => (
                <Link
                    {...props}
                    href={href}
                    className={clsx(usePage().url == href && 'font-semibold text-white',
                        'w-full block text-left text-white py-1.5 px-3 text-sm')}
                >

                    {children}
                </Link>
            )}
        </Menu.Item>
    )
}

function DropdownMenu({ buttonClassName, label, children, ...props }) {
    return (
        <Menu className="relative" as="div">
            {({ open }) => (
                <>
                    <Menu.Button className={clsx(open && 'font-semibold text-white', 'flex items-center gap-x-2 text-white hover:text-gray-300', buttonClassName)}
                        {...props}
                    >
                        {label}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={clsx('w-5 h-5 transition duration-200 ', open && 'rotate-180')}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>

                    </Menu.Button>
                    <Menu.Items className="py-1 mt-2 bg-primary rounded-lg shadow-sm border overflow-hidden absolute w-64 top-full right-0">
                        {children}
                    </Menu.Items>
                </>
            )}

        </Menu >
    )
}

function Divider() {
    return <div className='bg-gray-500 my-1 w-full block h-px' />
}

DropdownMenu.Links = Links
DropdownMenu.Divider = Divider
export default DropdownMenu;
