import { createBrowserRouter } from "react-router-dom";
import Root from "../../components/Root/Root";
import Home from "../../pages/Home/Home";
import Error from "../../components/Error/Error";
import Details from "../../pages/Details/Details";
import Login from "../../components/Login/Login";
import Signup from "../../components/Signup/Signup";
import PrivetRoute from "../PrivetRoute/PrivetRoute";
import Blog from "../../pages/Blog/Blog";
import Team from "../../pages/Team/Team";
import Orders from "../../pages/Orders/Orders";


const MainRoute = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader:() => fetch('/services.json')
            },
            {
                path: '/details/:id',
                element: <PrivetRoute><Details></Details></PrivetRoute>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/team',
                element: <PrivetRoute><Team></Team></PrivetRoute>
            },
            {
                path: '/order',
                element: <PrivetRoute><Orders></Orders></PrivetRoute>
            }

        ]
    }
])

export default MainRoute;