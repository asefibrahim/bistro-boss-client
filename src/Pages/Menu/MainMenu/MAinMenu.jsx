import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../../components/Cover';
import img from '../../../assets/menu/banner3.jpg'
import desertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'

import useMenu from '../../../components/useMenu';
import MenuCategory from '../../../components/MenuCategory';
import SectionTitle from '../../../components/SectionTitle';



const MAinMenu = () => {

    const [menu] = useMenu()
    const salads = menu.filter(m => m.category === 'salad')
    const soups = menu.filter(m => m.category === 'soup')
    const desserts = menu.filter(m => m.category === 'dessert')
    const pizzas = menu.filter(m => m.category === 'pizza')
    const offered = menu.filter(m => m.category === 'offered')


    return (
        <div>
            <Helmet>
                <title>Bistro boss | menu</title>

            </Helmet>


            {/* main cover */}


            <Cover img={img}
                title={'Our menu'}
                subtitle={"Ready to use Tailwind CSS Heros Components, copy-paste HTML components code, and build your awesome website, dashboard, landing page, and more."}
            ></Cover>


            {/* Offered  items*/}


            <SectionTitle heading="today's offer" subheading={"Don't Miss"}></SectionTitle>

            <MenuCategory items={offered}></MenuCategory>

            {/* Desert items */}

            <MenuCategory items={desserts} title={'Dessert'} img={desertImg}></MenuCategory>
            <MenuCategory items={salads} title={'Salad'} img={saladImg}></MenuCategory>
            <MenuCategory items={pizzas} title={'Pizza'} img={pizzaImg}></MenuCategory>
            <MenuCategory items={soups} title={'Drinks'} img={soupImg}></MenuCategory>

        </div>
    );
};

export default MAinMenu;