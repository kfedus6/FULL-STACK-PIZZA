import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { fetchProducts, fetchTypesProduct } from '../../store/reducers/ActionCreators'
import PizzaList from './PizzaList'
import PizzaType from './PizzaType'

import './pizza.css'

const Pizza = () => {
    const dispatch = useAppDispatch()

    const { types }: any = useAppSelector(state => state.TypeProductSlice)
    const { products }: any = useAppSelector(state => state.productSlice)

    useEffect(() => {
        dispatch(fetchTypesProduct())
        dispatch(fetchProducts())
    }, [])

    return (
        <div className='page-pizza__home' id="pizzaHome">
            <PizzaType types={types} />
            <PizzaList products={products} />
        </div>
    )
}

export default Pizza