import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { useAppSelector } from '../hooks/redux';
import Account from '../pages/Account/Account';
import ProductAndTypeAdd from '../pages/Admin/ProductAndTypeAdd';
import Home from '../pages/Home/Home';
import Layout from './Layout';

const AppRouter = () => {
    const { is_admin }: any = useAppSelector(state => state.userSlice)

    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<Home />} />
                <Route path='account' element={<Account />} />
                {is_admin ? <Route path='productAndType' element={<ProductAndTypeAdd />} /> : <></>}
            </Route>
        </Routes>
    )
}

export default AppRouter;