import React from 'react';
import { Head } from '@inertiajs/react';
import App from '@/Layouts/App';
import Header from '@/Components/Header';
import Container from '@/Components/Container';
import Grid from '@/Components/Grid';
import Panel from '@/Components/Panel';
export default function Dashboard({ product, cart, invoice }) {

    return (
        <>
            <Head title="Dashboard" />
            <Header>
                <Header.Title>
                    Dashboard
                </Header.Title>
                <Header.Subtitle>
                    Lorem ipsum, dolor sit amet consectetur adipisicing.
                </Header.Subtitle>
                <Header.Content>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis esse similique aperiam illo quidem fugiat eligendi, labore iure numquam rerum, vero ea et obcaecati maiores! Sit neque pariatur eos sequi.
                </Header.Content>
            </Header>
            <Container>
                <Grid className='mt-2 sm:-mt-12 w-full bg-white overflow-hidden'>
                    <div className="flex items-start justify-around h-32 shadow bg-primary rounded-lg">
                        <div className='bg-primary w-1/4 h-full p-4 text-center rounded-md'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-white mx-auto my-auto mt-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                            </svg>
                        </div>
                        <div className="flex flex-col justify-evenly bg-white border w-3/4 h-full p-4 rounded-r-md">
                            <h2 className='text-lg text-slate-600 font-semibold'>Product</h2>
                            <h1 className='text-5xl text-third font-bold'>{product ? product : 0}</h1>

                        </div>
                    </div>
                    <div className="flex items-start justify-around h-32 shadow bg-primary rounded-lg">
                        <div className='bg-primary w-1/4 h-full p-4 text-center rounded-md'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-white mx-auto my-auto mt-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                            </svg>
                        </div>
                        <div className="flex flex-col justify-evenly bg-white border w-3/4 h-full p-4 rounded-r-md">
                            <h2 className='text-lg text-slate-600 font-semibold'>Cart</h2>
                            <h1 className='text-5xl text-third font-bold'>{cart ? cart : 0}</h1>

                        </div>
                    </div>
                    <div className="flex items-start justify-around h-32 shadow bg-primary rounded-lg">
                        <div className='bg-primary w-1/4 h-full p-4 text-center rounded-md'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-white mx-auto my-auto mt-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                            </svg>
                        </div>
                        <div className="flex flex-col justify-evenly bg-white border w-3/4 h-full p-4 rounded-r-md">
                            <h2 className='text-lg text-slate-600 font-semibold'>Invoice</h2>
                            <h1 className='text-5xl text-third font-bold'>{invoice ? invoice : 0}</h1>
                        </div>
                    </div>
                </Grid>
            </Container>

        </>
    );
}

Dashboard.layout = page => <App children={page} />
