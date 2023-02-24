import React from 'react'
import { useAppDispatch } from '../../../hooks/redux'
import { fetchUserRegistration } from '../../../store/reducers/ActionCreators'
import { useForm, SubmitHandler } from 'react-hook-form'
import { MdError } from 'react-icons/md'
import { useTranslation } from 'react-i18next'

type Inputs = {
    username: string,
    email: string,
    phone: string,
    password: string
}

const Registration = ({ setIsRegisterOrLog, close }: any) => {
    const { t }: any = useTranslation()

    const dispatch = useAppDispatch()

    const { register, handleSubmit, reset, formState: { errors, isValid } } = useForm<Inputs>({
        mode: "onBlur"
    })

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        const parseData = JSON.stringify(data)
        const objUser = JSON.parse(parseData)
        await dispatch(fetchUserRegistration(objUser))
        reset()
        close(false)
    }

    return (
        <div className='modal-registration'>
            <div className='modal-registration-close' >
                <span>{t('form.sign_up')}</span>
                <img onClick={() => close(false)} src={process.env.REACT_APP_API_URL + 'close-pizza.png'} alt="close" />
            </div>
            <form className='modal-form-registration' onSubmit={handleSubmit(onSubmit)}>
                <div className='form-hook-registration'>
                    <input
                        type='text'
                        placeholder=' '
                        id='register-first'
                        className='form-register'
                        {...register('username', {
                            required: `${t('form.form_error')}`,
                            minLength: {
                                value: 3,
                                message: `${t('form.name_error')}`
                            }
                        })}
                    />
                    <label className='register-label' htmlFor="register-first">{t('form.form_name')}</label>
                    <div className='register-error'>
                        <i>{errors?.username && <MdError />}</i>
                        <span>{errors?.username && <span>{errors?.username?.message || 'Error!'}</span>}</span>
                    </div>
                </div>
                <div className='form-hook-registration'>
                    <input
                        type='tel'
                        placeholder=' '
                        id="register-second"
                        className='form-register'
                        {...register('phone', {
                            required: `${t('form.form_error')}`,
                            pattern: {
                                value: /^[0-9]{10}/,
                                message: `${t('form.phone_error')}`
                            }
                        })}
                    />
                    <label className='registrer-lable' htmlFor='register-second'>{t('form.form_phone')}</label>
                    <div className='register-error'>
                        <i>{errors?.phone && <MdError />}</i>
                        <span>{errors?.phone && <span>{errors?.phone?.message || 'Error!'}</span>}</span>
                    </div>
                </div>
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
                    <button onClick={() => setIsRegisterOrLog(false)}>{t('form.register')}</button>
                </div>
                <div className='form-regisrer-btn'>
                    <input value={t('form.sign_up')} type='submit' disabled={!isValid} />
                </div>
            </form>
        </div>
    )
}

export default Registration