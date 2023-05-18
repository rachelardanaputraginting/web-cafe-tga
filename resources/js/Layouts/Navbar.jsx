import { useForm, usePage } from '@inertiajs/react'
import React from 'react'
import ApplicationLogo from '@/Components/ApplicationLogo';
import NavLink from '@/Components/NavLink';
import DropdownMenu from '@/Components/DropdownMenu';

export default function Navbar() {
    const { auth, categories_global, carts_global_count } = usePage().props
    // const { data, setData, post, put, reset, errors } = useForm({
    return (

        <nav className="bg-primary border-gray-200 dark:bg-gray-900 top-0 z-[99] dark:border-gray-700 fixed right-0 left-0">
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
                        {auth.user ? <>
                            <NavLink href='/'>Home</NavLink>
                            <NavLink href='/products'>Products</NavLink>
                            <DropdownMenu label={`Categories`}>
                                {categories_global.length > 0 ?
                                    <>
                                        {
                                            categories_global.map(category => (
                                                <DropdownMenu.Links key={category.slug} href={`/products?category=${category.slug}`}>{category.name}</DropdownMenu.Links>
                                            ))
                                        }
                                    </> : null
                                }
                            </DropdownMenu>
                        </>
                            : null}
                        {auth.user ? (<>
                            <DropdownMenu label={auth.user.name}>

                                <DropdownMenu.Links href='/profile'>{auth.user.name}</DropdownMenu.Links>
                                <DropdownMenu.Divider />
                                <DropdownMenu.Links href='/cart'>Cart</DropdownMenu.Links>
                                <DropdownMenu.Links href='/history'>Your history</DropdownMenu.Links>
                                <DropdownMenu.Links href='/logout' method="post">Logout</DropdownMenu.Links>
                            </DropdownMenu>

                            {/* {carts_global_count > 0 ? carts_global_count : null} */}



                        </>) : (<>
                            <NavLink href='/login'>Login</NavLink>
                            <NavLink href='/register'>Register</NavLink>

                        </>)}
                    </ul>
                </div>
            </div>
        </nav >

    )
}
