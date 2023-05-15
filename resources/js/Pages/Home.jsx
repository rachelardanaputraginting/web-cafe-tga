import React from 'react';
import { Head } from '@inertiajs/react';
import App from '@/Layouts/App';

export default function Home(props) {
    return (
        <>
            <Head title="Home" />
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
            <h1>Hello</h1>
        </>
    );
}

Home.layout = page => <App children={page} />
