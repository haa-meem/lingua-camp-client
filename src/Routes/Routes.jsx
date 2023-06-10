import {
    createBrowserRouter
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import NotFound from "../Pages/NotFound/NotFound";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Instructors from "../Pages/Instructors/Instructors";
import PrivateRoute from "./PrivateRoute";
import Hidden from "../Pages/Hidden/Hidden";
import Dashboard from "../Layout/Dashboard";
import MyClasses from "../Pages/Dashboard/MyClasses/MyClasses";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'instructors',
                element:<Instructors></Instructors>
            },
            {
                path:'login',
                element:<Login></Login>
            },
            {
                path:'register',
                element:<Register></Register>
            },
            {
                path:'hidden',
                element:<PrivateRoute><Hidden></Hidden></PrivateRoute>
            }
        ]
    },
    {
        path:'dashboard',
        element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children:[
            {
                path:'myselectedclasses',
                element:<MyClasses></MyClasses>
            }
        ]
    },
    {
        path: '*',
        element: <NotFound></NotFound>
    }
]);