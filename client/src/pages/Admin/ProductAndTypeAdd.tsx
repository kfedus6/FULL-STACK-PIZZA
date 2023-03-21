import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { fetchCreateProduct, fetchTypeProduct } from '../../store/reducers/ActionCreators'
import { TypeProductState } from '../../store/reducers/TypeProductSlice'

import './admin.css'

const ProductAndTypeAdd = () => {
    const [type, setType] = useState<string>('')
    const [typeId, setTypeId] = useState<any>()
    const [title, setTitle] = useState<string>('')
    const [description, setDescriprion] = useState<string>('')
    const [priceFirst, setPriceFirst] = useState<string>('')
    const [priceSecond, setPriceSecond] = useState<string>('')
    const [priceThird, setPriceThird] = useState<string>('')
    const [sizeFirst, setSizeFirst] = useState<string>('')
    const [sizeSecond, setSizeSecond] = useState<string>('')
    const [sizeThird, setSizeThird] = useState<string>('')
    const [weightFirst, setWeightFirst] = useState<string>('')
    const [weightSecond, setWeightSecond] = useState<string>('')
    const [weightThird, setWeightThird] = useState<string>('')
    const [img, setImg] = useState<any>('')

    const { t }: any = useTranslation()
    const navigate = useNavigate()

    const { types }: TypeProductState = useAppSelector(state => state.TypeProductSlice)
    const dispatch = useAppDispatch()

    const createPizza = async () => {
        const formData = new FormData()
        formData.append('title', title)
        formData.append('description', description)
        formData.append('priceFirst', priceFirst)
        formData.append('priceSecond', priceSecond)
        formData.append('priceThird', priceThird)
        formData.append('sizeFirst', sizeFirst)
        formData.append('sizeSecond', sizeSecond)
        formData.append('sizeThird', sizeThird)
        formData.append('weightFirst', weightFirst)
        formData.append('weightSecond', weightSecond)
        formData.append('weightThird', weightThird)
        formData.append('img', img[0])
        formData.append('typeId', typeId)
        await dispatch(fetchCreateProduct(formData))
        setTitle('')
        setDescriprion('')
        setPriceFirst('')
        setPriceSecond('')
        setPriceThird('')
        setSizeFirst('')
        setSizeSecond('')
        setSizeThird('')
        setWeightFirst('')
        setWeightSecond('')
        setWeightThird('')
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
                                value={priceFirst}
                                onChange={(e) => setPriceFirst(e.target.value)}
                            />
                            <label className='admin-label' htmlFor='admin-third'>{t('admin.input_price_first')}</label>
                        </div>
                        <div className='admin-form-input'>
                            <input
                                id='admin-third'
                                className='admin-text'
                                placeholder=' '
                                type="text"
                                value={priceSecond}
                                onChange={(e) => setPriceSecond(e.target.value)}
                            />
                            <label className='admin-label' htmlFor='admin-third'>{t('admin.input_price_second')}</label>
                        </div>
                        <div className='admin-form-input'>
                            <input
                                id='admin-third'
                                className='admin-text'
                                placeholder=' '
                                type="text"
                                value={priceThird}
                                onChange={(e) => setPriceThird(e.target.value)}
                            />
                            <label className='admin-label' htmlFor='admin-third'>{t('admin.input_price_third')}</label>
                        </div>
                        <div className='admin-form-input'>
                            <input
                                id='admin-third'
                                className='admin-text'
                                placeholder=' '
                                type="text"
                                value={sizeFirst}
                                onChange={(e) => setSizeFirst(e.target.value)}
                            />
                            <label className='admin-label' htmlFor='admin-third'>{t('admin.input_size_first')}</label>
                        </div>
                        <div className='admin-form-input'>
                            <input
                                id='admin-third'
                                className='admin-text'
                                placeholder=' '
                                type="text"
                                value={sizeSecond}
                                onChange={(e) => setSizeSecond(e.target.value)}
                            />
                            <label className='admin-label' htmlFor='admin-third'>{t('admin.input_size_second')}</label>
                        </div>
                        <div className='admin-form-input'>
                            <input
                                id='admin-third'
                                className='admin-text'
                                placeholder=' '
                                type="text"
                                value={sizeThird}
                                onChange={(e) => setSizeThird(e.target.value)}
                            />
                            <label className='admin-label' htmlFor='admin-third'>{t('admin.input_size_third')}</label>
                        </div>
                        <div className='admin-form-input'>
                            <input
                                id='admin-third'
                                className='admin-text'
                                placeholder=' '
                                type="text"
                                value={weightFirst}
                                onChange={(e) => setWeightFirst(e.target.value)}
                            />
                            <label className='admin-label' htmlFor='admin-third'>{t('admin.input_weight_first')}</label>
                        </div>
                        <div className='admin-form-input'>
                            <input
                                id='admin-third'
                                className='admin-text'
                                placeholder=' '
                                type="text"
                                value={weightSecond}
                                onChange={(e) => setWeightSecond(e.target.value)}
                            />
                            <label className='admin-label' htmlFor='admin-third'>{t('admin.input_weight_second')}</label>
                        </div>
                        <div className='admin-form-input'>
                            <input
                                id='admin-third'
                                className='admin-text'
                                placeholder=' '
                                type="text"
                                value={weightThird}
                                onChange={(e) => setWeightThird(e.target.value)}
                            />
                            <label className='admin-label' htmlFor='admin-third'>{t('admin.input_weight_third')}</label>
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