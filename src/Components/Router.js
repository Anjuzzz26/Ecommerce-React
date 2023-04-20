import React from "react";

import {
    Routes,
    Route
  } from "react-router-dom";

import About from "./About";
import BlogPage from "./BlogPage";
import Contact from "./Contact";
import FAQ from "./FAQ";
import HektoDemo from "./HektoDemo";
import Home from "./Home";
import Login from "./Login";
import OrderCompleted from "./OrderCompleted";
import PageNotFound from "./PageNotFound";
import ProductDetails from "./ProductDetail";
import ShopGrid from "./ShopGrid";
import ShopLeft from "./ShopLeft";
import ShopList from "./ShopList";
import ShoppingCart from "./ShoppingCart";
import SignUp from "./SignUp";
import SingleBlog from "./SingleBlog";
import UpdateProfile from './UpdateProfile';


const Router = () => {
    return(
        <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/home" element={ <Home /> } />
            <Route path="shopgrid" element={ <ShopGrid /> } />
            <Route path="shoplist" element={ <ShopList /> } />
            <Route path="shopleft" element={ <ShopLeft /> } />
            <Route path="/product/:id" element={ <ProductDetails /> } />
            <Route path="cart" element={ <ShoppingCart /> } />
            <Route path="ordercompleted" element={ <OrderCompleted /> } />
            <Route path="hektodemo" element={ <HektoDemo /> } />
            <Route path="login" element={ <Login /> } />
            <Route path="blog" element={ <BlogPage /> } />
            <Route path="singleblog" element={ <SingleBlog /> } />
            <Route path="about" element={ <About /> } />
            <Route path="contact" element={ <Contact /> } />
            <Route path="page" element={ <PageNotFound /> } />
            <Route path="faq" element={ <FAQ /> } />
            <Route path="signup" element={ <SignUp /> } />
            <Route path="updateprofile" element={ <UpdateProfile /> } />
        </Routes>
    );
}

export default Router;