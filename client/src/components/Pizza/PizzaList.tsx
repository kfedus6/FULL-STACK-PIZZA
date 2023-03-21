import React from 'react'
import PizzaItem from './PizzaItem'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import { Product } from '../../models/Product'

interface PizzaListProps {
    products: Product[],
    page: number;
    totalCount: number | undefined;
    handleChangePage: (e: any, value: number) => void;
    count: number;
    is_admin: boolean;
    addBasketPizza: (id: number, changeSize: number, changeWeight: number, changePrice: number, img: string, title: string) => void
}

const PizzaList: React.FC<PizzaListProps> = ({
    products, page, totalCount, handleChangePage,
    count, is_admin, addBasketPizza }) => {

    return (
        <div className='catalog'>
            <div className='catalog-items'>
                {products.map((item: Product) => {
                    return (
                        <PizzaItem
                            key={item._id} item={item} is_admin={is_admin}
                            addBasketPizza={addBasketPizza}
                        />
                    )
                })}
            </div>
            <div className='catalog-pagination'>
                {count > 6
                    ?
                    <Stack spacing={2}>
                        <Pagination count={totalCount} page={page} onChange={handleChangePage} shape="rounded" size="large" />
                    </Stack>
                    :
                    <></>
                }
            </div>
        </div>
    )
}

export default PizzaList