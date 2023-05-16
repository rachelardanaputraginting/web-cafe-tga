import React from 'react'
import { Link } from '@inertiajs/react'
import { numberFormat } from '@/Libs/helper'

export default function ProductItem({ product }) {
    return (
        <div className='mb-4'>
            <Link href={`/products/${product.slug}`}>
                <div className="relative">
                    <Link className='absolute px-2 py-1.5 bg-secondary left-0 top-0 rounded-tr-lg rounded-bl-lg text-white text-sm' href={`/products?category=${product.category.slug}`}>{product.category.name}</Link>
                    <img className='w-full rounded-lg' src={product.picture} alt="" />
                </div>
            </Link>
            <div className="mt-4">
                <Link className=' block-mb-2 line-clamp-1' href={`/products/${product.slug}`}>{product.name}</Link>
                <div className="flex items-center justify-end my-3">
                    <div className='font-semibold text-third'><sup>Rp.</sup> {numberFormat(product.price)}</div>
                </div>
            </div>
        </div>
    )
}
