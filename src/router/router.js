import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import About from "../pages/About";
import Blogs from "../pages/Blogs";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Services from "../pages/Services";

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
                element: <Services/>
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
                path: "*",
                element: <NotFound/>
            }
        ]
    }
])

export default router;