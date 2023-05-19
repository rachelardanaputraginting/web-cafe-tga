import React from 'react'
import InputLabel from './InputLabel'
import Error from './Error'
import Textarea from './Textarea'
import Select from './Select'
import InputFile from './InputFile'
import { usePage } from '@inertiajs/react'
import Input from './Input'

export default function ProductForm({ data, setData }) {
    const { errors, categories } = usePage().props;

    const onChange = (e) => {
        setData(e.target.name, e.target.value)
    }
    return (
        <>
            <div className="mb-6">
                <InputLabel htmlFor="picture" value="Picture" />
                <InputFile name='picture' id='picture' onChange={(e) => setData('picture', e.target.files[0])} />
                {errors.picture ? <Error className='' value={errors.picture} /> : null}
            </div>
            <div className="mb-6">
                <InputLabel htmlFor='category_id' value="Category" />
                <Select value={data.category_id} data={categories} onChange={(e) => setData('category_id', e)} />
                {errors.category_id ? <Error className='' value={errors.category_id} /> : null}
            </div>
            <div className="mb-6">
                <InputLabel htmlFor="name" value="Name" />
                <Input name='name' id='name' onChange={onChange} value={data.name} />
                {errors.name ? <Error className='' value={errors.name} /> : null}
            </div>
            <div className="mb-6">
                <InputLabel htmlFor="price" value="Price" />
                <Input name='price' id='price' onChange={onChange} value={data.price} />
                {errors.price ? <Error className='' value={errors.price} /> : null}
            </div>
            <div className="mb-6">
                <InputLabel htmlFor="description" value="Description" />
                <Textarea name='description' id='description' onChange={onChange} value={data.description} />
                {errors.description ? <Error className='' value={errors.description} /> : null}
            </div>
        </>
    )
}
