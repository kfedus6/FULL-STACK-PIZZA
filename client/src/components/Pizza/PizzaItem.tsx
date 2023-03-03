import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const PizzaItem = ({ item, is_admin }: any) => {
    const [changePrice, setChangePrice] = useState<any>(22)

    return (
        <div className={item.status ? 'catalog-item' : 'catalog-item opacity'}>
            <div className='product catalog-product'>
                {is_admin
                    ?
                    <div className='product-admin-update'>
                        <NavLink to={`/productUpdate/${item._id}/${item.status}`}>Change</NavLink>
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
                        <button onClick={() => setChangePrice(item.sizeFirst)} className={changePrice == item.sizeFirst ? 'product-size is-active' : 'product-size'} type="button">
                            <span>{item.weightFirst}г</span>
                            <span>{item.sizeFirst}см</span>
                        </button>
                        <button onClick={() => setChangePrice(item.sizeSecond)} className={changePrice == item.sizeSecond ? 'product-size is-active' : 'product-size'} type="button">
                            <span>{item.weightSecond}г</span>
                            <span>{item.sizeSecond}см</span>
                        </button>
                        <button onClick={() => setChangePrice(item.sizeThird)} className={changePrice == item.sizeThird ? 'product-size is-active' : 'product-size'} type="button">
                            <span>{item.weightThird}г</span>
                            <span>{item.sizeThird}см</span>
                        </button>
                    </div>
                    <div className='product-bottom'>
                        <div className='product-price'>
                            <span className='product-price__value'>{changePrice == item.sizeFirst ? item.priceFirst : changePrice == item.sizeSecond ? item.priceSecond : item.priceThird}</span>
                            <span className='product-currency'>&#8372;</span>
                        </div>
                        {item.status
                            ?
                            <div className='product-bottom-btn'>
                                <button className='product-btn' type="button">заказать</button>
                            </div>
                            :
                            <div className='product-bottom-btn'>
                                <button className='product-btn-status' type="button">заказать</button>
                            </div>
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default PizzaItem