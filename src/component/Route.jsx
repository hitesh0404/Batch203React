import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Product from './Product';
import App from './../App';
import Counter from './Counter';
import Navbar from './Navbar';
function Route(props) {
    return createBrowserRouter([
        {
            path:'/',
            element:(<> <Navbar/><App/> </>)
        },{
            path:'/products',
            element:(<><Navbar/><Product/></>)
        },{
            path:'/counter',
            element:(<><Navbar/><Counter/></>)
        }
    ])
}
export default Route;