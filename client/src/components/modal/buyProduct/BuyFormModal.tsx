import React from 'react'

import './buyFormModal.css'

const BuyFormModal = ({ visibilityModalBuy, setVisilibilityModalBuy, orderProduct }: any) => {

    return (
        <div className={visibilityModalBuy ? 'modal modal-active' : 'modal'}>
            <div className='modal-content'>
                <div className='modal-header'>
                    <h2>Заповніть форму</h2>
                    <p>Ми привеземо вам гарячу піцу за 50 хвилин</p>
                </div>
                <div className='modal-form'>
                    <form>
                        <div className='modal-form__input'>
                            <input type="text" placeholder="Имя" required />
                        </div>
                        <div className='modal-form__input'>
                            <input type="phone" placeholder="Телефон" required />
                        </div>
                        <div className='modal-form__input'>
                            <input type="email" placeholder="Адрес" required />
                        </div>
                        <div className='modal-form__input'>
                            <select >
                                <option value="Оплата готівкою">Оплата готівкою</option>
                                <option value="Оплата карткою">Оплата карткою</option>
                            </select>
                        </div>
                        <div className='modal-form__btn'>
                            <button onClick={orderProduct} className='form__btn' type="submit">Відправити</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default BuyFormModal