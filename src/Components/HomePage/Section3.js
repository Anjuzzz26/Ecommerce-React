import React from "react";
import './Section3.css';

import group from '../Images/Group.png';
import cashback from '../Images/cashback.png';
import premium from '../Images/premium.png';
import support24 from '../Images/24hr.png';

const Section3 = () => {
    return(
        <div className="section3main">
            <br/>
            <h1 className="s3header">What Shopex Offer!</h1>
            <br/>
            <div className="s3grid">
                <div className="s3card">
                    <div className="s3grid1">
                        <img className="grp" src={group} alt="Help" />
                    </div>
                    <div className="s3grid2">
                        <br/>
                        <text className="s3txt1">24/7 Support</text>
                        <p className="s3txt2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                    </div>
                </div> 
                <div className="s3card">
                    <div className="s3grid1">
                        <img className="grp" src={cashback} alt="Help" />
                    </div>
                    <div className="s3grid2">
                        <br/>
                        <text className="s3txt1">24/7 Support</text>
                        <p className="s3txt2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                    </div>
                </div>
                <div className="s3card">
                    <div className="s3grid1">
                        <img className="grp" src={premium} alt="Help" />
                    </div>
                    <div className="s3grid2">
                        <br/>
                        <text className="s3txt1">24/7 Support</text>
                        <p className="s3txt2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                    </div>
                </div>
                <div className="s3card">
                    <div className="s3grid1">
                        <img className="grp" src={support24} alt="Help" />
                    </div>
                    <div className="s3grid2">
                        <br/>
                        <text className="s3txt1">24/7 Support</text>
                        <p className="s3txt2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Section3;