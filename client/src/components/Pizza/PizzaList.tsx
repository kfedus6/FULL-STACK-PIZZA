import React from 'react'
import PizzaItem from './PizzaItem'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'

const PizzaList = ({ products, page, totalCount, handleChangePage, count, is_admin }: any) => {

    return (
        <div className='catalog'>
            <div className='catalog-items'>
                {products.map((item: any) => {
                    return (
                        <PizzaItem key={item._id} item={item} is_admin={is_admin} />
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