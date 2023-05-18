import Container from '@/Components/Container';
import Pagination from '@/Components/Pagination';
import Table from '@/Components/Table';
import useSwal from '@/Hooks/useSwal';
import App from '@/Layouts/App';
import { Head, Link } from '@inertiajs/react';
import React from 'react'

export default function ProductTable(props) {
    const { data: products, meta, links } = props.products;
    const { ask } = useSwal();
    return (
        <Container>
            <Head title='Table' />
            <Table>
                <Table.Thead>
                    <tr>
                        <Table.Th>#</Table.Th>
                        <Table.Th>Picture</Table.Th>
                        <Table.Th>Name</Table.Th>
                        <Table.Th>Price</Table.Th>
                        <Table.Th>Quantity</Table.Th>
                        <Table.Th>Category</Table.Th>
                        <Table.Th>Description</Table.Th>
                        <th></th>
                    </tr>
                </Table.Thead>
                <Table.Tbody>
                    {products.length ?
                        products.map((product, i) => (
                            <tr key={product.id}>
                                <Table.Td>{meta.from + i}</Table.Td>
                                <Table.Td>
                                    <Link href={product.url}>{product.title}</Link>
                                </Table.Td>
                                <Table.Td>
                                    <Link href={product.category.url}>{product.category.name}</Link>
                                </Table.Td>
                                {/* <Table.Td>
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
                                </Table.Td> */}
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
