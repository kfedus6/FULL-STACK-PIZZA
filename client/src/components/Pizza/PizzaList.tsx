import React from 'react'
import PizzaItem from './PizzaItem'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'

const PizzaList = ({ products, page, totalCount, handleChangePage }: any) => {
    return (
        <div className='catalog'>
            <div className='catalog-items'>
                {products.map((item: any) => {
                    return (
                        <PizzaItem key={Number(item.id) + item.title} item={item} />
                    )
                })}
            </div>
            <div className='catalog-pagination'>
                <Stack spacing={2}>
                    <Pagination count={totalCount} page={page} onChange={handleChangePage} shape="rounded" size="large" />
                </Stack>
            </div>
        </div>
    )
}

export default PizzaList