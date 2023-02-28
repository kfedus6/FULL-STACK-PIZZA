import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { fetchCreateProduct } from '../../store/reducers/ActionCreators'

import './admin.css'

const ProductAndTypeAdd = () => {
    const [type, setType] = useState<any>('')
    const [typeId, setTypeId] = useState<any>()
    const [title, setTitle] = useState<any>('')
    const [description, setDescriprion] = useState<any>('')
    const [price, setPrice] = useState<any>('')
    const [img, setImg] = useState<any>('')
    const [size, setSize] = useState<any>('')
    const [info, setInfo] = useState<any>([])

    const { types }: any = useAppSelector(state => state.TypeProductSlice)
    const dispatch = useAppDispatch()

    const pushSize = () => {
        setInfo([...info, { size: size }])
        setSize(' ')
    }

    const createPizza = async () => {
        const formData = new FormData()
        formData.append('title', title)
        formData.append('description', description)
        formData.append('price', price)
        formData.append('img', img[0])
        formData.append('typeId', typeId)
        formData.append('info', JSON.stringify(info))
        await dispatch(fetchCreateProduct(formData))
        setTitle('')
        setDescriprion('')
        setPrice('')
        setTypeId('')
        setImg('')
    }

    return (
        <section className='section-admin'>
            <div className='container-admin'>
                <div className='admin-block'>
                    <div className='admin-form'>
                        <span className='admin-title'>Pizza</span>
                        <div className='admin-select'>
                            <select onChange={(e) => setTypeId(e.target.value)}>
                                <option defaultValue="Type">Type</option>
                                {types.map((item: any) => {
                                    return (
                                        <option key={item._id} value={item._id}>{item.type}</option>
                                    )
                                })}
                            </select>
                        </div>
                        <div className='admin-form-input'>
                            <input
                                className='admin-text'
                                type="file"
                                onChange={(e) => setImg(e.target.files)}
                            />
                        </div>
                        <div className='admin-form-input'>
                            <input
                                id='admin-first'
                                className='admin-text'
                                placeholder=' '
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                            <label className='admin-label' htmlFor='admin-firts'>Title</label>
                        </div>
                        <div className='admin-form-input'>
                            <input
                                id='admin-second'
                                className='admin-text'
                                placeholder=' '
                                type="text"
                                value={description}
                                onChange={(e) => setDescriprion(e.target.value)}
                            />
                            <label className='admin-label' htmlFor='admin-second'>Description</label>
                        </div>
                        <div className='admin-form-input'>
                            <input
                                id='admin-third'
                                className='admin-text'
                                placeholder=' '
                                type="text"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                            />
                            <label className='admin-label' htmlFor='admin-third'>Price</label>
                        </div>
                        <div className='admin-form-size'>
                            <span className='admin-title'>Size</span>
                            <div className='admin-form-input'>
                                <input
                                    id='admin-fourth'
                                    className='admin-text'
                                    placeholder=' '
                                    type="text"
                                    value={size}
                                    onChange={(e) => setSize(e.target.value)}
                                />
                                <label className='admin-label' htmlFor='admin-fourth'>Size</label>
                            </div>
                            <div className='admin-btn-size'>
                                <button onClick={pushSize}>add</button>
                            </div>
                        </div>
                        <div className='admin-button admin-btn'>
                            <button onClick={createPizza}>send</button>
                        </div>
                    </div>
                    <div className='admin-form-type'>
                        <span className='admin-title'>Type</span>
                        <div className='admin-form-input'>
                            <input
                                id='admin-fifth'
                                className='admin-text'
                                placeholder=' '
                                type="text"
                                value={type}
                                onChange={(e) => setType(e.target.value)}
                            />
                            <label className='admin-label' htmlFor='admin-fifth'>Type</label>
                        </div>
                        <div className='admin-btn'>
                            <button>send</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductAndTypeAdd