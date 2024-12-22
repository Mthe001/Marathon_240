import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';

const MainLayout = () => {
    return (
        <div className='max-w-7xl mx-auto dark:bg-zinc-900'>
            <Navbar />
            <section className='min-h-screen'>
                <Outlet />
            </section>
            <Footer />
        </div>
    );
};

export default MainLayout;