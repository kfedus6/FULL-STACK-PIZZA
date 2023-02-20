import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { Product } from './models/Product';
import { fetchsProducts } from './store/reducers/ActionCreators';
import { ProductState } from './store/reducers/ProductSlice';

const App: React.FC | any = () => {
    const dispatch = useAppDispatch()
    const { products }: ProductState = useAppSelector(state => state.productSlice)

    useEffect(() => {
        dispatch(fetchsProducts())
    }, [])

    return (
        <div>
            {products.map((p: Product) => {
                return (
                    <div key={p.id + p.title}>
                        {p.title}
                        <img src={process.env.REACT_APP_API_URL + p.img} alt="pizza" />
                    </div>
                )
            })}
        </div>
    )
};

export default App;