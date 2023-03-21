import React from 'react'
import Login from './Login'
import Registration from './Registration'

import './authorization.css'

interface AuthorizationProps {
    isRegistration: boolean;
    setIsRegistration: React.Dispatch<React.SetStateAction<boolean>>;
    isShow: boolean;
    setIsShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const Authorization: React.FC<AuthorizationProps> = ({ isRegistration, setIsRegistration, isShow, setIsShow }) => {

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