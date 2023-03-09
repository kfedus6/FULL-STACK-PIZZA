import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import SetLanguage from '../SetLanguage/SetLanguage'
import { FaUser } from 'react-icons/fa'
import { useAppSelector } from '../../hooks/redux'
import Authorization from '../modal/authorization/Authorization'


const Burger = ({ burgerCheck, setBurgerCheck, setIsShowRegistration, isRegistration, setIsRegistration, setDropdownCheckAdmin, dropdownCheckAdmin }: any) => {
    const [isShow, setIsShow] = useState<boolean>(false)

    const { t } = useTranslation()

    const { is_login, is_admin } = useAppSelector(state => state.userSlice)

    return (
        <div className={burgerCheck ? 'menu active' : 'menu'} onClick={() => setBurgerCheck(false)}>
            <div className="menu-content" onClick={e => e.stopPropagation()}>
                <div className='menu-header'>
                    <nav>
                        <ul className="menu-header__links">
                            <li onClick={() => setBurgerCheck(false)} className="header-page__li"><NavLink to='/'>{t('header.first_link')}</NavLink></li>
                            <li onClick={() => setBurgerCheck(false)} className="header-page__li"><NavLink to='/pizza'>{t('header.second_link')}</NavLink></li>
                            <li onClick={() => setBurgerCheck(false)} className="header-page__li"><NavLink to='/about us'>{t('header.third_link')}</NavLink></li>
                            <li onClick={() => setBurgerCheck(false)} className="header-page__li"><NavLink to='/contacts'>{t('header.fourth_link')}</NavLink></li>
                            {is_admin
                                ?
                                <li className='header-page__li' onClick={() => setDropdownCheckAdmin(!dropdownCheckAdmin)}>
                                    <a href="#">Admin</a>
                                    <div className={dropdownCheckAdmin ? 'header-admin__list' : 'dropdown-none'}>
                                        <ul className='header-admin__dropdown'>
                                            <li onClick={() => setDropdownCheckAdmin(false)} className="header-page__li"><NavLink to='/productAndType'>product</NavLink></li>
                                        </ul>
                                    </div>
                                </li>
                                :
                                <></>
                            }
                        </ul>
                    </nav>
                    {is_login === true
                        ?
                        <div className='header-account-icon'>
                            <span onClick={() => setBurgerCheck(false)}><NavLink to='/account'><FaUser /></NavLink></span>
                        </div>
                        :
                        <div className='header-registration__login'>
                            <div onClick={() => { setIsShowRegistration(true); setIsRegistration(false); setBurgerCheck(false) }}><span>{t('header.login')}</span></div>
                            <span>|</span>
                            <div onClick={() => { setIsShowRegistration(true); setIsRegistration(true); setBurgerCheck(false) }}><span>{t('header.registration')}</span></div>
                        </div>
                    }
                    <div className="header-phone">
                        <a className="header-phone__item header-page__phone" href="tel:+79999999999">+7 (999) 999-99-99</a>
                    </div>
                    <div className='header-language'>
                        <SetLanguage />
                    </div>
                </div>
            </div>
            <Authorization isRegistration={isRegistration} setIsRegistration={setIsRegistration} isShow={isShow} setIsShow={setIsShow} />
        </div>
    )
}

export default Burger