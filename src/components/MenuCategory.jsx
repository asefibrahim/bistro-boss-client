import React from 'react';
import MenuItem from './MenuItem';
import Cover from './Cover';
import { Link } from 'react-router-dom';

const MenuCategory = ({ items, title, img }) => {
    return (
        <div className='w-4/5 mx-auto'>
            {title && <Cover img={img}
                title={title}

            ></Cover>
            }
            <div className='md:grid-cols-2 grid gap-6 w-4/5 mx-auto mb-28'>

                {
                    items.map(popular => <MenuItem popular={popular}></MenuItem>)
                }

            </div>

            <Link to={`/order/${title}`}>
                <button className='btn btn-outline '>Order Now </button>
            </Link>
        </div>
    );
};

export default MenuCategory;