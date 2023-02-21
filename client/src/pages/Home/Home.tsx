import React from 'react'

import './home.css'

const Home = () => {
    return (
        <section className='section-top__baner'>
            <div className='container-baner section-top__baner__container'>
                <p className='section-top__baner__info'>от итальянського повара</p>
                <h2 className='section-top__baner__tittle'>Лучшая пицца в Львове</h2>
                <div className='section-top__baner__button'>
                    <button className='baner-btn' type="button">Выбрать</button>
                </div>
            </div>
        </section>
    )
}

export default Home