import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
    return (
        <div className='layout'>
            <header className='header-page'>
                <Header />
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default Layout;