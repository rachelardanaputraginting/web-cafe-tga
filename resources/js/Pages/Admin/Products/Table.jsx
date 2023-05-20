import Container from '@/Components/Container';
import NavLink from '@/Components/NavLink';
import Pagination from '@/Components/Pagination';
import Table from '@/Components/Table';
import useSwal from '@/Hooks/useSwal';
import App from '@/Layouts/App';
import { numberFormat } from '@/Libs/Helper';
import { Head, Link, usePage } from '@inertiajs/react';
import React from 'react'

export default function ProductTable(props) {
    const { auth } = usePage().props;
    const { data: products, meta, links } = props.products;
    const { ask } = useSwal();

    return (
        <Container>
            <Head title='Table' />
            <div className="flex text-secondary mt-48 gap-5 items-center">
                <div><Link href={`/admin/products/create`} className='inline-flex items-center gap-3 text-center justify-center px-4 py-2 bg-primary border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest active:bg-primary transition ease-in-out duration-150'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
                    Add</Link></div>
                <div><Link href={`/admin/products/qrcode`} target="_blank" className='inline-flex gap-3 items-center text-center justify-center px-4 py-2 bg-secondary border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest active:bg-secondary transition ease-in-out duration-150'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 6.75h.75v.75h-.75v-.75zM6.75 16.5h.75v.75h-.75v-.75zM16.5 6.75h.75v.75h-.75v-.75zM13.5 13.5h.75v.75h-.75v-.75zM13.5 19.5h.75v.75h-.75v-.75zM19.5 13.5h.75v.75h-.75v-.75zM19.5 19.5h.75v.75h-.75v-.75zM16.5 16.5h.75v.75h-.75v-.75z" />
                </svg>
                    Generate QR Code</Link></div>
            </div>
            <Table className='w-full'>
                <Table.Thead>
                    <tr>
                        <Table.Th>#</Table.Th>
                        <Table.Th>Picture</Table.Th>
                        <Table.Th>Name</Table.Th>
                        <Table.Th>Price</Table.Th>
                        <Table.Th>Category</Table.Th>
                        <Table.Th>Description</Table.Th>
                        <Table.Th>Action</Table.Th>
                    </tr>
                </Table.Thead>
                <Table.Tbody>
                    {products.length ?
                        products.map((product, i) => (
                            <tr key={product.id}>
                                <Table.Td>{meta.from + i}</Table.Td>
                                <Table.Td>
                                    <div>
                                        <img src={product.picture} alt="" width={`50`} className='rounded' />
                                    </div>
                                </Table.Td>
                                <Table.Td>
                                    <div>{product.name}</div>
                                </Table.Td>
                                <Table.Td>
                                    <div>Rp. {numberFormat(product.price)}</div>
                                </Table.Td>
                                <Table.Td>
                                    <Link href={product.category.url}>{product.category.name}</Link>
                                </Table.Td>
                                <Table.Td>
                                    <div>{product.description}</div>
                                </Table.Td>
                                <Table.Td>
                                    <Table.Dropdown>
                                        <Table.DropdownItem href={route('products.show', product.slug)}>View</Table.DropdownItem>
                                        <Table.DropdownItem href={route('admin.products.edit', product.slug)}>Edit</Table.DropdownItem>
                                        <Table.DropdownButton onClick={() => {
                                            ask({
                                                url: route('admin.products.destroy', product.slug),
                                                method: "delete",
                                                message: "You sure you want to delete it?"
                                            })
                                        }} className='hover:bg-rose-50 hover:text-rose-500'>Delete</Table.DropdownButton>
                                    </Table.Dropdown>
                                </Table.Td>
                            </tr>
                        ))
                        :
                        <tr>
                            <Table.Td>
                                <p>You don't have products yet.</p>
                            </Table.Td>
                        </tr>
                    }
                </Table.Tbody>
            </Table>
            <Pagination {...{ meta, links }} />
        </Container >
    )
}

ProductTable.layout = page => <App children={page} />
