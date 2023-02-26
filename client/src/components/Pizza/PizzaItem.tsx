import React from 'react'

const PizzaItem = ({ item }: any) => {
    return (
        <div className='catalog-item'>
            <div className='product catalog-product'>
                <div className='test'>
                    <img src={process.env.REACT_APP_API_URL + item.img} alt="pizz" className='product-img' />
                </div>
                <div className='product-content'>
                    <h3 className='product-title'>{item.title}</h3>
                    <p className='product-description'>{item.description}</p>
                </div>
                <div className='product-footer'>
                    <div className='product-sizes'>
                        <button className='product-size is-active' type="button">35см</button>
                        <button className='product-size' type="button">30см</button>
                        <button className='product-size' type="button">25см</button>
                    </div>
                    <div className='product-bottom'>
                        <div className='product-price'>
                            <span className='product-price__value'>{item.price}</span>
                            <span className='product-currency'>&#8372;</span>
                        </div>
                        <div className='product-bottom-btn'>
                            <button className='btn product-btn' type="button">заказать</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PizzaItem