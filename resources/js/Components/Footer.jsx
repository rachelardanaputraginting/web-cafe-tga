import ApplicationLogo from '@/Components/ApplicationLogo';
import Container from '@/Components/Container';
import React from 'react';

export default function Footer() {
    return (
        <div className="border-t border-teal-800 bg-primary py-10 mt-8 md:mt-16">
            <Container>
                <div className="max-w-2xl mx-auto text-center">
                    <ApplicationLogo className="fill-white text-center w-16 h-16 mx-auto" />
                    <p className="mt-5 text-gray-300">
                        Terima kasih telah memilih QR Cafe sebagai tempat Anda untuk menikmati hidangan lezat dan pengalaman kafe yang tak terlupakan. Kami sangat menghargai dukungan Anda dan komitmen kami adalah memberikan kualitas terbaik serta kepuasan pelanggan yang tak ternilai. Kami berharap Anda menikmati waktu berharga di sini, dan selalu siap menyambut kedatangan Anda dengan senyum dan keramahan. Terima kasih atas kepercayaan Anda dan semoga QR Cafe menjadi destinasi favorit Anda untuk menikmati makanan, minuman, dan momen istimewa.
                    </p>
                    <p className="font-mono text-sm text-gray-400 mt-10 max-w-lg mx-auto">
                        Designed and built with all the love in the world by the{' '}
                        <strong className="font-semibold text-white">
                            {import.meta.env.VITE_APP_NAME}
                        </strong>{' '}
                        team with the help of our author.
                    </p>

                    <p className='mt-8 text-gray-400 font-mono text-xs'>Copyright {new Date().getFullYear()} All right reserved.</p>
                </div>
            </Container>
        </div>
    );
}
