import React from 'react'
import PizzaItem from './PizzaItem'

const PizzaList = ({ products }: any) => {
    return (
        <div className='catalog'>
            <div className='catalog-items'>
                {products.map((item: any) => {
                    return (
                        <PizzaItem key={Number(item.id) + item.title} item={item} />
                    )
                })}
            </div>
        </div >
    )
}

export default PizzaList