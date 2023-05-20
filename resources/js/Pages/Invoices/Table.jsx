import Container from '@/Components/Container';
import Pagination from '@/Components/Pagination';
import Table from '@/Components/Table';
import App from '@/Layouts/App';
import { numberFormat } from '@/Libs/Helper';
import { Head, usePage } from '@inertiajs/react';
import React from 'react'

export default function Invoice(props) {
    const { data: invoices, meta, links } = props.invoices;
    console.log(invoices);
    return (
        <>
            <Head title="Your history" />
            <Container>
                <Head title='Table' />
                <h2 className='mt-52 font-semibold text-lg'>Your history</h2>
                <Table className='w-full'>
                    <Table.Thead>
                        <tr>
                            <Table.Th>#</Table.Th>
                            <Table.Th>Name</Table.Th>
                            <Table.Th>Order ID</Table.Th>
                            <Table.Th>Cart IDS</Table.Th>
                            <Table.Th>Total Price</Table.Th>
                            <Table.Th className="text-center">Status</Table.Th>
                            <Table.Th>Date</Table.Th>
                        </tr>
                    </Table.Thead>
                    <Table.Tbody>
                        {invoices.length ?
                            invoices.map((invoice, i) => (
                                <tr key={invoice.id}>
                                    <Table.Td>{meta.from + i}</Table.Td>
                                    <Table.Td>
                                        <div>{invoice.name}</div>
                                    </Table.Td>
                                    <Table.Td>
                                        <div>{invoice.order_id}</div>
                                    </Table.Td>
                                    <Table.Td>
                                        <div>{invoice.card_ids}</div>
                                    </Table.Td>
                                    <Table.Td>
                                        <div>Rp. {numberFormat(invoice.total_price)}</div>
                                    </Table.Td>
                                    <Table.Td className='text-center'>
                                        {invoice.status != 1 ? <span className='px-4 py-1.5  text-sm bg-secondary text-white inline-block rounded-lg hover:bg-primary'>Paid</span> : <span className='px-2 py-2 bg-secondary text-white inline-block'>Not yed paid</span>}
                                    </Table.Td>
                                    <Table.Td>
                                        <div className='text-primary'>{invoice.succeeded_at}</div>
                                    </Table.Td>
                                </tr>
                            ))
                            :
                            <tr>
                                <td colSpan={7}>
                                    <p className='text-center mt-5'>You don't have invoices yet.</p>
                                </td>
                            </tr>
                        }
                    </Table.Tbody>
                </Table>
                <Pagination {...{ meta, links }} />
            </Container >
        </>
    );
}

Invoice.layout = page => <App children={page} />
