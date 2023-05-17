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
                        <div className='leading-relaxed text-gray-500 my-4'>{product.description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat accusantium odio necessitatibus incidunt ipsum deserunt pariatur mollitia illum qui reprehenderit. Excepturi delectus odit porro necessitatibus rem eligendi minima modi eos, doloremque, soluta temporibus aliquam animi similique dicta neque nostrum recusandae asperiores molestias in illum non totam distinctio? Ut laborum magnam quidem accusamus neque. Officia doloremque saepe eius nostrum, officiis repellendus, dolores id esse accusantium qui soluta, iure itaque fugiat deleniti. Ex dolorum rerum inventore, et harum expedita quas nostrum laboriosam neque aut officiis assumenda iure facere labore maxime deserunt officia asperiores nesciunt id a fuga sed eum hic animi! Reiciendis? </div>
                        <div className='font-semibold text-4xl'><sup>Rp</sup> {numberFormat(product.price)}</div>

                        <Button className='mt-20'>Add to cart</Button>
                    </div>
                </div>
            </Container>
        </>
    );
}

Show.layout = page => <App children={page} />
