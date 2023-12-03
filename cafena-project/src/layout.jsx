import React from 'react'
import Navbar from './Layout/Navbar/index';
import { Outlet } from 'react-router';
import Footer from './Layout/Footer';
import { PositionProvider } from './Context/Position';

function Layout() {
    return (
        <>
            <PositionProvider>
                <Navbar />
            </PositionProvider>
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout
