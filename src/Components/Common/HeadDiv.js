import React from "react";
import './HeadDiv.css';

import Rectangle115 from '../Images/Rectangle 115.png';

const HeadDiv = (props) => {
    return(
        <div>
            <img src={Rectangle115} alt="Image" className="HeadDivimg" />
            <h1 className="headdiv_title">{props.text}</h1>
            <p className="headdiv_nav">Home . Pages . <span>{props.text}</span></p>
        </div>
    );
}

export default HeadDiv;