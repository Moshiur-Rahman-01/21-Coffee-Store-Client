import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Shared/Navbar';

const Root = () => {
    return (
        <div className='container mx-auto'>
            <header>
                <Navbar></Navbar>
            </header>
            
            <main>
                <Outlet></Outlet>
            </main>
            
        </div>
    );
};

export default Root;