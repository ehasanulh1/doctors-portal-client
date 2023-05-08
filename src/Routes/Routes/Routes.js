import About from "../../Pages/About/About";
import Appointment from "../../Pages/Appointment/Appointment";
import ContactUs from "../../Pages/ContactUs/ContactUs";
import Login from "../../Pages/Login/Login";
import Reviews from "../../Pages/Reviews/Reviews";
import SignUp from "../../Pages/SignUp/SignUp";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../../layouts/Main");
const { default: Home } = require("../../Pages/Home/Home");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/appointment',
                element: <Appointment></Appointment>
            },
            {
                path: '/reviews',
                element: <Reviews></Reviews>
            },
            {
                path: '/contact',
                element: <ContactUs></ContactUs>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            }
        ]
    }
])


export default router;