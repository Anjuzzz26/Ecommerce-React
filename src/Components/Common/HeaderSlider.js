import React from "react";
import "./HeaderSlider.css";
import {Link} from "react-router-dom";
import banner1 from '../Images/promotional.png';
import banner2 from '../Images/banner2.jpg';
import banner3 from '../Images/banner3.jpg';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';


const Header = () => {
    return(
        <div>
            <AwesomeSlider className="aws_slider">
                <div className="slider1"><Link to="/shopgrid"><img src={banner1} alt="image" className="sliderimg" /></Link></div>
                <div className="slider2"><img src={banner2} alt="image" className="sliderimg" /></div>
                <div className="slider3"><img src={banner3} alt="image" className="sliderimg" /></div>
            </AwesomeSlider>        
        </div> 
    );
}

export default Header;