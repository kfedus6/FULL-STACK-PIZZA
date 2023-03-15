import React from 'react'
import BasketItem from './BasketItem'

const BasketList = ({ basket, basketProductsInfo, t, navigate, changeBasketInfo, deleteProduct }: any) => {

    if (basket.length === 0) {
        return (
            <div className='basket-cart__empty'>
                <h2>{t('basket.title')}</h2>
                <h3 className='basket-empty__title'>{t('basket.title_empty')}</h3>
                <button onClick={() => navigate('/')} className='basket-btn__shop'>{t('basket.goshop')}</button>
            </div>
        )
    } else if (basketProductsInfo.length === basket.length) {
        return (
            <div className='basket-container__cart'>
                <BasketItem
                    basket={basket}
                    basketProductsInfo={basketProductsInfo}
                    t={t}
                    navigate={navigate}
                    changeBasketInfo={changeBasketInfo}
                    deleteProduct={deleteProduct}
                />
            </div>
        )
    } else {
        return <h1>loading</h1>
    }
}

export default BasketList