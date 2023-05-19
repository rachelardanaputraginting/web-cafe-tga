import Button from '@/Components/Button'
import Container from '@/Components/Container'
import Header from '@/Components/Header'
import App from '@/Layouts/App'
import { Head, useForm } from '@inertiajs/react'
import React from 'react'
import { Inertia } from '@inertiajs/inertia'
import ProductForm from '@/Components/ProductForm'
// npm install @inertiajs/inertia @inertiajs/inertia-react --save

export default function Edit({ product }) {
    const { data, setData, put } = useForm({
        name: product.name,
        price: product.price,
        category_id: product.category,
        description: product.description,
        picture: '',
    })


    const onSubmit = (e) => {
        e.preventDefault();
        put(route('admin.products.update', product.slug), {
            ...data,
            category_id: data.category_id.id,
        }, {
            onSuccess: () => toast.success('Product has been updated!')
        })
    }

    return (
        <div>
            <Head title={`Update Product ${product.title}`} />

            <Header>
                <Header.Title>{data.name || 'The title..'}</Header.Title>
                <Header.Subtitle>{data.description || 'The teaser..'}</Header.Subtitle>
            </Header>
            <Container>
                <form onSubmit={onSubmit} className='w-full'>
                    <ProductForm {...{ data, setData }} />
                    <Button>Update</Button>
                </form>
            </Container>
        </div>
    )
}

Edit.layout = page => <App children={page} />
