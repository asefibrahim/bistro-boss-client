import React from 'react';

const MenuItem = ({ popular }) => {
    console.log(popular);

    const { image, name, recipe, price } = popular
    return (
        <div className='flex gap-5 mt-12'>

            <div className=''>
                <img style={{ borderRadius: '0 200px 200px 200px' }} className='w-[100px]' src={image} alt="" />
                <p className='uppercase'>{name}</p>
                <p>{recipe}</p>
            </div>
            <div>
                <p className='text-yellow-500'>${price}</p>
            </div>

        </div>
    );
};

export default MenuItem;