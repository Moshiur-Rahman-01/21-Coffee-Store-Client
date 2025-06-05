import React from 'react';
import { Outlet } from 'react-router';
import Header from './Extra file/Header';

const Root = () => {
    return (
        <div>
            <header>
                <Header></Header>
            </header>
            
            <main className='max-w-7xl mx-auto'>
                <Outlet></Outlet>
            </main>
            
        </div>
    );
};

export default Root;