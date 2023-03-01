import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useAppDispatch } from '../../hooks/redux'
import { fetchDeleteProduct } from '../../store/reducers/ActionCreators'

const ProductUpdate = () => {
    const { id } = useParams()
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const deleteProduct = async () => {
        await dispatch(fetchDeleteProduct(id))
        navigate('/')
    }

    return (
        <div className='admin-update'>
            <button onClick={deleteProduct}>Delete</button>
        </div>
    )
}

export default ProductUpdate