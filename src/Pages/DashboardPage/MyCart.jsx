import React from 'react';
import useCarts from '../../components/useCarts';
import { FaTrash } from 'react-icons/fa';
import Swal from 'sweetalert2';

const MyCart = () => {

    const [cart, refetch] = useCarts()
    const total = cart.reduce((sum, item) => item.price + sum, 0)


    const handleDelete = (item) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/carts/${item._id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch()
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success')
                        }
                    })
            }
        })
    }


    return (
        <div>
            <div className='flex justify-evenly font-semibold text-2xl h-[80px]'>
                <h1>Total Items : {cart.length}</h1>
                <h1>Total Price : $ {total}</h1>
                <button className='btn btn-sm bg-orange-500'> Pay</button>
            </div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>

                            <th>FOOD</th>
                            <th>ITEM NAME</th>
                            <th>PRICE</th>
                            <th>ACY</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((item, index) => <tr key={index} >
                            <th>
                                <label>
                                    {index + 1}
                                </label>
                            </th>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={item.image} />
                                        </div>
                                    </div>

                                </div>
                            </td>
                            <td>
                                {item.name}
                            </td>
                            <td>$ {item.price}</td>
                            <th>
                                <button onClick={() => handleDelete(item)} className="btn btn-ghost bg-red-500 text-white"><FaTrash /></button>
                            </th>
                        </tr>)
                        }




                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default MyCart;