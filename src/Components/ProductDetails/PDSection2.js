import React from "react";
import './PDSection2.css';

import arrow from '../Images/arrow.png';

const PDSection2 = () => {
    return(
        <div className="PDSec2main">
            <nav className="PDnav">
                <ul>
                    <li><a href="#"><u>Description</u></a></li>
                    <li><a href="#">Additional Info</a></li>
                    <li><a href="#">Reviews</a></li>
                    <li><a href="#">Video</a></li>
                </ul>
            </nav>
            <div className="PDSec2desc">
                <text className="PDSec2txt1">Varius tempor.</text>
                <p className="PDSec2txt2">Aliquam dis vulputate vulputate integer sagittis. 
                    Faucibus dolor ornare faucibus vel sed et eleifend habitasse amet. 
                    Montes, mauris varius ac est bibendum. Scelerisque a, risus ac ante. 
                    Velit consectetur neque, elit, aliquet. Non varius proin sed urna, egestas consequat laoreet diam tincidunt. 
                    Magna eget faucibus cras justo, tortor sed donec tempus. Imperdiet consequat, 
                    quis diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .
                </p>
                <text className="PDSec2txt3">More details</text>
    
                            <img className="PDarrow" src={arrow} alt="Image" />
                            <p className="PDdetails">Aliquam dis vulputate vulputate integer sagittis. 
                            Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
                            <img className="PDarrow" src={arrow} alt="Image" />
                            <p className="PDdetails">Aliquam dis vulputate vulputate integer sagittis. 
                            Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
                            <img className="PDarrow" src={arrow} alt="Image" />
                            <p className="PDdetails">Aliquam dis vulputate vulputate integer sagittis. 
                            Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
                            <img className="PDarrow" src={arrow} alt="Image" />
                            <p className="PDdetails">Aliquam dis vulputate vulputate integer sagittis. 
                            Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
                        

            </div>
        </div>
    );
}

export default PDSection2;