import Container from '@/Components/Container';
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
            <div className="flex text-secondary mt-48 gap-4 items-center">
                <div><Link href={`/admin/products/create`} className='inline-flex items-center text-center justify-center px-4 py-2 bg-gray-900 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest active:bg-gray-900 transition ease-in-out duration-150'>Add</Link></div>
                <div><Link href={`/admin/products/qrcode`} className='inline-flex items-center text-center justify-center px-4 py-2 bg-gray-900 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest active:bg-gray-900 transition ease-in-out duration-150'>Generate QR Code</Link></div>
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
                                        <Table.DropdownItem href={route('admin.products.show', product.slug)}>View</Table.DropdownItem>
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
