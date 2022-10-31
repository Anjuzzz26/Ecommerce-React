import React from "react";
import './Section5.css';

import image_1171 from '../Images/image 1171.png';
import image_1170 from '../Images/image 1170.png';
import image_31 from '../Images/image 31.png';
import image_32 from '../Images/image32.png';

import image_1161 from '../Images/image 1161.png';
import image_1162 from '../Images/image 1162.png';
import image_30 from '../Images/image 30.png';
import image_19 from '../Images/image 19.png';
import image_28 from '../Images/image 28.png';

const Section5 = () => {
    return(
        <div className="section5main">
            <br/><br/><br/>
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
            <br/>
            <div className="s5grid2">
                <div className="s5grid2_1">
                    <text className="s5txt4">23% off in all products</text><br/>
                    <a href="#" className="s5link">Shop Now</a>
                    <img className="s5img5" src={image_1162} alt="Image" />
                </div>
                <div className="s5grid2_2">
                    <text className="s5txt4">23% off in all products</text><br/>
                    <a href="#" className="s5link">View Collection</a>
                    <img className="s5img6" src={image_1161} alt="Iamge" />
                </div>
                <div className="s5grid2_3">
                    <div className="s5chairs">
                        <div className="chairimg">
                            <img className="s5chairimg" src={image_30} alt="Image" />
                        </div>
                        <div className="chairdetails">
                            <text className="chairname">Executive Seat chair</text><br/>
                            <text className="chairprice">$32.00</text>
                        </div>
                    </div>
                    <div className="s5chairs">
                        <div className="chairimg">
                            <img className="s5chairimg" src={image_19} alt="Image" />
                        </div>
                        <div className="chairdetails">
                            <text className="chairname">Executive Seat chair</text><br/>
                            <text className="chairprice">$32.00</text>
                        </div>
                    </div>
                    <div className="s5chairs">
                        <div className="chairimg">
                            <img className="s5chairimg" src={image_28} alt="Image" />
                        </div>
                        <div className="chairdetails">
                            <text className="chairname">Executive Seat chair</text><br/>
                            <text className="chairprice">$32.00</text>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Section5;