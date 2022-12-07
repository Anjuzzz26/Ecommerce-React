import React from "react";
import Header from "./Common/Header";
import Footer from './Common/Footer';
import HeadDiv from './Common/HeadDiv';
import EcommerceItems from './Common/EcommerceItems';
import Banner from './Common/Banner';

import { Link } from "react-router-dom";

import './ShopGrid.css';
import Group44 from './Images/Group 44.png';

import Ecom1 from './Images/Ecom1.png';
import Ecom2 from './Images/Ecom2.png';
import Ecom3 from './Images/Ecom3.png';
import Ecom4 from './Images/Ecom4.png';
import Ecom5 from './Images/Ecom5.png';
import Ecom6 from './Images/Ecom6.png';
import Ecom7 from './Images/Ecom7.png';
import Ecom8 from './Images/Ecom8.png';
import Ecom9 from './Images/Ecom9.png';
import Ecom10 from './Images/Ecom10.png';
import Ecom11 from './Images/Ecom11.png';


const ShopGrid = () => {
    const text="Shop Grid Default"

    const productdetails = [
        {"Image": Ecom1 ,"Title":"Vel elit euismod", "Image2":Group44,"Offerprice":"$26.00","Price":"$42.00"},
        {"Image": Ecom2 ,"Title":"Ultricies condimentum imperdiet", "Image2":Group44,"Offerprice":"$26.00","Price":"$42.00"},
        {"Image": Ecom3 ,"Title":"Vitae suspendisse sed", "Image2":Group44,"Offerprice":"$26.00","Price":"$42.00"},
        {"Image": Ecom4 ,"Title":"Sed at fermentum", "Image2":Group44,"Offerprice":"$26.00","Price":"$42.00"},
        {"Image": Ecom5 ,"Title":"Fusce pellentesque at", "Image2":Group44,"Offerprice":"$26.00","Price":"$42.00"},
        {"Image": Ecom6 ,"Title":"Vestibulum magna laoreet", "Image2":Group44,"Offerprice":"$26.00","Price":"$42.00"},
        {"Image": Ecom7 ,"Title":"Sollicitudin amet orci", "Image2":Group44,"Offerprice":"$26.00","Price":"$42.00"},
        {"Image": Ecom8 ,"Title":"Ultrices mauris sit", "Image2":Group44,"Offerprice":"$26.00","Price":"$42.00"},
        {"Image": Ecom9 ,"Title":"Pellentesque condimentum ac", "Image2":Group44,"Offerprice":"$26.00","Price":"$42.00"},
        {"Image": Ecom10 ,"Title":"Cras scelerisque velit", "Image2":Group44,"Offerprice":"$26.00","Price":"$42.00"},
        {"Image": Ecom11 ,"Title":"Lectus vulputate faucibus", "Image2":Group44,"Offerprice":"$26.00","Price":"$42.00"},
        {"Image": Ecom4 ,"Title":"Purus risus, ut", "Image2":Group44,"Offerprice":"$26.00","Price":"$42.00"},
    ]


    return(
        <div>
            <Header />
            <HeadDiv text={text} />
            <EcommerceItems />
            <div className="shopgridmain">
                <div className="SGItemgrid">
                    {
                        productdetails.map( (item) => (
                            <Link to="/product"><div className="SGItemsdiv">
                                <div className="SGimg">
                                    <img className="SGItemimg1" src={item.Image} alt="Image" />
                                    <br/>
                                </div>
                                <div className="SGdesc">
                                    <text className="SGItem1txt1">{item.Title}</text>
                                    <img className="SGgrp44" src={item.Image2} alt="Image" />
                                    <p className="SGtxt2">{item.Offerprice} </p>
                                    <p className="SGtxt3">{item.Price}</p>
                                </div>
                            </div></Link>
                        ))
                        
                    }      
                </div>
                <Banner />
            </div>

            <Footer />
        </div>
    );
}

export default ShopGrid;