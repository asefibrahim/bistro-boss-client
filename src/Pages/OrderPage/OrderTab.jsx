import React from 'react';
import FoodCArd from '../../components/FoodCArd';

const OrderTab = ({ item }) => {
    return (

        <div className='grid md:grid-cols-3 gap-8 w-4/5 mx-auto'>
            {
                item.map(item => <FoodCArd item={item}></FoodCArd>)
            }


        </div>
    );
};

export default OrderTab;