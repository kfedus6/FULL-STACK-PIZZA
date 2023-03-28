import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './components/AppRouter/AppRouter'
import { useAppDispatch } from './hooks/redux';
import { fetchUserAuthorization } from './store/reducers/ActionCreators';

const App = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (localStorage.getItem('token')) {
            dispatch(fetchUserAuthorization())
        }
    }, [])

    return (
        <BrowserRouter>
            <AppRouter />
        </BrowserRouter>
    )
};

export default App;