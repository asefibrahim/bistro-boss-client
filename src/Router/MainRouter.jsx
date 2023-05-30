import {
    createBrowserRouter,

} from "react-router-dom";
import MainLayOut from "../Layout/MainLayOut";
import MainHome from "../Pages/HomePage/MainHome/MainHome";
import MAinMenu from "../Pages/Menu/MainMenu/MAinMenu";
import Order from "../Pages/OrderPage/Order";
import Login from "../Pages/Athentication/Login/Login";
import SignUp from "../Pages/Athentication/SignUp/SignUp";
import Secrete from "../Pages/SecratePage/Secrate";
import PrivateRoutes from "./PrivateRoutes";
import Dashboard from "../Layout/Dashboard";
import MyCart from "../Pages/DashboardPage/MyCart";
import AllUsers from "../Pages/DashboardPage/AllUsers/AllUsers";
const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayOut></MainLayOut>,
        children: [
            {
                path: '/',
                element: <MainHome></MainHome>
            },
            {
                path: '/menu',
                element: <MAinMenu></MAinMenu>
            },
            {
                path: '/order/:category',
                element: <Order></Order>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/secret',
                element: <PrivateRoutes><Secrete></Secrete></PrivateRoutes>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
        children: [
            {
                path: 'mycart',
                element: <MyCart></MyCart>
            },
            {
                path: 'allusers',
                element: <AllUsers></AllUsers>
            }
        ]
    }
]);

export default router