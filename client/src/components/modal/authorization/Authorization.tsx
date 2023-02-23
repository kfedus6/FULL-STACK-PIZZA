import React from 'react'
import Login from './Login'
import Registration from './Registration'

import './authorization.css'

const Authorization = ({ isRegistration, setIsRegistration, isShow, setIsShow }: any) => {

    return (
        <div onClick={() => { setIsShow(false) }} className={isShow ? 'modal-log__reg-active modal-log__reg' : 'modal-log__reg'}>
            <div className="modal-log__reg-content" onClick={e => e.stopPropagation()}>
                {isRegistration
                    ?
                    <Registration setIsRegisterOrLog={setIsRegistration} close={setIsShow} />
                    :
                    <Login setIsRegistration={setIsRegistration} close={setIsShow} />
                }
            </div>
        </div>
    )
}

export default Authorization