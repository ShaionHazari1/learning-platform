import { createBrowserRouter } from "react-router-dom";
import Blog from "../Blog/Blog";
import Course from "../Course/Course";
import Faq from "../Faq/Faq";
import Home from "../Home/Home";
import Main from "../Layout/Main";
import News from "../News/News";
import Login from "../Shared/Login/Login";
import Register from "../Shared/Register/Register";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement:<div>This page is not Found 404 ..please Reload</div>,
        children: [
            {
                path: '/home',
                element: <Home></Home>
            },
           {
                path: '/course/:id',
                element: <Course></Course>,
                loader:({params})=> fetch(`http://localhost:5000/courses/${params.id}`)
            }, 
            {
                path: '/news/:id',
                element: <News></News>,
                loader:({params})=> fetch(`http://localhost:5000/news/${params.id}`)
            },
            {
                path: '/faq',
                element: <Faq></Faq>
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

            },
            {
                path:'/register',
                element:<Register></Register>

            }
        ]

    }
])