import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../../hooks/redux'
import { fetchUserExit } from '../../store/reducers/ActionCreators'

import './account.css'

const Account = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const loginExit = async () => {
        await dispatch(fetchUserExit())
        navigate('/')
    }

    return (
        <div className='exit'>
            <button onClick={loginExit}>Exit</button>
        </div>
    )
}

export default Account