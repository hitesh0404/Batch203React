import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Product from './Product';
import App from './../App';
import Counter from './Counter';
import Navbar from './Navbar';
import ProductDetails from './ProductDetails';
import SearchProduct from './SearchProduct';
import SearchProductResult from './SearchProductResult';
import CountWithUseReduce from './CountWithUseReduce';
function Route(props) {
  function ChildOne(){
    return (
      <>
        <div class="child-component">
          <h1>Hello i am Child one</h1>
        </div>
      </>
    );
  }
    function ChildTwo() {
      return (
        <>
          <div class="child-component">
            <h1>Hello i am Child Two</h1>
          </div>
        </>
      );
    }
    return createBrowserRouter([
      {
        path: "/",
        element: (
          <>
            <Navbar />
            <App />
          </>
        ),
        children: [
          {
            path: "child1",
            element: <ChildOne />,
          },
          {
            path: "child2",
            element: <ChildTwo />,
          },
        ],
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
            <SearchProductResult />
          </>
        ),
      },
      {
        path: "/newcounter",
        element: (
          <>
            <Navbar />
            <CountWithUseReduce />
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