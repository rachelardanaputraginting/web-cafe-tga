import React from 'react';
import App from '@/Layouts/App';
import { Head, Link } from '@inertiajs/react';
import Header from '@/Components/Header';
import Container from '@/Components/Container';
import ProductItem from '@/Components/ProductItem';
import NavLink from '@/Components/NavLink';


export default function Home({ products, ...props }) {
    const { auth } = props;
    return (
        <>
            <Head title="Home" />
            <Header className='order-first'>
                <Header.Title>
                    QR Cafe
                </Header.Title>
                <Header.Subtitle>
                    Menikmati Kepraktisan Membayar dengan QR Code di Tempat
                </Header.Subtitle>
                <Header.Content>
                    Dengan menggunakan sistem penjualan QR Code ini, pengunjung kafe dapat menghindari antrian panjang di kasir dan melakukan transaksi dengan cepat serta aman. Ini juga memberikan pengalaman yang lebih interaktif dan mudah untuk menjelajahi menu dan melakukan pembelian.

                    QR Cafe menghadirkan kemudahan dan efisiensi dalam sistem penjualan dengan QR Code, memberikan pengalaman yang praktis dan modern bagi pengunjungnya.
                </Header.Content>
            </Header>
            <Container>
                {auth.user ? <>
                    {
                        products.length ?
                            <>
                                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-10 gap-4'>
                                    {
                                        products.map(product => (
                                            <ProductItem product={product} key={product.slug}></ProductItem>
                                        ))

                                    }
                                </div>
                                <Link className="text-secondary underline text-center w-full block mt-10" href={route('products.index')}>Show more products.</Link>
                            </>
                            : <p>No item yet!</p>
                    }
                </>
                    : <NavLink className="text-white py-1.5 text-sm px-3 mx-auto bg-primary rounded font-semibold text-center" href={`/login`}>Please Sign In!</NavLink>}


            </Container >

        </>
    );
}

Home.layout = page => <App children={page} />
