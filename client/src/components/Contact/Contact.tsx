import React from 'react'
import { IoLogoInstagram } from 'react-icons/io'
import { FaTelegramPlane } from 'react-icons/fa'
import { GrFacebookOption } from 'react-icons/gr'

import './contact.css'
import { useTranslation } from 'react-i18next'

const Contact = () => {
    const { t } = useTranslation()
    return (
        <section className="section-contacts" id='pizzaContact'>
            <div className="section-contacts__container">
                <div className="section__header">
                    <h2 className="section__title sectoin-contacts__title">{t('contact.title')}</h2>
                </div>
                <div className="contacts">
                    <div className="contacts__start">
                        <div className="contacts__map">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2573.2318075357775!2d24.027251222999684!3d49.83810178293306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add6ec1a1357f%3A0xc667e2861b4aba77!2sMcDonald&#39;s!5e0!3m2!1sru!2sua!4v1678626061373!5m2!1sru!2sua" loading="lazy"></iframe>
                        </div>
                    </div>
                    <div className="contacts__end">
                        <div className="contacts__item">
                            <h3 className="contacts__title">{t('contact.title_address')}</h3>
                            <p className="contacts__text">м. Львів, проспект Шевченка, 7</p>
                        </div>
                        <div className="contacts__item">
                            <h3 className="contacts__title">{t('contact.title_phone')}</h3>
                            <p className="contacts__text">
                                <a className="contacts__phone" href="tel:+79117112123">+380 (63) 711-21-23</a>
                            </p>
                        </div>
                        <div className="contacts__item">
                            <h3 className="contacts__title">{t('contact.title_social')}</h3>
                            <ul className="socials">
                                <li className="socials__item">
                                    <a href="#" className="socials__link" target="_blank">
                                        <IoLogoInstagram />
                                    </a>
                                </li>
                                <li className="socials__item">
                                    <a href="#" className="socials__link" target="_blank">
                                        <FaTelegramPlane />
                                    </a>
                                </li>
                                <li className="socials__item">
                                    <a href="#" className="socials__link" target="_blank">
                                        <GrFacebookOption />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact