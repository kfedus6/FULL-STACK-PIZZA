import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './components/AppRouter';
import { useAppDispatch } from './hooks/redux';
import { fetchUserAuthorization } from './store/reducers/ActionCreators';

const App: React.FC | any = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        checkUser()
    }, [])

    const checkUser = async () => {
        await dispatch(fetchUserAuthorization())
    }

    return (
        <BrowserRouter>
            <AppRouter />
        </BrowserRouter>
    )
};

export default App;