import React from 'react';
import { Outlet } from 'react-router-dom';
import Products from './Products';

const WithProducts = () => {
    return (
        <>
            <Outlet />
            <Products />
        </>
    );
};

export default WithProducts;