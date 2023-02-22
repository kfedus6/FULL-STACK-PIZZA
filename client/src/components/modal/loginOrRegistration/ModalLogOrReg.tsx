import React from 'react'

import './modalLogOrReg.css'

interface PropsModalLogOrReg {
    modalLogOrReg: boolean,
    setModalLogOrReg: any
}

const ModalLogOrReg = ({ modalLogOrReg, setModalLogOrReg }: PropsModalLogOrReg) => {
    return (
        <div className={modalLogOrReg ? 'modal-log__reg-active modal-log__reg ' : 'modal-log__reg'} onClick={() => setModalLogOrReg(false)}>
            <div className="modal-log__reg-content" onClick={e => e.stopPropagation()}>
                <div className='modal-registration'>
                    <div className='modal-registration-close' onClick={() => setModalLogOrReg(false)}>
                        <img src={process.env.REACT_APP_API_URL + 'close-pizza.png'} alt="close" />
                    </div>
                    <div className='modal-registration-form'>
                        <input type="text" />
                    </div>
                    <div className='modal-registration-form'>
                        <input type="text" />
                    </div>
                    <div className='modal-registration-form'>
                        <input type="text" />
                    </div>
                    <div className='modal-registration-form'>
                        <input type="text" />
                    </div>
                    <div className='modal-registration-form-btn'>
                        <button>send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalLogOrReg