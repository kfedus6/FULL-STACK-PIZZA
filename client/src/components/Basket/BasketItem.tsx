import React, { Key } from 'react'
import { BsArrowLeft } from 'react-icons/bs'
import { AiTwotoneDelete } from 'react-icons/ai'

const BasketItem = ({ basket, basketProductsInfo, t, navigate, changeBasketInfo, deleteProduct, visibilityModalBuy, setVisibilityModalBuy }: any) => {

    return (
        <div className='cart-container'>
            <h2>{t('basket.title')}</h2>
            <div>
                <div className='titles'>
                    <h3 className="product-title">{t('basket.title_product')}</h3>
                    <h3 className="price">{t('basket.title_price')}</h3>
                    <h3 className="quantity">{t('basket.title_quantity')}</h3>
                    <h3 className="total">{t('basket.title_total')}</h3>
                </div>
                <div className='cart-items'>
                    {basket.map((item: any, idx: Key) => {
                        const basketInfo = basketProductsInfo.find((info: any) => info.product.title === item.title)
                        return (
                            <div className='cart-item' key={idx}>
                                <div className='cart-product'>
                                    <img src={process.env.REACT_APP_API_URL + item.image} alt={item.title} />
                                    <div>
                                        <h3>{item.title}</h3>
                                        <div className='basket-info__product'>
                                            <span>{item.size} см</span>
                                            <span>{item.weight} г</span>
                                        </div>
                                        <button onClick={() => deleteProduct(item._id)}><AiTwotoneDelete /></button>
                                    </div>
                                </div>
                                <div className='cart-product-price' >{item.price} &#8372;</div>
                                <div className="cart-product-quantity">
                                    <input type="number" defaultValue={basketInfo.count} onChange={(e) => changeBasketInfo(e.target.value, basketInfo)} />
                                </div>
                                <div className='cart-product-total-price'>
                                    {basketInfo.sum} &#8372;
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className='cart-summary'>
                    <div className="cart-checkout">
                        <div className='subtotal'>
                            <span>{t('basket.title_price')}:</span>
                            <span className='amount'>
                                {basketProductsInfo.reduce((prev: any, info: any) => prev += info.sum, 0)}
                                &#8372;
                            </span>
                        </div>
                        <div>
                            <button onClick={() => setVisibilityModalBuy(!visibilityModalBuy)} className='btn-cart-buy'>{t('basket.buy')}</button>
                        </div>
                        <div className='btn-go-shop'>
                            <button onClick={() => navigate('/')}>
                                <span><BsArrowLeft /></span>
                                <span>{t('basket.goshop')}</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BasketItem