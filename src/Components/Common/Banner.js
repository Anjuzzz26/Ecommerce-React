import React from "react";
import './Banner.css';
import S8Img from '../Images/S8Img.png';

const Banner = () => {
    return(
        <div>
            <img className="SGbanner" src={S8Img} alt="Image" />
            <br/><br/><br/>
        </div>
    );
}

export default Banner;