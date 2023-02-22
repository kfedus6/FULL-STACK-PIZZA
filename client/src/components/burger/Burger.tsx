import React from 'react'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import SetLanguage from '../SetLanguage'

interface PropsBurger {
    burgerCheck: boolean,
    setBurgerCheck: any
}

const Burger = ({ burgerCheck, setBurgerCheck }: PropsBurger) => {
    const { t } = useTranslation()

    return (
        <div className={burgerCheck ? 'menu active' : 'menu'} onClick={() => setBurgerCheck(false)}>
            <div className="menu-content" onClick={e => e.stopPropagation()}>
                <div className='menu-header'>
                    <nav>
                        <ul className="menu-header__links">
                            <li className="header-page__li"><NavLink to='/'>{t('header.first_link')}</NavLink></li>
                            <li className="header-page__li"><NavLink to='/pizza'>{t('header.second_link')}</NavLink></li>
                            <li className="header-page__li"><NavLink to='/about us'>{t('header.third_link')}</NavLink></li>
                            <li className="header-page__li"><NavLink to='/contacts'>{t('header.fourth_link')}</NavLink></li>
                        </ul>
                    </nav>
                    <div className='header-registration__login'>
                        <div><span>{t('header.login')}</span></div>
                        <span>|</span>
                        <div><span>{t('header.registration')}</span></div>
                    </div>
                    <div className="header-phone">
                        <a className="header-phone__item header-page__phone" href="tel:+79999999999">+7 (999) 999-99-99</a>
                    </div>
                    <div className='header-language'>
                        <SetLanguage />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Burger