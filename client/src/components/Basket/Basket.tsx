import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { fetchDeleteAllBasketProduct, fetchDeleteBasketProduct, fetchGetBasketProduct } from '../../store/reducers/ActionCreators'
import { BasketProductState } from '../../store/reducers/BasketSlice'
import jwt_decode from 'jwt-decode'
import BasketList from './BasketList'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

import './basket.css'

const Basket = () => {
    const [basketProductsInfo, setBasketProductsInfo] = useState<any>([])

    const { t }: any = useTranslation()

    const navigate = useNavigate()

    const dispatch = useAppDispatch()
    const { basket }: BasketProductState = useAppSelector(state => state.basketProduct)

    useEffect(() => {
        let token: any = localStorage.getItem('token')
        let user: any = jwt_decode(token)
        dispatch(fetchGetBasketProduct(user.userId))
        let bpi = basketProductsInfo
        for (const product of basket) {
            bpi = [...bpi, { product: product, count: 1, sum: product.price, }]
        }
        setBasketProductsInfo(bpi)
    }, [])

    const changeBasketInfo = (count: any, basketInfo: any) => {
        let bpi = basketProductsInfo.filter((info: any) => info.product.title !== basketInfo.product.title)
        basketInfo.count = count
        basketInfo.sum = count * basketInfo.product.price
        setBasketProductsInfo([...bpi, basketInfo])
    }

    const deleteProduct = (id: any) => {
        dispatch(fetchDeleteBasketProduct(id))
        let newBasketProductInfo = basketProductsInfo.filter((item: any) => item.product._id !== id)
        setBasketProductsInfo(newBasketProductInfo)
    }

    const orderProduct = () => {
        let token: any = localStorage.getItem('token')
        let user: any = jwt_decode(token)
        dispatch(fetchDeleteAllBasketProduct(user.userId))
    }

    return (
        <div>
            <BasketList
                basket={basket}
                basketProductsInfo={basketProductsInfo}
                t={t}
                navigate={navigate}
                changeBasketInfo={changeBasketInfo}
                deleteProduct={deleteProduct}
            />
        </div>
    )
}

export default Basket