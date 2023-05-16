import React from 'react';
import { Head } from '@inertiajs/react';
import App from '@/Layouts/App';
import Header from '@/Components/Header';
import DialogCart from '@/Components/Dialog';

export default function Dashboard() {
    return (
        <>
            <Head title="Dashboard" />
            <Header>
                <Header.Title>
                    Consectetur
                </Header.Title>
                <Header.Subtitle>
                    Lorem ipsum, dolor sit amet consectetur adipisicing.
                </Header.Subtitle>
                <Header.Content>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis esse similique aperiam illo quidem fugiat eligendi, labore iure numquam rerum, vero ea et obcaecati maiores! Sit neque pariatur eos sequi.
                </Header.Content>
            </Header>
            <DialogCart>
                <DialogCart.Title title='Hello' />
            </DialogCart>
        </>
    );
}

Dashboard.layout = page => <App children={page} />
