import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Account from '../pages/Account/Account';
import Home from '../pages/Home/Home';
import Layout from './Layout';

const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<Home />} />
                <Route path='account' element={<Account />} />
            </Route>
        </Routes>
    )
}

export default AppRouter;