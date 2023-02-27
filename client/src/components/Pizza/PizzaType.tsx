import React from 'react'

const PizzaType = ({ types, typeId, setTypeId }: any) => {
    return (
        <section className='section-type'>
            <div className='container-type'>
                <h2>Меню</h2>
                <nav className='catalog-nav'>
                    <ul className='catalog-nav__items'>
                        <li className='catalog-nav__item'>
                            <button onClick={() => setTypeId(undefined)} className={typeId === undefined ? 'catalog-nav__btn is-active' : 'catalog-nav__btn'}>Всі</button>
                        </li>
                        {types.map((t: any) => {
                            return (
                                <li key={t._id} className='catalog-nav__item'>
                                    <button onClick={() => setTypeId(t._id)} className={typeId === undefined ? 'catalog-nav__btn' : typeId == t._id ? 'catalog-nav__btn is-active' : 'catalog-nav__btn'}>{t.type}</button>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </div>
        </section >
    )
}

export default PizzaType