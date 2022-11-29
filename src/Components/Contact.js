import React from "react";
import './Contact.css';

import Header from "./Common/Header";
import Footer from './Common/Footer';
import HeadDiv from './Common/HeadDiv';
import Button from './Common/Button';

import blue from './Images/blue.png';
import Ellipse65 from './Images/Ellipse 65.png';
import sky from './Images/sky.png';
import Ellipse44 from './Images/Ellipse 44.png';
import Ellipse45 from './Images/Ellipse 45.png';
import Ellipse46 from './Images/Ellipse 46.png';
import Ellipse47 from './Images/Ellipse 47.png';
import Grp124 from './Images/Group 124.png';

const Contact = () => {
    return(
        <div>
		<Header />
		<HeadDiv text={"Contact Us"} />
		
        <br/><br/><br/>
        <div className="ContactSection1">
            
            <div className="Contact1_gridItem1">
                <h3 className="Contacthead1">Information About us</h3>
                <p className="Contacttxt1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Mattis neque ultrices mattis aliquam, malesuada diam est. 
                    Malesuada sem tristique amet erat vitae eget dolor lobortis. 
                    Accumsan faucibus vitae lobortis quis bibendum quam.
                </p>
                <img src={blue} alt="Image" className="Contactimg1" />
                <img src={Ellipse65} alt="Image" className="Contactimg2" />
                <img src={sky} alt="Image" className="Contactimg3" />
            </div>

            <div className="Contact1_gridItem2">
                <h3 className="Contacthead2">Contact Way</h3>
                <div className="Contactwaygrid">
                    <div>
                        <img src={Ellipse44} alt="Image" className="Contactimg4" />
                        <p className="Contacttxt2">Tel: 877-67-88-99</p>
                        <p className="Contacttxt3">E-Mail: shop@store.com</p>
                    </div>
                    <div>
                        <img src={Ellipse45} alt="Image" className="Contactimg5" />
                        <p className="Contacttxt4">Support Forum</p>
                        <p className="Contacttxt5">For over 24hr</p>
                    </div>
                    <div>
                        <img src={Ellipse46}alt="Image" className="Contactimg6" />
                        <p className="Contacttxt6">20 Margaret st, London</p>
                        <p className="Contacttxt7">Great britain, 3NM98-LK</p>
                    </div>
                    <div>
                        <img src={Ellipse47} alt="Image" className="Contactimg7" />
                        <p className="Contacttxt8">Free standard shipping</p>
                        <p className="Contacttxt9">on all orders.</p>
                    </div>
                </div>
            
            </div>  

        </div>
        <div className="ContactSection2">
            <div>
                <h3 className="Contacthead3">Get In Touch</h3>
                <p className="Contacttxt10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Mattis neque ultrices  tristique amet erat vitae eget dolor los vitae lobortis quis bibendum quam.</p>
                <form className="Contactform">
                    <input type="text" placeholder="  Your Name*" className="Contacttxtbox" />
                    <input type="text" placeholder="  Your E-mail" className="Contacttxtbox" />
                    <input type="text" placeholder="  Subject*" className="Contacttxtbox2"  />
                    <textarea placeholder="  Type your Message*" />
                    <div className="Contactbtn">
                        <Button text={"Send Mail"} />
                    </div>
                </form>
            </div>
            <div>
                <img src={Grp124} alt="Image" className="Contactimgmain" />
            </div>
        </div>


		<br/><br/><br/>
		<Footer />

        </div>
    );
}

export default Contact;