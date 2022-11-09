import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import About from "../pages/About";
import AddAService from "../pages/AddAService";
import Blogs from "../pages/Blogs";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Login from "../pages/Login";
import MyReview from "../pages/MyReview";
import NotFound from "../pages/NotFound";
import Services from "../pages/Services";
import SignUp from "../pages/SignUp";
import SingleService from "../pages/SingleService";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/home',
                element: <Home/>
            },
            {
                path: '/about',
                element: <About/>
            },
            {
                path: '/services',
                loader: () => fetch('https://lens-poetry.vercel.app/services'),
                element: <Services/>
            },
            {
                path: '/services/:id',
                loader: ({params}) => fetch(`https://lens-poetry.vercel.app/services/${params.id}`),
                element: <SingleService/>
            },
            {
                path: '/blogs',
                element: <Blogs/>
            },
            {
                path: '/contact',
                element: <Contact/>
            },
            {
                path: '/my-review',
                element: <PrivateRoutes><MyReview/></PrivateRoutes>
            },
            {
                path: '/add-service',
                element: <PrivateRoutes><AddAService/></PrivateRoutes>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/signup',
                element: <SignUp/>
            },
            {
                path: "*",
                element: <NotFound/>
            }
        ]
    }
])

export default router;