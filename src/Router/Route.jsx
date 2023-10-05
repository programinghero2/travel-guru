import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../pages/Home/Home";
import News from "../pages/News/News";
import Blog from "../pages/Blog/Blog";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Destination from "../pages/Destination/Destination";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import BookingDetails from "../BookingDetails/BookingDetails";

const Route = createBrowserRouter([
    {
        path:"/",
        element:<Root></Root>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/news",
                element:<News></News>
            },
            {
                path:"/destination",
                element:<Destination></Destination>
            },
            {
                path:"/blog",
                element:<Blog></Blog>
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/register",
                element:<Register></Register>
            },
            {
                path:"/bookingDetails",
                element:<PrivateRoute><BookingDetails></BookingDetails></PrivateRoute>
            }
        ]
    }
])

export default Route;