import React from 'react';
import { Head, Link } from '@inertiajs/react';
import App from '@/Layouts/App';
import Container from '@/Components/Container';
import { numberFormat } from '@/Libs/Helper';
import Button from '@/Components/Button';

export default function Show({ product }) {
    return (
        <>
            <Head title="Show" />
            <Container>
                <div className="flex gap-10 w-full mt-44">
                    <div className="w-1/3">
                        <img className='w-full rounded-lg' src={product.picture} alt="" />
                    </div>
                    <div className="w-2/3 min-h-auto flex flex-col justify-start">
                        <div>
                            <Link className='text-xs font-semibold px-2 py-1 w-auto bg-blue-500 text-white rounded' href={`/products?category=${product.category.slug}`}>{product.category.name}</Link>
                        </div>
                        <h1 className='text-3xl font-semibold'>{product.name}</h1>
                        <div className='leading-relaxed text-gray-500 my-4'>{product.description} </div>
                        <div className='font-semibold text-4xl'><sup>Rp</sup> {numberFormat(product.price)}</div>

                        <Link href='/products' className='mt-20 block max-w-auto underline text-secondary'>Back</Link>
                    </div>
                </div>
            </Container>
        </>
    );
}

Show.layout = page => <App children={page} />
