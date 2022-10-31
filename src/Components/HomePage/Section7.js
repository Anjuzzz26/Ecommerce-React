import React from "react";
import './Section7.css';

import Top1  from '../Images/Top1.png';
import Top2  from '../Images/Top2.png';
import Top3  from '../Images/Top3.png';
import Top4  from '../Images/Top4.png';
import Group161 from '../Images/Group 161.png';

const Section7 = () => {
    return(
        <div className="section7main">
            <br/>
            <h1 className="s7head">Top Categories</h1>
            <br />
            <div className="s7grid">
                    <div className="s7imgdiv1">
                        <img className="s7img1" src={Top1} alt="Image" />
                    </div>
                    <div className="s7imgdiv2">
                        <img className="s7img2" src={Top2} alt="Image" />
                    </div>
                    <div className="s7imgdiv3">
                        <img className="s7img3" src={Top3} alt="Image" />
                    </div>
                    <div className="s7imgdiv4">
                        <img className="s7img4" src={Top4} alt="Image" />
                    </div>
            </div>
            <br/><br/><br/>
            <img className="s7img5" src={Group161} alt="Image" />
        </div>
    );
}

export default Section7;