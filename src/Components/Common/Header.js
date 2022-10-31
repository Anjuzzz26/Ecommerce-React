import React from "react";
import "./Header.css";
import Navbar from "./Navbar";
import Topbar from "./Topbar";
import banner1 from '../Images/promotional.png';
import banner2 from '../Images/banner2.jpg';
import banner3 from '../Images/banner3.jpg';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';


const Header = () => {
    return(
        <div>
            <Topbar />
            <Navbar />
            <AwesomeSlider className="aws_slider">
                <div className="slider1"><img src={banner1} alt="image"  /></div>
                <div className="slider2"><img src={banner2} alt="image"  /></div>
                <div className="slider3"><img src={banner3} alt="image"  /></div>
            </AwesomeSlider>        
        </div> 
    );
}

export default Header;