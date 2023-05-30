import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useCarts from './useCarts';

const FoodCArd = ({ item }) => {

    const { _id, name, image, price, recipe } = item
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const [, refetch] = useCarts()

    const handleAddToCart = (item) => {
        console.log(item);
        if (user && user.email) {
            const cartItems = { menuItemId: _id, name, image, price, recipe, email: user.email }
            fetch('http://localhost:5000/carts', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartItems)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch()
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Your work has been saved',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'please login to add products?',

                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }
    }
    return (
        <div>
            <div class="w-full h-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                <img class="object-cover  w-full   h-56" src={image} alt="avatar" />
                <p className='bg-slate-900 absolute   text-white '>{price}</p>
                <div class="py-5 text-center">
                    <a href="#" class="block text-xl font-bold text-gray-800 dark:text-white" tabindex="0" role="link">{name}</a>
                    <span class="text-sm text-gray-900 dark:text-gray-200">{recipe ? recipe.slice(0, 20) : ''}</span>

                </div>
                <div className='text-center pb-5'>
                    <button onClick={() => handleAddToCart(item)} className='btn btn-outline text-xs'>Add to Card</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCArd;