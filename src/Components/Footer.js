import React from "react";
import './Footer.css';
import footer from '../Images/footer.png';
import Footerbar from "./Footerbar";

const Footer = () => {
    return(
      <>
        <div className="footer">
            <div className="block1">
                <h3>Hekto</h3>
                <form className="example footersearch" action="#">
                    <input type="text"name="search" /><i>
                    <button type="submit"><i className="fa fa-search"></i></button></i>
                </form>
                <p className="contactinfo">Contact Info</p>
                <p className="fp">17 Princess Road, London, Greater London NW1 8JR, UK</p>
            </div>  
            <div className="block2">
                <div>
                    <h2>Categories</h2>
                    <ul>
                        <li>Laptops & Computers</li>
                        <li>Cameras & Photography</li>
                        <li>Smart Phones & Tablets</li>
                        <li>Video Games & Consoles</li>
                        <li>Waterproof Headphones</li>
                    </ul>
                </div>
                <div className="customer">
                    <h2>Customer Care</h2>
                    <ul>
                        <li>My Account</li>
                        <li>Discount</li>
                        <li>Returns</li>
                        <li>Orders History</li>
                        <li>Order Tracking</li>
                    </ul>
                </div>
                <div className="pages">
                    <h2>Pages</h2>
                    <ul>
                        <li>Blog</li>
                        <li>Browse the shop</li>
                        <li>Category</li>
                        <li>Pre-built Pages</li>
                        <li>Visual Composer Elements</li>
                        <li>WooCommerce Pages</li>
                    </ul>
                </div>    
            </div>         
        </div>
        <Footerbar />
     </>
    );
}

export default Footer;