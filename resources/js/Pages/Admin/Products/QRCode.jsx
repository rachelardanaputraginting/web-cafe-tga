import Container from '@/Components/Container';
import Grid from '@/Components/Grid';
import { numberFormat } from '@/Libs/Helper';
import { Head } from '@inertiajs/react';
import React from 'react';

const QRCode = ({ qrCodes, names }) => {
    return (
        <div>
            <Head title="Generate QR Code"></Head>
            <Container>
                <div className='flex flex-nowrap w-full bg-white flex-row justify-start'>
                    <div className='w-1/2 flex flex-col justify-between'>
                        {qrCodes.map((qrCode, index) => (
                            <div key={index} className='w-full mx-auto flex flex-col'>
                                <div className='mx-auto flex justify-center w-full my-4' dangerouslySetInnerHTML={{ __html: qrCode }} />
                            </div>
                        ))}
                    </div>
                    <div className='w-1/2 flex flex-col justify-between'>
                        {names.map((item, index) => (
                            <div key={index} className='w-full flex flex-col mx-auto'>
                                <h3 className='text-primary font-semibold text-2xl'>{item.name}</h3>
                                <p className='font-light text-base'>{item.description}</p>
                                <p className=' text-secondary font-semibold text-2xl'><sup>Rp. </sup>{numberFormat(item.price)}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
            <h1 className='text-3xl text-center text-primary my-12 font-semibold font-mono'>## QR Code Products ##</h1>

        </div >
    );
};

export default QRCode;
