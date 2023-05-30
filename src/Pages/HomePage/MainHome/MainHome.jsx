import React from 'react';
import Banner from '../HomeChildren/Banner';
import Category from '../HomeChildren/Category';
import Menu from '../HomeChildren/Menu';
import Featured from '../HomeChildren/Featured/Featured';
import Testimonials from '../HomeChildren/Testimunials/Testimunials';
import { Helmet } from 'react-helmet-async';
const MainHome = () => {
    return (
        <div>

            <Helmet>
                <title>Bistro boss | home</title>

            </Helmet>

            <Banner></Banner>
            <Category></Category>
            <Menu></Menu>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default MainHome;