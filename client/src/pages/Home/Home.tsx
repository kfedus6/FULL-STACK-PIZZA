import React from 'react'
import { useTranslation } from 'react-i18next'
import AboutUs from '../../components/AboutUs/AboutUs'
import Pizza from '../../components/Pizza/Pizza'

import './home.css'

const Home = () => {
    const { t } = useTranslation()

    return (
        <>
            <section id='homeTop' className='section-top__baner'>
                <div className='container-baner section-top__baner-container'>
                    <p className='section-top__baner-info'>{t('home.baner_text_first')}</p>
                    <h2 className='section-top__baner-tittle'>{t('home.baner_text_second')}</h2>
                    <div className='section-top__baner-button'>
                        <button className='baner-btn' type="button">{t('home.baner_button')}</button>
                    </div>
                </div>
            </section>
            <Pizza />
            <AboutUs />
        </>
    )
}

export default Home