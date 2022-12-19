import React from "react";
import './Section6.css';

import ellipse64 from '../Images/Ellipse 64.png';
import tortuga from '../Images/tortuga-01-b 1.png';
import vector from '../Images/Vector.png';
import Button from '../Common/Button.js';

const Section6 = () => {
    const text="Shop Now";
    return(
        <div className="section6main">
            <br/>
            <h1 className="s6head">Discount Item</h1>
            <br/>
            <div className="s6_nav">
            <header >
                <nav>
                    <ul>
                        <li><a href="/#">Wood Chair</a></li>
                        <li><a href="/#">Plastic Chair</a></li>
                        <li><a href="/#">Sofa Colletion</a></li>
                    </ul>
                </nav>
            </header></div>
            <br/><br/><br/>
            <div className="s6grid">
                <div className="s6desc">
                
                    <text className="s6txt1">20% Discount Of All Products</text>
                    <p className="s6txt2">Eams Sofa Compact</p>
                    <p className="s6txt3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                          Eu eget feugiat habitasse nec, bibendum condimentum.</p>
                    <img className="s6tick1" src={vector} alt="Img" />                
                    <p className="s6list1">Material expose like metals</p>
                    <img className="s6tick2" src={vector} alt="Img" />
                    <p className="s6list2">Clear lines and geomatric figures</p>
                    <img className="s6tick3" src={vector} alt="Img" />
                    <p className="s6list3">Simple neutral colours.</p>
                    <img className="s6tick4" src={vector} alt="Img" />            
                    <p className="s6list4">Material expose like metals</p>
                    <div className="s6button"><Button text={text}  /></div>
                </div>
                <div className="s6img">
                    <img className="s6bg" src={ellipse64} alt="Img" />            
                    <img className="s6sofa" src={tortuga} alt="Img" />            
                </div>
            </div>
        </div>
    );
}

export default Section6;