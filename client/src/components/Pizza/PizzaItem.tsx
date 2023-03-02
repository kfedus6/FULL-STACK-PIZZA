import React from 'react'
import { NavLink } from 'react-router-dom'

const PizzaItem = ({ item, is_admin }: any) => {
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
                        <button className='product-size is-active' type="button">
                            <span>310г</span>
                            <span>25см</span>
                        </button>
                        <button className='product-size' type="button">
                            <span>479г</span>
                            <span>30см</span>
                        </button>
                        <button className='product-size' type="button">
                            <span>821г</span>
                            <span>40см</span>
                        </button>
                    </div>
                    <div className='product-bottom'>
                        <div className='product-price'>
                            <span className='product-price__value'>{item.price}</span>
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