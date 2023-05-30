import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Nav } from '../Shared/Nav';
import Footer from '../Shared/Footer';

const MainLayOut = () => {
    const location = useLocation()
    console.log(location);

    const NoNavFoo = location.pathname.includes('login') || location.pathname.includes('signup')
    return (
        <div>
            {NoNavFoo || <Nav></Nav>}
            <Outlet></Outlet>
            {NoNavFoo || <Footer></Footer>}
        </div>
    );
};

export default MainLayOut;