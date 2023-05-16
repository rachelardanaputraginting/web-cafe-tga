import React from 'react'

export default function Container({ children }) {
    return (
        <div className='max-w-screen-xl flex flex-wrap items-center  mx-auto p-4'>{children}</div>
    )
}
