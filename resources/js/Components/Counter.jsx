import React from 'react'
import { useState } from 'react';
import Button from './Button';


export default function Counter({ initialValue }) {
    const [count, setCount] = useState(initialValue);
    function Increment() {
        setCount((prevSate) => prevSate + 1);
    }

    function Decrement() {
        setCount((prevSate) => prevSate - 1);
    }
    return (
        <div className='flex justify-center items-center gap-4'>
            <Button onClick={Decrement}>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                </div>
            </Button>
            <h1 className='text-5xl font-semibold'>{count}</h1>
            <Button onClick={Increment}>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                    </svg>
                </div>
            </Button>
        </div>
    );
}
