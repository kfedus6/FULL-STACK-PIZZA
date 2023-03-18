import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { fetchDeleteAllBasketProduct, fetchDeleteBasketProduct, fetchGetBasketProduct, fetchOrderPost } from '../../store/reducers/ActionCreators'
import { BasketProductState } from '../../store/reducers/BasketSlice'
import jwt_decode from 'jwt-decode'
import BasketList from './BasketList'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import BuyFormModal from '../modal/buyProduct/BuyFormModal'

import './basket.css'

const Basket = () => {
    const [basketProductsInfo, setBasketProductsInfo] = useState<any>([])
    const [visibilityModalBuy, setVisibilityModalBuy] = useState<any>(false)
    const [phone, setPhone] = useState<any>('')
    const [name, setName] = useState<any>('')
    const [address, setAddress] = useState<any>('')
    const [payment, setPayment] = useState<any>()

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
        let sum = basketProductsInfo.reduce((prev: any, next: any) => prev += next.sum, 0)
        let order = { name: name, phone: phone, address: address, payment: payment, sum: sum, userId: user.userId, products: basketProductsInfo }
        dispatch(fetchOrderPost(order))
        dispatch(fetchDeleteAllBasketProduct(user.userId))
        setVisibilityModalBuy(false)
        navigate('/')
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
                visibilityModalBuy={visibilityModalBuy}
                setVisibilityModalBuy={setVisibilityModalBuy}
            />
            <BuyFormModal
                visibilityModalBuy={visibilityModalBuy}
                setVisibilityModalBuy={setVisibilityModalBuy}
                orderProduct={orderProduct}
                phone={phone}
                setPhone={setPhone}
                name={name}
                setName={setName}
                address={address}
                setAddress={setAddress}
                payment={payment}
                setPayment={setPayment}
                t={t}
            />
        </div>
    )
}

export default Basket