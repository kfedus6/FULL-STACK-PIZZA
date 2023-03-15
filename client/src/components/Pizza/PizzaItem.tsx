import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'

const PizzaItem = ({ item, is_admin, addBasketPizza }: any) => {
    const [changeSize, setChangeSize] = useState<number>(22)
    const [changeWeight, setChangeWeight] = useState<number>(0)
    const [changePrice, setChangePrice] = useState<number>(0)

    const { t } = useTranslation()

    return (
        <div className={item.status ? 'catalog-item' : 'catalog-item opacity'}>
            <div className='product catalog-product'>
                {is_admin
                    ?
                    <div className='product-admin-update'>
                        <NavLink to={`/productUpdate/${item._id}/${item.status}`}>{t('pizza.change')}</NavLink>
                    </div>
                    :
                    <></>
                }
                <div className='product-image'>
                    <img src={process.env.REACT_APP_API_URL + item.img} alt="pizz" className='product-img' />
                </div>
                <div className='product-content'>
                    <h3 className='product-title'>{item.title}</h3>
                    <p className='product-description'>{item.description}</p>
                </div>
                <div className='product-footer'>
                    <div className='product-sizes'>
                        <button
                            onClick={() => { setChangeSize(item.sizeFirst); setChangeWeight(item.weightFirst); setChangePrice(item.priceFirst) }}
                            className={changeSize == item.sizeFirst ? 'product-size is-active' : 'product-size'}
                            type="button">
                            <span>{item.weightFirst}г</span>
                            <span>{item.sizeFirst}см</span>
                        </button>
                        <button
                            onClick={() => { setChangeSize(item.sizeSecond); setChangeWeight(item.weightSecond); setChangePrice(item.priceSecond) }}
                            className={changeSize == item.sizeSecond ? 'product-size is-active' : 'product-size'}
                            type="button">
                            <span>{item.weightSecond}г</span>
                            <span>{item.sizeSecond}см</span>
                        </button>
                        <button
                            onClick={() => { setChangeSize(item.sizeThird); setChangeWeight(item.weightThird); setChangePrice(item.priceThird) }}
                            className={changeSize == item.sizeThird ? 'product-size is-active' : 'product-size'}
                            type="button">
                            <span>{item.weightThird}г</span>
                            <span>{item.sizeThird}см</span>
                        </button>
                    </div>
                    <div className='product-bottom'>
                        <div className='product-price'>
                            <span className='product-price__value'>{changeSize == item.sizeFirst ? item.priceFirst : changeSize == item.sizeSecond ? item.priceSecond : item.priceThird}</span>
                            <span className='product-currency'>&#8372;</span>
                        </div>
                        {item.status
                            ?
                            <div className='product-bottom-btn'>
                                <button onClick={() => addBasketPizza(item._id, changeSize, changeWeight, changePrice, item.img, item.title)} className='product-btn' type="button">{t('pizza.basket_btn')}</button>
                            </div>
                            :
                            <div className='product-bottom-btn'>
                                <button className='product-btn-status' type="button">{t('pizza.basket_btn')}</button>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div >
    )
}

export default PizzaItem