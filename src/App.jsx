import React from "react";
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
  Router,
} from "react-router-dom";
import Root from './Root';
import About from './page/about/About';
import Home from './page/home/Home';
import Product_details from "./page/product-details-page/Product_details";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />

        <Route
    path="product-details/:id"
    element={<Product_details />}
  />


      
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />
}

export default App