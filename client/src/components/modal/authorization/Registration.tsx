import React, { useState } from 'react'
import { useAppDispatch } from '../../../hooks/redux';
import { fetchUserRegistration } from '../../../store/reducers/ActionCreators';

const Registration = ({ setIsRegisterOrLog, close }: any) => {
    const [username, setUsername] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [phone, setPhone] = useState<string | number>('')
    const [password, setPassword] = useState<string>('')

    const dispatch = useAppDispatch()

    const registration = async () => {
        await dispatch(fetchUserRegistration(email, password, phone, username))
        setEmail('')
        setPassword('')
        setPhone('')
        setUsername('')
        close(false)
    }

    return (
        <div className='modal-registration'>
            <div className='modal-registration-close' onClick={() => close(false)}>
                <img src={process.env.REACT_APP_API_URL + 'close-pizza.png'} alt="close" />
            </div>
            <div className='modal-registration-form'>
                <input
                    type="text"
                    value={username}
                    placeholder='Name'
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
            </div>
            <div className='modal-registration-form'>
                <input
                    type="phone"
                    value={phone}
                    placeholder='phone'
                    onChange={(e) => setPhone(e.target.value)}
                    required
                />
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
                <button onClick={() => setIsRegisterOrLog(false)}>change</button>
            </div>
            <div className='modal-registration-form-btn'>
                <button onClick={(e) => { e.preventDefault(); registration(); return false }}>send</button>
            </div>
        </div>
    )
}

export default Registration