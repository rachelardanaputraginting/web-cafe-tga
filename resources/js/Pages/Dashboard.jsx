import React from 'react';
import { Head } from '@inertiajs/react';
import App from '@/Layouts/App';

export default function Home(props) {
    return (
        <>
            <Head title="Home" />
            <h1>Hello</h1>
        </>
    );
}

Home.layout = page => <App children={page} />
