import Button from '@/Components/Button';
import Navbar from './Navbar';
import CartDialog from '@/Components/Dialog';
import { useState } from 'react'
import { Link, usePage } from '@inertiajs/react';
import { Toaster } from 'react-hot-toast';

export default function App(props) {
    // const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);
    const { children } = props;
    const { carts_global } = usePage().props
    let [isOpen, setIsOpen] = useState(false)
    const modalAdd = () => {
        setIsOpen(true);
    }

    const onClose = () => {
        setIsOpen(false);
    }

    return (
        <div className="min-h-screen">
            <Navbar />
            <div>
                <Toaster
                    position="top-center"
                // reverseOrder={false}
                />
            </div>
            <>
                <div>
                    <div className="fixed z-[998] left-0 top-20 right-0 bg-white text-center flex justify-end gap-10 pr-36">
                        <div className='flex justify-start items-center left-32 top-6 absolute font-semibold text-lg text-primary'>Enjoy your order...</div>
                        <div className='flex justify-center items-center py-5'>


                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-primary">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                            </svg>

                        </div>
                        <div className='flex justify-center items-center py-5'>
                            <button className="btn btn-primary" onClick={modalAdd}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-primary">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                </svg>


                            </button>

                        </div>

                    </div>
                </div>
                {children}

                <CartDialog isOpen={isOpen} onClose={setIsOpen}>
                    <>
                        <CartDialog.Title title={carts_global.length ? 'Complete your cart.' : 'The cart is currently empty.'}>
                        </CartDialog.Title>
                        <CartDialog.Divider />
                        {carts_global.length ?
                            <Link label={`Carts`} >
                                {carts_global.map(cart => (
                                    <div key={cart.slug}> {cart.product.name}</div>
                                ))}
                            </Link> :
                            <>
                                <div className='flex flex-col text-center justify-center space-y-4 '>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-center mx-auto">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                                    </svg>

                                    <Link href='/products' className='text-blue-500 underline' onClick={onClose}>Try add new one</Link></div>
                            </>
                        }
                        <button onClick={onClose} className='absolute right-5 top-5 text-primary border-none'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        </button>
                        {carts_global.length ? <Button className='w-full py-3 mt-8 gap-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                            </svg>

                            Buy Now
                        </Button> : null}

                    </>
                </CartDialog>
            </>

        </div >


    );
}
