import React from "react";
import './Section1.css';
import image_1168 from '../Images/image 1168.png';
import image_1 from '../Images/image 1.png';
import image_1169 from '../Images/image 1169.png';
import image_3 from '../Images/image 3.png';
import group141 from '../Images/Group 141.png';
import group169 from '../Images/Group 169.png';
import group28 from '../Images/Group 28.png';
import heart from '../Images/uil_heart-alt.png';
import searchplus from '../Images/uil_search-plus.png';
import 'react-awesome-slider/dist/styles.css';

const Section1 = () => {
    return(
        <div className="section1main">
            <h1 className="fpheading">Featured Products</h1>
            <div className="featured">
                <div className="fproducts">
                    <div className="fsofas">
                        
                    <div className="fphover1">
                            <img className="fpcart" src={group28} alt="Cart" />
                            <img className="fpheart" src={heart} alt="Wishlist" />
                            <img className="fpsearch" src={searchplus} alt="Search" />
                        </div>
                        <div><img className="featuredimg1" src={image_1168} alt="Sofa" /></div>
                        
                        <div><button type="submit">View Details</button></div>
                    </div>
                    <div>
                        <p className="fp1">Cantilever chair</p>
                        <img className="fpslider_icon" src={group141} alt="Cart" />
                        <p className="fp2">Code - Y523201</p>
                        <p className="fp3">$42.00</p>
                    </div>
                </div>
                <div className="fproducts">
                    <div className="fsofas">
                        <div className="fphover2">
                            <img className="fpcart" src={group28} alt="Cart" />
                            <img className="fpheart" src={heart} alt="Wishlist" />
                            <img className="fpsearch" src={searchplus} alt="Search" />
                        </div>
                        <div><img className="featuredimg2" src={image_1} alt="Sofa" /></div>
                        <div><button type="submit">View Details</button></div>
                    </div>
                    <div>
                        <p className="fp1">Cantilever chair</p>
                        <img className="fpslider_icon" src={group141} alt="Cart" />
                        <p className="fp2">Code - Y523201</p>
                        <p className="fp3">$42.00</p>
                    </div>
                </div>
                <div className="fproducts">
                    <div className="fsofas">
                        <div className="fphover1">
                            <img className="fpcart" src={group28} alt="Cart" />
                            <img className="fpheart" src={heart} alt="Wishlist" />
                            <img className="fpsearch" src={searchplus} alt="Search" />    
                        </div>
                        <div><img className="featuredimg3" src={image_1169} alt="Sofa" /></div>
                        <div><button type="submit" >View Details</button></div>
                    </div>
                    <div>
                        <p className="fp1">Cantilever chair</p>
                        <img className="fpslider_icon" src={group141} alt="Cart" />
                        <p className="fp2">Code - Y523201</p>
                        <p className="fp3">$42.00</p>
                    </div>
                </div>
                <div className="fproducts">
                    <div className="fsofas">
                        <div className="fphover2">
                            <img className="fpcart" src={group28} alt="Cart" />
                            <img className="fpheart" src={heart} alt="Wishlist" />
                            <img className="fpsearch" src={searchplus} alt="Search" />
                        </div>
                        <div><img className="featuredimg4" src={image_3} alt="Sofa" /></div>
                        <div><button type="submit">View Details</button></div>
                    </div>
                    <div>
                        <p className="fp1">Cantilever chair</p>
                        <img className="fpslider_icon" src={group141} alt="Cart" />
                        <p className="fp2">Code - Y523201</p>
                        <p className="fp3">$42.00</p>
                    </div>
                </div>
            </div>
            <br/>
            <img className="fpslider_iconmain" src={group169} alt="Cart" />
        </div>
    );
}

export default Section1;