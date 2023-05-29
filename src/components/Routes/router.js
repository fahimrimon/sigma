import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Page/Home/Home/Home";
import Invest from "../Page/Invest/Invest";
import Login from "../Page/Login/Login";
import Mine from "../Page/Mine/Mine";
import Share from "../Page/Share/Share";
import SignUp from "../Page/SignUp/SignUp";
import Trading from "../Page/Trading/Trading";
import Deposit from "../Page/Deposit/Deposit.js"
import Withdraw from "../Page/Withdraw/Withdraw";
import PrivateRoute from "./PrivateRoute";
import PhoneSignUp from "../Page/SignUp/PhoneSignUp/PhoneSignUp";

const router = createBrowserRouter(
    [
        {
            path:'/',
            element : <Main></Main>,
            children:[
            {
                path:'/home',
                element:<PrivateRoute><Home></Home></PrivateRoute>
            },
            {
                path:'/trading',
                element:<Trading></Trading>
            },
            {
                path:'/invest',
                element:<Invest></Invest>
            },
            {
                path:'/share',
                element:<PrivateRoute><Share></Share></PrivateRoute>
            },
            {
                path:'/mine',
                element:<PrivateRoute><Mine></Mine></PrivateRoute>
            },
            {
                path:'/',
                element:<Login></Login>
            },
            {
                path:'/signup',
                element:<SignUp></SignUp>
            },
            {
                path:'/deposit',
                element:<Deposit></Deposit>
            },
            {
                path:'/withdraw',
                element:<Withdraw></Withdraw>
            },
            {
                path:'/phoneSignUp',
                element:<PhoneSignUp></PhoneSignUp>
            }
            ]
        }
    ]
    )

    export default router;