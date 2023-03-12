import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { fetchProducts, fetchTypesProduct } from '../../store/reducers/ActionCreators'
import PizzaList from './PizzaList'
import PizzaType from './PizzaType'
import { getPageCount } from '../../utils/page'
import { TypeProductState } from '../../store/reducers/TypeProductSlice'
import { ProductState } from '../../store/reducers/ProductSlice'
import { UserState } from '../../store/reducers/UserSlice'

import './pizza.css'

const Pizza = () => {
    const [page, setPage] = useState<number>(1)
    const [limit, setLimit] = useState<number>(6)
    const [totalCount, setTotalCount] = useState<number>()
    const [typeId, setTypeId] = useState<number | undefined>(undefined)

    const dispatch = useAppDispatch()

    const { types }: TypeProductState = useAppSelector(state => state.TypeProductSlice)
    const { products, count }: ProductState = useAppSelector(state => state.productSlice)
    const { is_admin }: UserState = useAppSelector(state => state.userSlice)

    useEffect(() => {
        dispatch(fetchTypesProduct())
        dispatch(fetchProducts({ page: page, limit: limit, typeId: typeId }))
    }, [page, limit, typeId])

    useEffect(() => {
        if (count) setTotalCount(getPageCount(count, limit))
    }, [count])

    const handleChangePage = (e: any, value: number) => {
        setPage(value)
    }

    return (
        <div className='page-pizza__home' id="pizzaHome">
            <PizzaType types={types} typeId={typeId} setTypeId={setTypeId} />
            <PizzaList
                products={products}
                page={page}
                totalCount={totalCount}
                handleChangePage={handleChangePage}
                count={count}
                is_admin={is_admin}
            />
        </div>
    )
}

export default Pizza