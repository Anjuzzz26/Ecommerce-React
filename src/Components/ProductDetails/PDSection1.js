import React from "react";
import './PDSection1.css';

import Rectangle_134 from '../Images/Rectangle 134.png';
import Rectangle_136 from '../Images/Rectangle 136.png';
import Rectangle_137 from '../Images/Rectangle 137.png';
import Rectangle_138 from '../Images/Rectangle 138.png';
import filledstar from '../Images/Star.png';
import heart from '../Images/uil_heart-alt.png';
import Group_205 from '../Images/Group 205.png';

const PDSection1 = () => {
	return(
		<div className="PDdiv">
                <div className="PDgriditem1">
                    
                    <div className="PDgridimg">
                        <img className="PDimg1" src={Rectangle_134} alt="Image" />
                    </div>
                    
                    <div className="PDgridimg">
                        <img className="PDimg2" src={Rectangle_136} alt="Image" />
                    </div>
                    
                    <div className="PDgridimg">
                        <img className="PDimg3" src={Rectangle_137} alt="Image" />
                    
                    </div>
                </div>
                
                
                <div className="PDgriditem2">
                    <img className="PDimg4" src={Rectangle_138} alt="Image" />
                </div>
                
                
                <div className="PDgriditem3">

                    <h1 className="PDtxt1">Playwood arm chair</h1>
                    <img className="PDstar" src={filledstar} alt="Image" />
                    <img className="PDstar" src={filledstar} alt="Image" />
                    <img className="PDstar" src={filledstar} alt="Image" />
                    <img className="PDstar" src={filledstar} alt="Image" />
                    <img className="PDstar" src={filledstar} alt="Image" />
                    <p className="PDtxt2">(22)</p>
                    <p className="PDtxt3">$32.00 &nbsp;&nbsp;&nbsp;<span>$32.00</span></p>
                    <p className="PDtxt4">Color</p>
                    <p className="PDtxt5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Mauris tellus porttitor purus, et volutpat sit.</p>
                    <p className="PDtxt6">Add To cart</p>
                    <img className="PDheart" src={heart} alt="Image" />
                    <p className="PDtxt7">Categories:</p>
                    <p className="PDtxt8">Tags</p>
                    <p className="PDtxt9">Share</p>
                    <img className="PDshare" src={Group_205} alt="Image" />

                </div>
            </div>
	)
}

export default PDSection1;