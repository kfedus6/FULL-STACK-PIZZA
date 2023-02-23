import React, { useState } from 'react'
import { useAppDispatch } from '../../../hooks/redux'
import { fetchUserLogin } from '../../../store/reducers/ActionCreators'

const Login = ({ setIsRegistration, close }: any) => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const dispatch = useAppDispatch()

    const login = async () => {
        await dispatch(fetchUserLogin(email, password))
        setEmail('')
        setPassword('')
        close(false)
    }

    return (
        <div className='modal-registration'>
            <div className='modal-registration-close' onClick={() => close(false)}>
                <img src={process.env.REACT_APP_API_URL + 'close-pizza.png'} alt="close" />
            </div>
            <div className='modal-registration-form'>
                <input
                    type="email"
                    value={email}
                    placeholder='email'
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div className='modal-registration-form'>
                <input
                    type="password"
                    value={password}
                    placeholder='password'
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            <div>
                <button onClick={() => setIsRegistration(true)}>change</button>
            </div>
            <div className='modal-registration-form-btn'>
                <button onClick={(e) => { login(); e.preventDefault(); return false }}>send</button>
            </div>
        </div>
    )
}

export default Login