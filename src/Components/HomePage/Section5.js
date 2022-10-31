import React from "react";
import './Section5.css';

import image_1171 from '../Images/image 1171.png';
import image_1170 from '../Images/image 1170.png';
import image_31 from '../Images/image 31.png';
import image_32 from '../Images/image32.png';

const Section5 = () => {
    return(
        <div className="section5main">
            <br/>
            <h1 className="s5head">Trending Products</h1>
            <div className="s5grid">
                <div className="s5products">
                    <div className="s5sofas">
                        <img className="s5img1" src={image_1171} alt="Sofa" />
                    </div>
                    <div>
                        <p className="s5txt1">Cantilever chair</p>
                        <p className="s5txt2">$26.00</p>
                        <p className="s5txt3">$42.00</p>
                    </div>
                </div>
                <div className="s5products">
                    <div className="s5sofas">
                        <img className="s5img2" src={image_1170} alt="Sofa" />
                    </div>
                    <div>
                        <p className="s5txt1">Cantilever chair</p>
                        <p className="s5txt2">$26.00</p>
                        <p className="s5txt3">$42.00</p>
                    </div>
                </div>
                <div className="s5products">
                    <div className="s5sofas">
                        <img className="s5img3" src={image_31} alt="Sofa" />
                    </div>
                    <div>
                        <p className="s5txt1">Cantilever chair</p>
                        <p className="s5txt2">$26.00</p>
                        <p className="s5txt3">$42.00</p>
                    </div>
                </div>
                <div className="s5products">
                    <div className="s5sofas">
                        <img className="s5img4" src={image_32} alt="Sofa" />
                    </div>
                    <div>
                        <p className="s5txt1">Cantilever chair</p>
                        <p className="s5txt2">$26.00</p>
                        <p className="s5txt3">$42.00</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Section5;