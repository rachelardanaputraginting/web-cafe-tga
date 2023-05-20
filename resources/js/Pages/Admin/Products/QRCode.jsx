import Container from '@/Components/Container';
import Grid from '@/Components/Grid';
import { numberFormat } from '@/Libs/Helper';
import { Head } from '@inertiajs/react';
import React from 'react';

const QRCode = ({ qrCodes, names }) => {
    return (
        <>
            <Head title="Generate QR Code"></Head>
            <Container>
                <div className='flex flex-nowrap w-full bg-white flex-row justify-start mt-8'>
                    <div className='w-1/2 flex flex-col justify-between'>
                        {qrCodes.map((qrCode, index) => (
                            <div key={index} className='w-full mx-auto flex flex-col h-52'>
                                <div className='mx-auto flex justify-center w-full' dangerouslySetInnerHTML={{ __html: qrCode }} />
                            </div>
                        ))}
                    </div>
                    <div className='w-1/2 flex flex-col justify-start '>
                        {names.map((item, index) => (
                            <div key={index} className='w-full flex flex-col mx-auto h-52'>
                                <h3 className='text-primary font-semibold text-2xl'>{item.name}</h3>
                                <p className='font-light text-base line-clamp-1'>{item.description}</p>
                                <p className='text-secondary font-semibold text-2xl mt-2'><sup>Rp. </sup>{numberFormat(item.price)}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
            <h1 className='text-3xl text-center text-primary my-12 font-semibold font-mono'>## QR Code Products ##</h1>

        </ >
    );
};

export default QRCode;
