import React from 'react';
import { Head } from '@inertiajs/react';
import App from '@/Layouts/App';
import Container from '@/Components/Container';
import ProductItem from '@/Components/ProductItem';
import Header from '@/Components/Header';
import Pagination from '@/Components/Pagination';
import Navbar from '@/Layouts/Navbar';

export default function Home(props) {
    const { data: products, meta, links } = props.products;
    return (
        <>
            <Head title="Our Products" />
            <Navbar />
            <Header>
                <Header.Title>
                    TGA Cafe
                </Header.Title>
                <Header.Subtitle>
                    Lorem ipsum, dolor sit amet consectetur adipisicing.
                </Header.Subtitle>
                <Header.Content>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis esse similique aperiam illo quidem fugiat eligendi, labore iure numquam rerum, vero ea et obcaecati maiores! Sit neque pariatur eos sequi.
                </Header.Content>
            </Header>
            <Container>
                {products.length ?
                    <div className='grid sm:grid-cols-1 justify-center md:grid-cols-3 lg:grid-cols-4 gap-10'>
                        {
                            products.map(product => (
                                <ProductItem product={product} key={product.id}></ProductItem>
                            ))
                        }
                    </div>
                    : null}
                <Pagination meta={meta} links={links} />
            </Container>
        </>
    );
}

Home.Layout = page => <App children={page} />
