import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../pages/Shared/Navbar/Navbar';

const Root = () => {
    return (
        <div className='max-w-6xl mx-auto poppins'>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;