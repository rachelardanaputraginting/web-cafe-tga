import clsx from 'clsx'
import React from 'react'

export default function Container({ children, className }) {
    return (
        <div className={clsx('max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4', className)}>{children}</div>
    )
}
