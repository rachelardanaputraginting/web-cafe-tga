import React, { useRef } from 'react';
import App from '@/Layouts/App';
import { Head, Link } from '@inertiajs/react';
import Header from '@/Components/Header';
import Container from '@/Components/Container';
import ProductItem from '@/Components/ProductItem';


export default function Home({ products }) {
    return (
        <>
            <Head title="Home" />

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
                    <>
                        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-10 gap-4'>
                            {
                                products.map(product => (
                                    <ProductItem product={product} key={product.slug}></ProductItem>
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
