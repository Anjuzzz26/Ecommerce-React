import React from "react";
import './Footer.css';
import Footerbar from "./Footerbar";
import {Link} from "react-router-dom";
import Button from "./Button";

const Footer = () => {
    return(
      <>
        <div className="footer">
            <div className="block1">
                <h3>Hekto</h3>
                <div className="footertextbox">
                <form className="footersearch" action="#">
                    <input type="text" name="search" placeholder="Enter Email Address" />
                    <Button text={"Sign Up"} />
                </form>
                </div>
                <p className="contactinfo">Contact Info</p>
                <p className="fp">17 Princess Road, London, Greater London NW1 8JR, UK</p>
            </div>  
            <div className="block2">
                <div>
                    <h2>Categories</h2>
                    <ul>
                        <li><Link to="/hektodemo">HektoDemo</Link></li>
                        <li><Link to="/faq">FAQ</Link></li>
                        <li><a href="/#">Laptops & Computers</a></li>
                        <li><a href="/#">Cameras & Photography</a></li>
                        <li><a href="/#">Smart Phones & Tablets</a></li>
                        <li><a href="/#">Video Games & Consoles</a></li>
                        <li><a href="/#">Waterproof Headphones</a></li>
                    </ul>
                </div>
                <div className="customer">
                    <h2>Customer Care</h2>
                    <ul>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/updateprofile">My Account</Link></li>
                        <li><a href="/#">Discount</a></li>
                        <li><a href="/#">Returns</a></li>
                        <li><a href="/#">Orders History</a></li>
                        <li><a href="/#">Order Tracking</a></li>
                    </ul>
                </div>
                <div className="pages">
                    <h2>Pages</h2>
                    <ul>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><a href="/#">Browse the shop</a></li>
                        <li><a href="/#">Category</a></li>
                        <li><a href="/#">Pre-built Pages</a></li>
                        <li><a href="/#">Visual Composer Elements</a></li>
                        <li><a href="/#">WooCommerce Pages</a></li>
                    </ul>
                </div>    
            </div>         
        </div>
        <Footerbar />
     </>
    );
}

export default Footer;