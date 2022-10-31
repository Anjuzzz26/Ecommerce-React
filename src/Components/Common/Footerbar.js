import React from "react";
import './Footerbar.css';
import socialmediaicons from '../Images/socialmediaicons.png';

const Footerbar = () => {
    return(
        <div className="fbar">
            <div>
                <p className="copyright">©Webecy - All Rights Reserved</p>
            </div>
            <div>
                <img className="social" src={socialmediaicons} alt="Social Media Url" />
            </div>
        </div>
    );
}

export default Footerbar;
