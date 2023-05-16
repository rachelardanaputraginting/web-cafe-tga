import React from 'react';
import { Head, Link } from '@inertiajs/react';
import App from '@/Layouts/App';
import Header from '@/Components/Header';
import ProductItem from '@/Components/ProductItem';
import Container from '@/Components/Container';

export default function Home({ products }) {
    return (
        <>
            <Head title="Home" />
            <Header>
                <Header.Title>
                    Our Products
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
                    <>
                        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-10 gap-4'>
                            {
                                products.map(product => (
                                    <ProductItem product={product} key={product.id}></ProductItem>
                                ))

                            }
                        </div>
                        <Link className="text-secondary underline text-center w-full block mt-10" href={route('products.index')}>Show more articles.</Link>
                    </>
                    : <p>No item yet!</p>}
            </Container >
        </>
    );
}

Home.layout = page => <App children={page} />
