import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate, useParams } from 'react-router-dom'
import { useAppDispatch } from '../../hooks/redux'
import { fetchDeleteProduct, fetchUpdateProduct } from '../../store/reducers/ActionCreators'

import './admin.css'

const ProductUpdate = () => {
    const [title, setTitle] = useState<any>('')
    const [description, setDescriprion] = useState<any>('')
    const [priceFirst, setPriceFirst] = useState<any>('')
    const [priceSecond, setPriceSecond] = useState<any>('')
    const [priceThird, setPriceThird] = useState<any>('')
    const [sizeFirst, setSizeFirst] = useState<any>('')
    const [sizeSecond, setSizeSecond] = useState<any>('')
    const [sizeThird, setSizeThird] = useState<any>('')
    const [weightFirst, setWeightFirst] = useState<any>('')
    const [weightSecond, setWeightSecond] = useState<any>('')
    const [weightThird, setWeightThird] = useState<any>('')

    const { id, status }: any = useParams()
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const { t }: any = useTranslation()

    const deleteProduct = async () => {
        await dispatch(fetchDeleteProduct(id))
        navigate(-1)
    }

    const updateProduct = async () => {
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
        formData.append('status', '')
        await dispatch(fetchUpdateProduct(id, formData))
        navigate(-1)
    }

    const updateStatusProduct = async () => {
        let newStatus: any = false
        if (status === 'true') {
            newStatus = false
            const formData = new FormData()
            formData.append('status', newStatus)
            await dispatch(fetchUpdateProduct(id, formData))
        } else {
            newStatus = true
            const formData = new FormData()
            formData.append('status', newStatus)
            await dispatch(fetchUpdateProduct(id, formData))
        }
        navigate(-1)
    }

    return (
        <section className='section-admin'>
            <div className='container-admin'>
                <div className='admin-block'>
                    <div className='admin-form'>
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
                        <div className='admin-delete'>
                            <button onClick={updateProduct}>{t('admin.btn_update')}</button>
                            <button onClick={updateStatusProduct}>{status == 'true' ? t('admin.btn_active') : t('admin.btn_notActive')}</button>
                            <button onClick={deleteProduct}>{t('admin.btn_delete')}</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductUpdate