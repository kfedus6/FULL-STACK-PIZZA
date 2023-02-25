import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import SetLanguage from './SetLanguage';
import { useTranslation } from 'react-i18next'
import Burger from './burger/Burger';
import { UserState } from '../store/reducers/UserSlice';
import { useAppSelector } from '../hooks/redux';
import { FaUser } from 'react-icons/fa';
import Authorization from './modal/authorization/Authorization';

const Header = () => {
    const [burgerCheck, setBurgerCheck] = useState<boolean>(false)
    const [isShow, setIsShow] = useState<boolean>(false)
    const [isRegistration, setIsRegistration] = useState<boolean>(true);

    const { t } = useTranslation()

    const navigate = useNavigate()

    const { is_login }: UserState = useAppSelector(state => state.userSlice)

    return (
        <div className="container header-page__container">
            <div className="header-page__start">
                <div className="logo">
                    <button onClick={() => navigate('/')}>Pizza<span>Fed</span></button>
                </div>
                <nav className="header-page__nav">
                    <ul className="header-page__ul">
                        <li className="header-page__li"><a href='#homeTop'>{t('header.first_link')}</a></li>
                        <li className="header-page__li"><a href='#pizzaHome'>{t('header.second_link')}</a></li>
                        <li className="header-page__li"><NavLink to='/about us'>{t('header.third_link')}</NavLink></li>
                        <li className="header-page__li"><NavLink to='/contacts'>{t('header.fourth_link')}</NavLink></li>
                    </ul>
                </nav>
            </div>
            <div className='header-page__end'>
                <div className='header-language'>
                    <SetLanguage />
                </div>
                {is_login === true
                    ?
                    <div className='header-account-icon'>
                        <span><NavLink to='/account'><FaUser /></NavLink></span>
                    </div>
                    :
                    <div className='header-registration__login'>
                        <div onClick={() => { setIsRegistration(false); setIsShow(true) }}><span>{t('header.login')}</span></div>
                        <span>|</span>
                        <div onClick={() => { setIsRegistration(true); setIsShow(true) }}><span>{t('header.registration')}</span></div>
                    </div>
                }
            </div>
            <div className="header-page__hamburger">
                <button className="btn-menu" type="button" onClick={() => setBurgerCheck(!burgerCheck)}>
                    <span className="btn-menu__box">
                        <span className="btn-menu__inner"></span>
                    </span>
                </button>
            </div>
            <Burger
                onClick={() => setBurgerCheck(false)}
                isRegistration={isRegistration}
                setIsRegistration={setIsRegistration}
                setIsShowRegistration={setIsShow}
                burgerCheck={burgerCheck}
                setBurgerCheck={setBurgerCheck}
            />
            <Authorization
                isRegistration={isRegistration}
                setIsRegistration={setIsRegistration}
                isShow={isShow}
                setIsShow={setIsShow}
            />
        </div >
    )
}

export default Header;