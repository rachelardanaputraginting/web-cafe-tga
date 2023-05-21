import Container from '@/Components/Container';
import NavLink from '@/Components/NavLink';
import Pagination from '@/Components/Pagination';
import Table from '@/Components/Table';
import App from '@/Layouts/App';
import { numberFormat } from '@/Libs/Helper';
import { Head, useForm } from '@inertiajs/react';
import React from 'react'
import { toast } from 'react-hot-toast';

export default function Invoice(props) {
    const { data: invoices, meta, links } = props.invoices;
    const { put } = useForm()

    const onUpdateHandler = (id) => {
        put(route('invoice.update', id), {
            onSuccess: () => {
                toast.success('Completed')
            }
        })
    }
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
                            <Table.Th>Table ID</Table.Th>
                            <Table.Th>Name</Table.Th>
                            <Table.Th>Order ID</Table.Th>
                            <Table.Th>Total Price</Table.Th>
                            <Table.Th className="text-center">Status</Table.Th>
                            <Table.Th>Date</Table.Th>
                            <Table.Th>Action</Table.Th>
                        </tr>
                    </Table.Thead>
                    <Table.Tbody>
                        {invoices.length ?
                            invoices.map((invoice, i) => (
                                <tr key={invoice.id}>
                                    <Table.Td>{meta.from + i}</Table.Td>
                                    <Table.Td>
                                        <div>Table-{invoice.table_id}</div>
                                    </Table.Td>
                                    <Table.Td>
                                        <div>{invoice.user_id}</div>
                                    </Table.Td>
                                    <Table.Td>
                                        <div>{invoice.order_id}</div>
                                    </Table.Td>
                                    <Table.Td>
                                        <div>Rp. {numberFormat(invoice.total_price)}</div>
                                    </Table.Td>
                                    <Table.Td className='text-center'>
                                        {invoice.status == 1 ? <span className='px-4 py-1.5  text-sm bg-secondary text-white inline-block rounded-lg hover:bg-primary'>Completed</span> : <span className='px-4 py-1.5  text-sm bg-red-400 text-white inline-block rounded-lg hover:bg-red-500'>Not Completed</span>}
                                    </Table.Td>
                                    <Table.Td>
                                        <div className='text-primary'>{invoice.succeeded_at}</div>
                                    </Table.Td>
                                    <Table.Td>
                                        {invoice.status == 1 ? <button className='focus:outline-none inline text-green-500'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
                                        </svg></button>
                                            : <button onClick={() => onUpdateHandler(invoice)} className='focus:outline-none inline text-green-500'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                                            </svg>
                                            </button>}

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
