import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import SetLanguage from './SetLanguage';
import { useTranslation } from 'react-i18next'
import Burger from './burger/Burger';
import ModalLogOrReg from './modal/loginOrRegistration/ModalLogOrReg';

const Header = () => {
    const [burgerCheck, setBurgerCheck] = useState<boolean>(false)
    const [modalLogOrReg, setModalLogOrReg] = useState<boolean>(false)

    const { t } = useTranslation()

    return (
        <div className="container header-page__container">
            <div className="header-page__start">
                <div className="logo">
                    <button>Pizza<span>Fed</span></button>
                </div>
                <nav className="header-page__nav">
                    <ul className="header-page__ul">
                        <li className="header-page__li"><NavLink to='/'>{t('header.first_link')}</NavLink></li>
                        <li className="header-page__li"><NavLink to='/pizza'>{t('header.second_link')}</NavLink></li>
                        <li className="header-page__li"><NavLink to='/about us'>{t('header.third_link')}</NavLink></li>
                        <li className="header-page__li"><NavLink to='/contacts'>{t('header.fourth_link')}</NavLink></li>
                    </ul>
                </nav>
            </div>
            <div className='header-page__end'>
                <div className='header-language'>
                    <SetLanguage />
                </div>
                <div className='header-registration__login'>
                    <div onClick={() => setModalLogOrReg(!modalLogOrReg)}><span>{t('header.login')}</span></div>
                    <span>|</span>
                    <div onClick={() => setModalLogOrReg(!modalLogOrReg)}><span>{t('header.registration')}</span></div>
                </div>
            </div>
            <div className="header-page__hamburger">
                <button className="btn-menu" type="button" onClick={() => setBurgerCheck(!burgerCheck)}>
                    <span className="btn-menu__box">
                        <span className="btn-menu__inner"></span>
                    </span>
                </button>
            </div>
            <Burger burgerCheck={burgerCheck} setBurgerCheck={setBurgerCheck} />
            <ModalLogOrReg modalLogOrReg={modalLogOrReg} setModalLogOrReg={setModalLogOrReg} />
        </div>
    )
}

export default Header;