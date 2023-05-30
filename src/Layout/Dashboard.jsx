import React from 'react';
import { FaCalendar, FaHome, FaShoppingCart, FaWallet } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';
import useCarts from '../components/useCarts';
import UseAdmin from '../components/UseAdmin';

const Dashboard = () => {

    const [cart] = useCarts()

    // TODO
    // const isAdmin = true
    const [isAdmin] = UseAdmin()

    return (
        <div>


            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side bg-[#e0ad60] ">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content">
                        {isAdmin ? <> <li><NavLink to='/dashboard/home'> <FaHome></FaHome> Admin  Home  </NavLink></li>
                            <li><NavLink to='/dashboard/reservation'> <FaCalendar></FaCalendar> Add Items </NavLink> </li>
                            <li><NavLink to='/dashboard/history'> <FaWallet></FaWallet> Manage Items </NavLink> </li>
                            <li><NavLink to='/dashboard/history'> <FaWallet></FaWallet> Manage Bookings </NavLink> </li>
                            <li><NavLink to='/dashboard/allusers'> <FaWallet></FaWallet> All Users </NavLink> </li>

                        </>

                            :




                            <> <li><NavLink to='/dashboard/home'> <FaHome></FaHome> User Home  </NavLink></li>
                                <li><NavLink to='/dashboard/reservation'> <FaCalendar></FaCalendar> Reservation </NavLink> </li>
                                <li><NavLink to='/dashboard/history'> <FaWallet></FaWallet> Payment History </NavLink> </li>
                                <li><NavLink to='/dashboard/mycart'><FaShoppingCart></FaShoppingCart> My Cart

                                    <span className="badge badge-secondary">{cart?.length || 0}</span>
                                </NavLink>  </li>
                            </>}
                        <div className="divider"></div>
                        <li><NavLink to='/dashboard/home'><FaHome></FaHome> Home </NavLink></li>
                        <li><NavLink to='/dashboard/home'> Our Menu  </NavLink></li>
                        <li><NavLink to='/dashboard/home'> Order Food </NavLink></li>



                    </ul>

                </div>
            </div>

        </div>
    );
};

export default Dashboard;