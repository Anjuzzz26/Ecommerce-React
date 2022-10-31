import React from "react";
import './Section1.css';
import image_1168 from '../Images/image 1168.png';
import image_1 from '../Images/image 1.png';
import image_1169 from '../Images/image 1169.png';
import image_3 from '../Images/image 3.png';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const Section1 = () => {
    return(
        <div className="section1main">
            <h1 className="fpheading">Featured Products</h1>
            <div className="featured">
                <div className="fproducts">
                    <div className="fsofas">
                        <img className="featuredimg1" src={image_1168} alt="Sofa" />
                    </div>
                    <div>
                        <p className="fp1">Cantilever chair</p>
                        <p className="fp2">Code - Y523201</p>
                        <p className="fp3">$42.00</p>
                    </div>
                </div>
                <div className="fproducts">
                    <div className="fsofas">
                        <img className="featuredimg2" src={image_1} alt="Sofa" />
                    </div>
                    <div>
                        <p className="fp1">Cantilever chair</p>
                        <p className="fp2">Code - Y523201</p>
                        <p className="fp3">$42.00</p>
                    </div>
                </div>
                <div className="fproducts">
                    <div className="fsofas">
                        <img className="featuredimg3" src={image_1169} alt="Sofa" />
                    </div>
                    <div>
                        <p className="fp1">Cantilever chair</p>
                        <p className="fp2">Code - Y523201</p>
                        <p className="fp3">$42.00</p>
                    </div>
                </div>
                <div className="fproducts">
                    <div className="fsofas">
                        <img className="featuredimg4" src={image_3} alt="Sofa" />
                    </div>
                    <div>
                        <p className="fp1">Cantilever chair</p>
                        <p className="fp2">Code - Y523201</p>
                        <p className="fp3">$42.00</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Section1;