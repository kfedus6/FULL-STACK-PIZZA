import React, { useState } from 'react'
import { useAppSelector } from '../../hooks/redux'

import './admin.css'

const ProductAndTypeAdd = () => {
    const [type, setType] = useState<any>()

    const { types }: any = useAppSelector(state => state.TypeProductSlice)

    return (
        <section className='section-admin'>
            <div className='container-admin'>
                <div className='admin-block'>
                    <div className='admin-form'>
                        <span className='admin-title'>Pizza</span>
                        <div className='admin-select'>
                            <select onChange={(e) => setType(Number(e.target.value))}>
                                <option defaultValue="Type">Type</option>
                                {types.map((item: any) => {
                                    return (
                                        <option key={item._id} value={item._id}>{item.type}</option>
                                    )
                                })}
                            </select>
                        </div>
                        <div className='admin-form-input'>
                            <input
                                className='admin-text'
                                type="file"
                            />
                        </div>
                        <div className='admin-form-input'>
                            <input
                                id='admin-first'
                                className='admin-text'
                                placeholder=' '
                                type="text"
                            />
                            <label className='admin-label' htmlFor='admin-firts'>Title</label>
                        </div>
                        <div className='admin-form-input'>
                            <input
                                id='admin-second'
                                className='admin-text'
                                placeholder=' '
                                type="text"
                            />
                            <label className='admin-label' htmlFor='admin-second'>Description</label>
                        </div>
                        <div className='admin-form-input'>
                            <input
                                id='admin-third'
                                className='admin-text'
                                placeholder=' '
                                type="text"
                            />
                            <label className='admin-label' htmlFor='admin-third'>Price</label>
                        </div>
                        <div className='admin-form-size'>
                            <span className='admin-title'>Size</span>
                            <div className='admin-form-input'>
                                <input
                                    id='admin-fourth'
                                    className='admin-text'
                                    placeholder=' '
                                    type="text"
                                />
                                <label className='admin-label' htmlFor='admin-fourth'>Size</label>
                            </div>
                            <div className='admin-btn-size'>
                                <button>add</button>
                            </div>
                        </div>
                        <div className='admin-button admin-btn'>
                            <button>send</button>
                        </div>
                    </div>
                    <div className='admin-form-type'>
                        <span className='admin-title'>Type</span>
                        <div className='admin-form-input'>
                            <input
                                id='admin-fifth'
                                className='admin-text'
                                placeholder=' '
                                type="text"
                            />
                            <label className='admin-label' htmlFor='admin-fifth'>Type</label>
                        </div>
                        <div className='admin-btn'>
                            <button>send</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductAndTypeAdd