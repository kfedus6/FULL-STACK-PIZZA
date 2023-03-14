import React from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { BasketProductState } from '../../store/reducers/BasketSlice'

import './basket.css'

const Basket = () => {

    const dispatch = useAppDispatch()
    const { basket }: BasketProductState = useAppSelector(state => state.basketProduct)

    return (
        <div>Basket</div>
    )
}

export default Basket