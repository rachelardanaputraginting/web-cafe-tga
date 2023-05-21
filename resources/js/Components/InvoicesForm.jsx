import React from 'react'
import InputLabel from './InputLabel'
import Error from './Error'
import Textarea from './Textarea'
import Select from './Select'
import InputFile from './InputFile'
import { usePage } from '@inertiajs/react'
import Input from './Input'

export default function InvoicesForm({ data, setData }) {
    const { errors, tables } = usePage().props;

    return (
        <>
            <div className="mb-6 mt-4">
                <InputLabel htmlFor='category_id' value="Choose your Table" />
                <Select value={data.id} data={tables} onChange={(e) => setData('id', e)} />
                {errors.id ? <Error className='' value={errors.id} /> : null}
            </div>

        </>
    )
}
