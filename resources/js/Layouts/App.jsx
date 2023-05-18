import Navbar from './Navbar';
import CartDialog from '@/Components/Dialog';
import { useState } from 'react'
import { Link, useForm, usePage } from '@inertiajs/react';
import { Toaster, toast } from 'react-hot-toast';
import { numberFormat } from '@/Libs/Helper';
import Footer from '@/Components/Footer';
import Counter from '@/Components/Counter';
import NavLink from '@/Components/NavLink';

export default function App(props) {
    // const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);
    const { delete: destroy } = useForm()

    const { children } = props;
    const { carts_global, carts_global_count, auth } = usePage().props
    let [isOpen, setIsOpen] = useState(false)
    const modalAdd = () => {
        setIsOpen(true);
    }

    const onClose = () => {
        setIsOpen(false);
    }

    const onDeleteHandler = (cart_id) => {
        destroy(route('cart.delete', cart_id), {
            onSuccess: () => {
                toast.success('Removed')
            }
        })
    }
    console.log(carts_global);
    let total = 0;
    total > 0 ? carts_global.reduce((acc, cart) => acc + cart.price + cart.quantity, 0) : null;




    return (
        <div className="min-h-screen">
            <Navbar />
            <div>
                <Toaster toastOptions={{
                    className: 'z-[99999]',
                    style: {
                        border: '1px solid #713200',
                        padding: '16px',
                        color: '#713200',
                    },
                }}
                    position="top-center"
                    reverseOrder={false}
                />
            </div>
            <>
                <div>
                    {carts_global.length > 0 ? <>
                        <div className="fixed z-[9] left-0 top-20 right-0 bg-white text-center flex justify-end gap-10 pr-36">
                            <div className='flex justify-start items-center left-5 sm:left-32 top-6 absolute font-semibold text-lg text-primary'>Enjoy your order...</div>
                            <div className='flex justify-center items-center py-5 '>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-primary">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                                </svg>

                            </div>
                            <div className='flex justify-center items-center py-5'>
                                <button className="btn btn-primary flex items-center" onClick={modalAdd}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-primary">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                    </svg>

                                    <p className='text-xl ml-2 font-semibold text-primary'> {carts_global_count > 0 ? carts_global_count : null}</p>
                                </button>

                            </div>

                        </div>
                    </> :
                        <div className="fixed z-[9] left-0 top-20 right-0 bg-white text-center flex justify-end gap-10 pr-36">
                            <div className=' flex justify-center items-center py-5'>
                                {auth.user ? <>
                                    <button className="btn btn-primary flex items-center" onClick={modalAdd}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-primary">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                        </svg>

                                        <p className='text-xl ml-2 font-semibold text-primary'> {carts_global_count > 0 ? carts_global_count : null}</p>
                                    </button>
                                </> : <>
                                    <button className="btn btn-primary flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-primary">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                        </svg>

                                        <p className='text-xl ml-2 font-semibold text-primary'> {carts_global_count > 0 ? carts_global_count : null}</p>
                                    </button>
                                </>}


                            </div>
                        </div>}
                </div>
                {children}

                <CartDialog isOpen={isOpen} onClose={setIsOpen}>
                    <>
                        <CartDialog.Title title={carts_global.length > 0 ? 'Complete your cart' : 'The cart is currently empty.'}>
                        </CartDialog.Title>
                        <CartDialog.Divider />
                        {carts_global ?
                            <>
                                <div>
                                    {carts_global.map((cart, i) => (
                                        <>
                                            <ul key={cart.id} className="mb-8 space-y-4 text-left text-gray-500 dark:text-gray-400">
                                                <li className="w-full flex items-start justify-between space-x-3">
                                                    {/* Icon */}
                                                    <div className='flex gap-3 w-1/2'>
                                                        <img src={cart.product.picture} alt="" width='72' className='rounded w-18' />
                                                        <div>
                                                            <h3 className='font-semibold text-primary'>{cart.product.name}</h3>
                                                            <span className='font-light mr-10 text-xs'>{cart.product.description}</span>
                                                        </div>
                                                    </div>

                                                    <div className='flex justify-end gap-10 w-1/2'>
                                                        <div className='flex justify-end flex-col ml-auto gap-y-2'>
                                                            <div className='text-primary gap-x-2 flex justify-end'>Price :
                                                                Rp. {numberFormat(cart.product.price, 0)}
                                                            </div>
                                                            <div className=' gap-x-2 flex justify-end'>Quantity :
                                                                {` ` + cart.product.quantity}</div>
                                                            <div className='text-primary font-semibold gap-x-2 flex flex-col justify-end '>Subtotal :
                                                                Rp. {numberFormat(cart.price, 0)}</div>
                                                        </div>
                                                        <div>
                                                            <button onClick={() => onDeleteHandler(cart)} className='focus:outline-none inline text-red-500'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                                            </svg>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </li>
                                                <hr className='w-2/3 ml-auto ' />
                                            </ul >

                                        </>
                                    ))}
                                </div>
                                <div className='text-right text-2xl font-bold text-primary mr-16 flex gap-4 justify-end items-center'>Total price : <sup> Rp</sup> {' '} {numberFormat(carts_global.reduce((acc, cart) => acc + cart.price, 0))}</div>
                            </>
                            :
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


                        {carts_global.length > 0 ? <NavLink href='/invoice' method="post" as='button' data={{ carts: carts_global, total: total }} className='w-full py-3 mt-12 gap-2 bg-primary flex items-center justify-center rounded'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                            </svg>
                            Buy Now
                        </NavLink> : null}

                    </>
                </CartDialog>

                <Footer />
            </>

        </div >


    );
}
