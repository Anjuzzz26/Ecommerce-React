import React from "react";
import './Section7.css';

import image20  from '../Images/image 20.png';
import image1168  from '../Images/image 1168.png';
import image1171  from '../Images/image 1171.png';
import Group161 from '../Images/Group 161.png';
import Slideicon from '../Images/promotional page nav.png';

const Section7 = () => {
    return(
        <div className="section7main">
            <br/>
            <h1 className="s7head">Top Categories</h1>
            <br />
            <div className="s7grid">
                <div className="topgrid">
                        <div className="s7imgdiv">
                            <img className="s7img1" src={image20} alt="Img" />
                            <button type="submit">View Shop</button>
                        </div>
                        <div className="S7titlediv">
                            <text className="toptxt1">Mini LCW Chair</text><br/>
                            <text className="toptxt2">$56.00</text>
                        </div>
                    </div>
                    <div className="topgrid">
                        <div className="s7imgdiv">
                            <img className="s7img2" src={image1168} alt="Img" />
                            <button type="submit">View Shop</button>
                        </div>
                        <div className="S7titlediv">
                            <text className="toptxt1">Mini LCW Chair</text><br/>
                            <text className="toptxt2">$56.00</text>
                        </div>
                    </div>
                    <div className="topgrid">
                        <div className="s7imgdiv">
                            <img className="s7img3" src={image1171} alt="Img" />
                            <button type="submit">View Shop</button>
                        </div>
                        <div className="S7titlediv">
                            <text className="toptxt1">Mini LCW Chair</text><br/>
                            <text className="toptxt2">$56.00</text>
                        </div>
                    </div>
                    <div className="topgrid">
                        <div className="s7imgdiv">
                            <img className="s7img4" src={image20} alt="Img" />
                            <button type="submit">View Shop</button>
                        </div>
                        <div className="S7titlediv">
                            <text className="toptxt1">Mini LCW Chair</text><br/>
                            <text className="toptxt2">$56.00</text>
                        </div>
                    </div>
            </div>
            <br/>
            <img src={Slideicon} alt="Img" />
            <br/><br/>
            <img className="s7img5" src={Group161} alt="Img" />
        </div>
    );
}

export default Section7;