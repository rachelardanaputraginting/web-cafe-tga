import Navbar from './Navbar';
import CartDialog from '@/Components/Dialog';
import { useState } from 'react'

export default function App({ auth, header, children }) {
    // const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);
    let [isOpen, setIsOpen] = useState(true)
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
                <CartDialog.Title title='Complete your order' />
                <CartDialog.Divider />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis consectetur ex a ipsum vel tempore aliquam nemo alias omnis rerum? Velit rerum officiis minima odio atque hic reiciendis provident eum quasi explicabo inventore odit veritatis mollitia praesentium adipisci minus modi molestiae iusto consectetur repellat nulla rem, quibusdam totam corporis. Deserunt iusto quidem natus, quisquam itaque, reprehenderit suscipit labore perferendis illo quo perspiciatis amet vel eveniet non ducimus, consectetur officia! Commodi sequi quis rerum fugit corporis, iure itaque? Aut fugit perferendis molestias sunt velit vel fuga eligendi. Veritatis laudantium ab, mollitia veniam impedit accusantium vel doloremque quaerat, tempora sapiente quidem quo?</p>
                <button onClick={onClose} className='absolute right-5 top-5 text-primary border-none'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                </button>
            </CartDialog>

        </div>


    );
}
