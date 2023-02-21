import React from 'react'
import { NavLink } from 'react-router-dom'
import SetLanguage from './SetLanguage';
import { useTranslation } from 'react-i18next'

const Header = () => {
    const { t } = useTranslation()

    return (
        <div className="container header-page__container">
            <div className="header-page__start">
                <div className="logo">
                    <h1>Pizza<span>Fed</span></h1>
                </div>
                <nav className="header-page__nav">
                    <ul className="header-page__ul">
                        <li className="header-page__li"><NavLink to='/'>{t('header.first_link')}</NavLink></li>
                        <li className="header-page__li"><NavLink to='/pizza'>Pizza</NavLink></li>
                        <li className="header-page__li"><NavLink to='/about us'>about us</NavLink></li>
                        <li className="header-page__li"><NavLink to='/contacts'>Contacts</NavLink></li>
                    </ul>
                </nav>
            </div>
            <div className='header-page__end'>
                <div className='header-language'>
                    <SetLanguage />
                </div>
                <div className='header-registration__login'>
                    <div><span>login</span></div>
                    <span>|</span>
                    <div><span>registration</span></div>
                </div>
            </div>
            <div className="header-page__hamburger">
                <button className="btn-menu" type="button">
                    <span className="btn-menu__box">
                        <span className="btn-menu__inner"></span>
                    </span>
                </button>
            </div>
        </div>
    )
}

export default Header;