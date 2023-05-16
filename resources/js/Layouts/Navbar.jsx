import { Link, usePage } from '@inertiajs/react'
import React from 'react'
import Container from '@/Components/Container';
import ApplicationLogo from '@/Components/ApplicationLogo';
import NavLink from '@/Components/NavLink';
import DropdownMenu from '@/Components/DropdownMenu';

export default function Navbar() {
    const { auth, categories_global, carts_global_count } = usePage().props
    return (

        <nav className="bg-primary border-gray-200 dark:bg-gray-900 dark:border-gray-700">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <NavLink href="#" className="flex items-center">
                    <ApplicationLogo />
                    <span className="self-center text-white ml-2 text-xl font-semibold whitespace-nowrap dark:text-white">TGA Cafe</span>
                </NavLink>
                <button data-collapse-toggle="navbar-multi-level" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-multi-level" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"></path></svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-multi-level">
                    <ul className="flex bg-primary flex-col font-medium p-4 items-center md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <NavLink href='/'>Home</NavLink>
                        <NavLink href='/products'>Products</NavLink>
                        <DropdownMenu label={`Categories`}>
                            {categories_global.map(category => (
                                <DropdownMenu.Links key={category.slug} href={`/products?category=${category.slug}`}>{category.name}</DropdownMenu.Links>
                            ))}
                        </DropdownMenu>
                        {auth.user ? (<>
                            <DropdownMenu label={auth.user.name}>

                                <DropdownMenu.Links href='/profile'>{auth.user.name}</DropdownMenu.Links>
                                <DropdownMenu.Divider />
                                <DropdownMenu.Links href='/cart'>Cart</DropdownMenu.Links>
                                <DropdownMenu.Links href='/history'>Your history</DropdownMenu.Links>
                                <DropdownMenu.Links href='/logout' method="post">Logout</DropdownMenu.Links>
                            </DropdownMenu>
                            <NavLink className='flex items-center gap-x-2' href={`/carts`}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                    <path d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z" clipRule="evenodd" />
                                </svg>

                                {/* {carts_global_count > 0 ? carts_global_count : null} */}
                            </NavLink>

                        </>) : (<>
                            <NavLink href='/login'>Login</NavLink>
                            <NavLink href='/register'>Register</NavLink>

                        </>)}
                    </ul>
                </div>
            </div>
        </nav>

    )
}
