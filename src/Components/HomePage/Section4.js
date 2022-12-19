import React from "react";
import './Section4.css';
import Button from '../Common/Button';

import Ellipse_63 from '../Images/Ellipse 63.png';
import bluesofa from '../Images/bluesofa.png';
import Ellipse_65 from '../Images/Ellipse 65.png';
import Ellipse_66 from '../Images/Ellipse 66.png';
import Ellipse_67 from '../Images/Ellipse 67.png';


const Section4 = () => {
    return(
        <div className="section4main">
            <div className="s4img">
                <img className="s4bg" src={Ellipse_63} alt="Img" />
                <img className="s4sofa" src={bluesofa} alt="Img" />
            </div>
            <div className="s4griddesc">
                <div>   
                    <p className="s4head">Unique Features Of leatest & Trending Poducts</p>
                    <img className="bullet1" src={Ellipse_65} alt="Img" />
                    <p className="s4list">All frames constructed with hardwood solids and laminates</p>
                        
                    <img className="bullet2" src={Ellipse_66} alt="Img" />
                    <p className="s4list">Reinforced with double wood dowels, glue, screw - nails corner blocks and machine nails</p>
                
                    <img className="bullet3" src={Ellipse_67} alt="Img" />
                    <p className="s4list">Arms, backs and seats are structurally reinforced</p>
                </div>
                <div className="S4btngrid">
                    <div className="s4btn">
                            <Button text={"Add To Cart"} />
                    </div>
                    <div>
                        <p className="s4item">B&B Italian Sofa </p>
                        <p className="s4price">$32.00</p>
                    </div>
                </div>
            
            </div>

        </div>
    );
}

export default Section4;