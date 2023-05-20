import Container from '@/Components/Container';
import Grid from '@/Components/Grid';
import React from 'react';

const QRCode = ({ qrCodes }) => {
    console.log(qrCodes);
    return (
        <div>
            <Container>
                <Grid className='w-full bg-white gap-10 grid-cols-3'>
                    {qrCodes.map((qrCode, index) => (
                        <div key={index} className='w-full'>
                            <div className='w-full mb-10 mx-auto' dangerouslySetInnerHTML={{ __html: qrCode }} />
                        </div>
                    ))}
                </Grid>
            </Container>
        </div>
    );
};

export default QRCode;
