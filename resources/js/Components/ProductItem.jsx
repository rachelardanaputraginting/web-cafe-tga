import React from 'react'
import { Link, useForm } from '@inertiajs/react'
import { numberFormat } from '@/Libs/helper'
import Button from './Button';
import { toast } from 'react-hot-toast';

export default function ProductItem({ product }) {
    const { post } = useForm()
    const addToCart = () => {
        post(route('cart.store', product), {
            onSuccess: () => toast.success('Added to cart'),
        });
    }
    return (
        <div className='mb-4 relative hover:scale-[102%] transition duration-300'>
            <Link href={`/products/${product.slug}`}>
                <img className='w-full rounded-lg' src={product.picture} alt="" />
            </Link>
            <div className="mt-4">
                <Link className=' block-mb-2 line-clamp-1' href={`/products/${product.slug}`}>{product.name}</Link>
                <Link className='absolute px-2 py-1.5 bg-secondary left-0 top-0 rounded-tr-lg rounded-bl-lg text-white text-sm' href={`/products?category=${product.category.slug}`}>{product.category.name}</Link>
                <div className="flex items-center justify-end my-3">
                    <div className='font-semibold text-lg text-third'><sup>Rp.</sup> {numberFormat(product.price)}</div>
                </div>

                <Button href='/invoice' onClick={addToCart} className='items-center gap-2 bg-primary -mt-2 w-full'>Add to cart
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                    </svg>

                </Button>

            </div>
        </div>
    )
}
