import React from "react";
import './Section8.css';

import Blog1  from '../Images/Blog1.png';
import Blog2  from '../Images/Blog2.png';
import Blog3  from '../Images/Blog3.png';
import Banner from '../Common/Banner';

const Section8 = () => {
    return(
        <div className="section8main">
            <br/>
            <Banner />
            <br/>
            <h1 className="s8head">Leatest Blog</h1>
            <br />
            <div className="s8grid">
                    <div className="s8imgdiv1">
                        <img className="s8img1" src={Blog1} alt="Image" />
                    </div>
                    <div className="s8imgdiv2">
                        <img className="s8img2" src={Blog2} alt="Image" />
                    </div>
                    <div className="s8imgdiv3">
                        <img className="s8img3" src={Blog3} alt="Image" />
                    </div>
            </div>
        </div>
    );
}

export default Section8;