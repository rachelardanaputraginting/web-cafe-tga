import React from 'react';
import { Head, useForm } from '@inertiajs/react';
import App from '@/Layouts/App';
import Header from '@/Components/Header';
import Container from '@/Components/Container';
import Button from '@/Components/Button';
import { Inertia } from '@inertiajs/inertia'
import ProductForm from '@/Components/ProductForm';

export default function Products() {

    const { data, setData } = useForm({
        name: '',
        price: '',
        quantity: '',
        teaser: '',
        category_id: '',
        body: '',
        picture: '',
    })


    const onSubmit = (e) => {
        e.preventDefault();
        Inertia.post(route('admin.products.store'), {
            ...data,
            category_id: data.category_id.id,
        })
    }
    return (
        <>
            <Head title="Create new products" />
            <Header>
                <Header.Title>
                    Create new product
                </Header.Title>
                <Header.Subtitle>
                    Lorem ipsum, dolor sit amet consectetur adipisicing.
                </Header.Subtitle>
                <Header.Content>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis esse similique aperiam illo quidem fugiat eligendi, labore iure numquam rerum, vero ea et obcaecati maiores! Sit neque pariatur eos sequi.
                </Header.Content>
            </Header>
            <Container>
                <form onSubmit={onSubmit} className='w-full'>
                    <ProductForm {...{ data, setData }} />
                    <Button>Create</Button>
                </form>
            </Container>
        </>
    );
}

Products.layout = page => <App children={page} />
