import React, { useState } from 'react';
import coverImg from '../../assets/shop/banner2.jpg'
import Cover from '../../components/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../components/useMenu';
import FoodCArd from '../../components/FoodCArd';
import OrderTab from './OrderTab';
import { useParams } from 'react-router-dom';

const Order = () => {
    const [menu] = useMenu()

    const categories = ['Pizza', 'Soup', 'Salad', 'Drinks', 'Offered']
    const { category } = useParams()
    console.log(category);
    const initialIndex = categories.indexOf(category)
    const [tabindex, setTAbIndex] = useState(initialIndex)
    const salads = menu.filter(m => m.category === 'salad')
    const soups = menu.filter(m => m.category === 'soup')
    const desserts = menu.filter(m => m.category === 'dessert')
    const pizzas = menu.filter(m => m.category === 'pizza')
    const offered = menu.filter(m => m.category === 'offered')
    console.log(tabindex);

    return (
        <div>
            <Cover title={"Order Food"} img={coverImg}></Cover>


            <Tabs defaultIndex={tabindex} onSelect={(index) => setTAbIndex(index)}>
                <TabList>
                    <Tab>Pizza </Tab>
                    <Tab>Soup</Tab>
                    <Tab>Salad</Tab>
                    <Tab>Drinks</Tab>
                    <Tab>Offered</Tab>
                </TabList>

                <TabPanel>
                    <OrderTab item={pizzas}></OrderTab>
                </TabPanel>

                <TabPanel>
                    <OrderTab item={soups}></OrderTab>
                </TabPanel>

                <TabPanel>
                    <OrderTab item={salads}></OrderTab>
                </TabPanel>

                <TabPanel>
                    <OrderTab item={desserts}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab item={offered}></OrderTab>
                </TabPanel>

            </Tabs>


        </div>
    );
};

export default Order;