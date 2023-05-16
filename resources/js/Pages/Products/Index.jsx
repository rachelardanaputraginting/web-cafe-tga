import React from 'react';
import { Head } from '@inertiajs/react';
import App from '@/Layouts/App';
import Container from '@/Components/Container';
import Header from '@/Components/Header';
import Navbar from '@/Layouts/Navbar';
import ProductItem from '@/Components/ProductItem';
import Pagination from '@/Components/Pagination';

export default function Index(props) {
    const { data: products, meta, links } = props.products;
    return (
        <>
            <Head title="Our Products" />
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
                {/* {products.length ? */}
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-10 gap-4'>
                    {
                        products.map(product => (
                            <ProductItem product={product} key={product.id}></ProductItem>
                        ))
                    }
                </div>
                {/* : null} */}
            </Container>
            <Pagination meta={meta} links={links} />
        </>
    );
}

Index.layout = page => <App children={page} />
