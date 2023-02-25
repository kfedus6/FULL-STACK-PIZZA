import React from 'react'

const PizzaType = ({ types }: any) => {

    return (
        <section className='section-type'>
            <div className='container-type'>
                <h2>Меню</h2>
                <nav className='catalog-nav'>
                    <ul className='catalog-nav__items'>
                        <li className='catalog-nav__item'>
                            <button className='catalog-nav__btn is-active'>Всі</button>
                        </li>
                        {types.map((t: any) => {
                            return (
                                <li key={Number(t.id) + t.type} className='catalog-nav__item'>
                                    <button className='catalog-nav__btn'>{t.type}</button>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </div>
        </section>
    )
}

export default PizzaType