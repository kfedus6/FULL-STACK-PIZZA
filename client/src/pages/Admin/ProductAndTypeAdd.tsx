import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { fetchCreateProduct, fetchTypeProduct } from '../../store/reducers/ActionCreators'

import './admin.css'

const ProductAndTypeAdd = () => {
    const [type, setType] = useState<any>('')
    const [typeId, setTypeId] = useState<any>()
    const [title, setTitle] = useState<any>('')
    const [description, setDescriprion] = useState<any>('')
    const [price, setPrice] = useState<any>('')
    const [img, setImg] = useState<any>('')

    const { t }: any = useTranslation()
    const navigate = useNavigate()

    const { types }: any = useAppSelector(state => state.TypeProductSlice)
    const dispatch = useAppDispatch()

    const createPizza = async () => {
        const formData = new FormData()
        formData.append('title', title)
        formData.append('description', description)
        formData.append('price', price)
        formData.append('img', img[0])
        formData.append('typeId', typeId)
        await dispatch(fetchCreateProduct(formData))
        setTitle('')
        setDescriprion('')
        setPrice('')
        setTypeId('')
        setImg('')
        navigate(-1)
    }

    const createType = async () => {
        await dispatch(fetchTypeProduct(type))
        setType('')
    }

    return (
        <section className='section-admin'>
            <div className='container-admin'>
                <div className='admin-block'>
                    <div className='admin-form'>
                        <span className='admin-title'>{t('admin.title_pizza')}</span>
                        <div className='admin-select'>
                            <select onChange={(e) => setTypeId(e.target.value)}>
                                <option defaultValue="Type">{t('admin.input_type')}</option>
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
                            <label className='admin-label' htmlFor='admin-firts'>{t('admin.input_title')}</label>
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
                            <label className='admin-label' htmlFor='admin-second'>{t('admin.input_description')}</label>
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
                            <label className='admin-label' htmlFor='admin-third'>{t('admin.input_price')}</label>
                        </div>
                        <div className='admin-button admin-btn'>
                            <button onClick={createPizza}>{t('admin.btn_create')}</button>
                        </div>
                    </div>
                    <div className='admin-form-type'>
                        <span className='admin-title'>{t('admin.input_type')}</span>
                        <div className='admin-form-input'>
                            <input
                                id='admin-fifth'
                                className='admin-text'
                                placeholder=' '
                                type="text"
                                value={type}
                                onChange={(e) => setType(e.target.value)}
                            />
                            <label className='admin-label' htmlFor='admin-fifth'>{t('admin.input_type')}</label>
                        </div>
                        <div className='admin-btn'>
                            <button onClick={createType}>{t('admin.btn_create')}</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductAndTypeAdd