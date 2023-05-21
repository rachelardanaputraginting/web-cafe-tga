import React from 'react';
import { Head } from '@inertiajs/react';
import App from '@/Layouts/App';
import Container from '@/Components/Container';
import Header from '@/Components/Header';
import ProductItem from '@/Components/ProductItem';
import Pagination from '@/Components/Pagination';

export default function Index(props) {
    const { data: products, meta, links } = props.products;


    return (
        <>
            <Head title="Our Products" />
            <Header>
                <Header.Title>
                    Produk Kami
                </Header.Title>
                <Header.Subtitle>
                    Berikut beberapa product yang kami sajikan untuk Anda
                </Header.Subtitle>
                <Header.Content>
                    Dalam menu kami yang beragam, terdapat berbagai pilihan makanan dan minuman yang menggugah selera. Mulai dari kopi spesialitas yang segar dan aromatik, hidangan ringan yang lezat, hingga hidangan utama yang memanjakan lidah, kami menawarkan berbagai pilihan yang dapat memenuhi keinginan dan selera setiap pelanggan.
                </Header.Content>
            </Header>
            <Container>
                {products.length ?
                    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-10 gap-4'>
                        {
                            products.map(product => (
                                <ProductItem product={product} key={product.slug}>

                                </ProductItem>
                            ))
                        }
                    </div>
                    : null}
            </Container>



            <Pagination meta={meta} links={links} />
        </>
    );
}

Index.layout = page => <App children={page} />
