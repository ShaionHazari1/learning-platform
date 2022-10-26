import { createBrowserRouter } from "react-router-dom";
import Blog from "../Blog/Blog";
import Course from "../Course/Course";
import Home from "../Home/Home";
import Main from "../Layout/Main";
import Login from "../Shared/Login/Login";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/course',
                element: <Course></Course>
            },
            {
                path: '/faq',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element:<Blog></Blog>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>

            }
        ]

    }
])