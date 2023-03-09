import React from 'react'
import { useTranslation } from 'react-i18next'

import './aboutUs.css'

const AboutUs = () => {
    const { t } = useTranslation()
    return (
        <section className='section section-about' id='pizzaAboutUs'>
            <img src={process.env.REACT_APP_API_URL + 'bg-pizza.jpg'} alt="about" className="section-about__img" />
            <div className='container section-about__container'>
                <div className='section-about__content'>
                    <h2 className='section__title section-about__title'>{t('about.title')}</h2>
                    <p className='section-about__text'>{t('about.text')}</p>
                </div>
            </div>
        </section>
    )
}

export default AboutUs