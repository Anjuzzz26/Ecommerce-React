import React from "react";
import './About.css';
import './HomePage/Section3.css'
import {Link} from 'react-router-dom';

import Header from "./Common/Header";
import Footer from './Common/Footer';
import HeadDiv from './Common/HeadDiv';
import Button from './Common/Button';

import Rect56 from "./Images/Rectangle 56.png";
import Rect57 from "./Images/Rectangle 57.png";
import comments from "./Images/Comments and images.png";
import group from './Images/Group.png';
import cashback from './Images/cashback.png';
import premium from './Images/premium.png';
import support24 from './Images/24hr.png';

const About = () => {
    return(
        <div>
		<Header />
		<HeadDiv text={"About Us"} />
        <br/><br/>

        <div className="AboutSection1">

            <div id="parent">
                <img src={Rect57} alt="Img" className="Aboutimg1" />
                <img src={Rect56} alt="Img" className="Aboutimg2" />
            </div>
            <div className="Aboutdesc">
                <h3 className="Abouthead">Know About Our Ecomerce Business, History</h3>
                <p className="Abouttxt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, 
                    malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis. 
                    Accumsan faucibus vitae lobortis quis bibendum quam.
                </p>
                <div className="Aboutbtn">
                    <Link to="/contact"><Button text={"Contact us"} /></Link>
                </div>
            </div>

        </div>

        <div className="AboutSection2">
                <h3 className="Abouthead2">Our Features</h3>
                <br/>
                    <div className="s3grid">
                        <div className="s3card">
                            <div className="s3flex1">
                                <img className="grp" src={group} alt="Help" />
                            </div>
                            <div className="s3flex2">
                                <br/>
                                <text className="s3txt1 About_s3txt1">Free Delivery</text>
                                <p className="s3txt2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                            </div>
                        </div> 
                        <div className="s3card Aboutcard">
                            <div className="s3flex1">
                                <img className="grp" src={cashback} alt="Help" />
                            </div>
                            <div className="s3flex2">
                                <br/>
                                <text className="s3txt1">100% Cash Back</text>
                                <p className="s3txt2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                            </div>
                        </div>
                        <div className="s3card">
                            <div className="s3flex1">
                                <img className="grp" src={premium} alt="Help" />
                            </div>
                            <div className="s3flex2">
                                <br/>
                                <text className="s3txt1 About_s3txt1">Quality Product</text>
                                <p className="s3txt2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                            </div>
                        </div>
                        <div className="s3card">
                            <div className="s3flex1">
                                <img className="grp" src={support24} alt="Help" />
                            </div>
                            <div className="s3flex2">
                                <br/>
                                <text className="s3txt1 About_s3txt1">24/7 Support</text>
                                <p className="s3txt2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                            </div>
                        </div>
                    </div>        

        </div>        
        <div className="AboutSection3">
            <img src={comments} alt="Img" className="AboutS3img1" />
        </div>

		<br/><br/><br/>
		<Footer />

        </div>
    );
}

export default About;