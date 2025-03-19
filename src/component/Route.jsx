import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Product from './Product';
import App from './../App';
import Counter from './Counter';
import Navbar from './Navbar';
import ProductDetails from './ProductDetails';
import SearchProduct from './SearchProduct';
import SearchProductResult from './SearchProductResult';
function Route(props) {
    return createBrowserRouter([
      {
        path: "/",
        element: (
          <>
            {" "}
            <Navbar />
            <App />{" "}
          </>
        ),
      },
      {
        path: "/products/:id",
        element: (
          <>
            <Navbar />
            <ProductDetails />
          </>
        ),
      },
      {
        path: "/products",
        element: (
          <>
            <Navbar />
            <Product />
          </>
        ),
      },
      {
        path: "/counter",
        element: (
          <>
            <Navbar />
            <Counter />
          </>
        ),
      },
      {
        path: "/search-result/:q",
        element: (
          <>
            <Navbar />
            <SearchProductResult/>
          </>
        ),
      },
      {
        path: "/*",
        element: (
          <>
            <h1>
              opps 404
              <br /> There is no way
            </h1>
          </>
        ),
      },
    ]);
}
export default Route;