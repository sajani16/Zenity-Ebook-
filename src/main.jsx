import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import App from "./App";
import HomePage from "./Pages/HomePage";
import ProductPage from "./Pages/ProductPage";
import ProductDetail from "./Component/Layout/Product_Detail";
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";
import Product from "./Component/Layout/Product";
import './index.css';
import Cart from "./Component/Layout/Cart";
import Signup from "./Component/Layout/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <HomePage /> },
      { path:"category/:categoryId", element:<Product/>},
      { path: "products", element: <ProductPage /> },
      { path: "product/:productId", element: <ProductDetail/> },
      { path: "about", element: <AboutPage /> },
      { path: "contact", element: <ContactPage /> },
      { path:"signup",element:<Signup/>},
      { path:"cart", element:<Cart/>},
      
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
