import React from "react";
import './OrderCompleted.css';
import {Link} from "react-router-dom";
import Header from "./Common/Header";
import Footer from './Common/Footer';
import HeadDiv from './Common/HeadDiv';
import Banner from './Common/Banner';
import Button from './Common/Button';

import checklist from './Images/checklist 1.png';
import clock from './Images/clock 1.png';
import Vector15 from './Images/Vector 15.png';
import Vector16 from './Images/Vector 16.png';
import elip70 from './Images/Ellipse 70.png';

const OrderCompleted = () => {
    const txt="Order Completed";
    const msg="Continue Shopping"

    return(
        <div>
            <Header />
            <HeadDiv text={txt} />
            <br/><br/>
            <div className="OCmain">
                <img src={Vector16} alt="Image" className="v1img" />  
                <img src={elip70} alt="Image" className="v3img" />    
                <img src={Vector15} alt="Image" className="v2img" />
                <img src={clock} alt="Image" className="clockimg" />
                <div className="vrline"></div>
                <h2 className="OChead">Your Order Is Completed! </h2>
                <p className="OCtxt">Thank you for your order! Your order is being processed and will be completed within 3-6
                        hours. You will receive an email confirmation when your order is completed.
                </p>
                <div className="OCbtn"><Link to="/shopgrid"><Button text={msg} /></Link></div>
                <img src={checklist} alt="Image" className="checklistimg" />      
                <hr className="hrline" />
            </div>
            <br/><br/><br/><br/>
            <Banner />
            <Footer />

        </div>
    );
}

export default OrderCompleted;