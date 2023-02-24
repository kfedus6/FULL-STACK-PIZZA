import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { MdError } from 'react-icons/md'
import { useAppDispatch } from '../../../hooks/redux'
import { fetchUserLogin } from '../../../store/reducers/ActionCreators'
import { useTranslation } from 'react-i18next'

type Inputs = {
    email: string,
    password: string
}

const Login = ({ setIsRegistration, close }: any) => {
    const { t }: any = useTranslation()

    const dispatch = useAppDispatch()

    const { register, handleSubmit, reset, formState: { errors, isValid } } = useForm<Inputs>({
        mode: "onBlur"
    })

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        const parseData = JSON.stringify(data)
        const objUser = JSON.parse(parseData)
        await dispatch(fetchUserLogin(objUser))
        reset()
        close(false)
    }

    return (
        <div className='modal-registration'>
            <div className='modal-registration-close'>
                <span>{t('form.sign_in')}</span>
                <img onClick={() => close(false)} src={process.env.REACT_APP_API_URL + 'close-pizza.png'} alt="close" />
            </div>
            <form className='modal-form-registration' onSubmit={handleSubmit(onSubmit)}>
                <div className='form-hook-registration'>
                    <input
                        type='email'
                        placeholder=' '
                        id='register-third'
                        className='form-register'
                        {...register('email', {
                            required: `${t('form.form_error')}`,
                            pattern: {
                                value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                message: `${t('form.email_error')}`
                            }
                        })}
                    />
                    <label className='register-label' htmlFor='register-third'>Email</label>
                    <div className='register-error'>
                        <i>{errors?.email && <MdError />}</i>
                        <span>{errors?.email && <span>{errors?.email?.message || 'Error!'}</span>}</span>
                    </div>
                </div>
                <div className='form-hook-registration'>
                    <input
                        type='password'
                        placeholder=' '
                        id='register-fourth'
                        className='form-register'
                        {...register('password', {
                            required: `${t('form.form_error')}`,
                            minLength: {
                                value: 5,
                                message: `${t('form.password_error')}`
                            },
                            maxLength: {
                                value: 15,
                                message: `${t('form.password_error')}`
                            }
                        })}
                    />
                    <label className='register-label' htmlFor='register-fourth'>{t('form.form_password')}</label>
                    <div className='register-error'>
                        <i>{errors?.password && <MdError />}</i>
                        <span>{errors?.password && <span>{errors?.password?.message || 'Error!'}</span>}</span>
                    </div>
                </div>
                <div className='form-register__or-login'>
                    <button onClick={() => setIsRegistration(true)}>{t('form.login')}</button>
                </div>
                <div className='form-regisrer-btn'>
                    <input value={t('form.sign_in')} type='submit' disabled={!isValid} />
                </div>
            </form>
        </div>
    )
}

export default Login