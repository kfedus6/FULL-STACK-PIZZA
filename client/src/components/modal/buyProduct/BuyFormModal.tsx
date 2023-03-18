import React from 'react'

import './buyFormModal.css'

const BuyFormModal = ({ visibilityModalBuy, setVisilibilityModalBuy, orderProduct,
    phone, setPhone, name, setName, address, setAddress, payment, setPayment, t }: any) => {

    return (
        <div className={visibilityModalBuy ? 'modal modal-active' : 'modal'}>
            <div className='modal-content'>
                <div className='modal-header'>
                    <h2>{t('modalBuy.title')}</h2>
                    <p>{t('modalBuy.text')}</p>
                </div>
                <div className='modal-form'>
                    <form>
                        <div className='modal-form__input'>
                            <input value={name} type="text" placeholder={t('modalBuy.name')} required
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className='modal-form__input'>
                            <input value={phone} type="phone" placeholder={t('modalBuy.phone')} required
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </div>
                        <div className='modal-form__input'>
                            <input value={address} type="text" placeholder={t('modalBuy.address')} required
                                onChange={(e) => setAddress(e.target.value)}
                            />
                        </div>
                        <div className='modal-form__input'>
                            <select onChange={(e) => setPayment(e.target.value)}>
                                <option value="Оплата готівкою">{t('modalBuy.payment')}</option>
                                <option value="Оплата карткою">{t('modalBuy.payment_two')}</option>
                            </select>
                        </div>
                        <div className='modal-form__btn'>
                            <button onClick={orderProduct} className='form__btn' type="submit">{t('modalBuy.payment_btn')}</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default BuyFormModal