import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

const SetLanguage = () => {
    const [dropdownCheck, setDropdownCheck] = useState(false)

    const { t, i18n } = useTranslation()

    const changeLanguage = (lang: string) => {
        i18n.changeLanguage(lang)
    }

    const language = () => {
        const languageLetters = localStorage.getItem('i18nextLng')
        if (languageLetters) {
            return languageLetters
        }
        return 'UA'
    }

    const changeLanguageCheck = () => {
        if (dropdownCheck === false) {
            setDropdownCheck(true)
        } else {
            setDropdownCheck(false)
        }
    }

    return (
        <>
            <div className='dropdown-language'>
                <div className='dropdown-language__select' onClick={changeLanguageCheck}>
                    {language() === 'UA'
                        ?
                        <img className='icon-language' src={process.env.REACT_APP_API_URL + 'uk.png'} alt="UA" />
                        :
                        <img className='icon-language' src={process.env.REACT_APP_API_URL + 'ue.png'} alt="EN" />
                    }
                    <div className='dropdown-language__select-tittle'>
                        {language() === 'UA'
                            ?
                            <>
                                <span className='titte-language'>{t('header.ukraine')}</span>
                                <img className='chevron-down__language' src={process.env.REACT_APP_API_URL + 'chevron-down.png'} alt="chevron-down" />
                            </>
                            :
                            <>
                                <span className='titte-language'>{t('header.english')}</span>
                                <img className='chevron-down__language' src={process.env.REACT_APP_API_URL + 'chevron-down.png'} alt="chevron-down" />
                            </>
                        }
                    </div>
                </div>
            </div>
            <div className={dropdownCheck ? 'dropdown-list-block' : 'dropdown-none'}>
                <div className='dropdown-list__language'>
                    <div onClick={() => setDropdownCheck(false)}>
                        <div onClick={() => changeLanguage('UA')}>
                            <img className='icon-language' src={process.env.REACT_APP_API_URL + 'uk.png'} alt="UA" />
                            <span className='titte-language'>{t('header.ukraine')}</span>
                        </div>
                    </div>
                    <div onClick={() => setDropdownCheck(false)}>
                        <div onClick={() => changeLanguage('EN')}>
                            <img className='icon-language' src={process.env.REACT_APP_API_URL + 'ue.png'} alt="EN" />
                            <span className='titte-language'>{t('header.english')}</span>
                        </div>
                    </div>
                </div>
                <div className='dropdown-list__language-menu'>
                    <div onClick={() => setDropdownCheck(false)}>
                        <div onClick={() => changeLanguage('UA')}>
                            <img className='icon-language' src={process.env.REACT_APP_API_URL + 'uk.png'} alt="UA" />
                            <span className='titte-language'>{t('header.ukraine')}</span>
                        </div>
                    </div>
                    <div onClick={() => setDropdownCheck(false)}>
                        <div onClick={() => changeLanguage('EN')}>
                            <img className='icon-language' src={process.env.REACT_APP_API_URL + 'ue.png'} alt="EN" />
                            <span className='titte-language'>{t('header.english')}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SetLanguage;