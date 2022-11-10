import React from "react";
import './PDSection3.css';

import filledstar from '../Images/Star.png';
import notfilledstar from '../Images/NFstar.png';
import Rectangle128 from '../Images/Rectangle 128.png'
import Rectangle133 from '../Images/Rectangle 133.png'
import Rectangle130 from '../Images/Rectangle 130.png'
import Rectangle131 from '../Images/Rectangle 131.png'

const PDSection3 = () => {
    return(
        <div className="PDimagesdiv">
            <h3 className="PDS3head">Related Products</h3>
            <br/><br/>
            <div className="PDS3grid">
                <div>
                    <div className="PD3imgdiv">
                        <img src={Rectangle128} alt="Image" className="PD3img" />
                    </div>
                    <div className="PD3desc">
                        <text className="PDS3txt1">Mens Fashion Wear</text>
                        <img className="PDS3star1" src={filledstar} alt="Image" />
                        <img className="PDS3star2" src={filledstar} alt="Image" />
                        <img className="PDS3star3" src={filledstar} alt="Image" />
                        <img className="PDS3star4" src={filledstar} alt="Image" />
                        <img className="PDS3star5" src={notfilledstar} alt="Image" />
                        <p className="PDS3txt2">$43.00</p>
                    </div>
                </div>
                <div>
                    <div className="PD3imgdiv">
                        <img src={Rectangle133} alt="Image" className="PD3img" />
                    </div>
                    <div className="PD3desc">
                        <text className="PDS3txt1">Women’s Fashion</text>
                        <img className="PDS3star1" src={filledstar} alt="Image" />
                        <img className="PDS3star2" src={filledstar} alt="Image" />
                        <img className="PDS3star3" src={filledstar} alt="Image" />
                        <img className="PDS3star4" src={filledstar} alt="Image" />
                        <img className="PDS3star5" src={filledstar} alt="Image" />
                        <p className="PDS3txt2">$67.00</p>
                    </div>
                </div>
                <div>
                    <div className="PD3imgdiv">
                        <img src={Rectangle130} alt="Image" className="PD3img" />
                    </div>
                    <div className="PD3desc">
                        <text className="PDS3txt1">Wolx Dummy Fashion</text>
                        <img className="PDS3star1" src={filledstar} alt="Image" />
                        <img className="PDS3star2" src={filledstar} alt="Image" />
                        <img className="PDS3star3" src={filledstar} alt="Image" />
                        <img className="PDS3star4" src={filledstar} alt="Image" />
                        <img className="PDS3star5" src={notfilledstar} alt="Image" />
                        <p className="PDS3txt2">$67.00</p>
                    </div>
                </div>
                <div>
                    <div className="PD3imgdiv">
                        <img src={Rectangle131} alt="Image" className="PD3img" />
                    </div>
                    <div className="PD3desc">
                        <text className="PDS3txt1">Top Wall Digital Clock</text>
                        <img className="PDS3star1" src={filledstar} alt="Image" />
                        <img className="PDS3star2" src={filledstar} alt="Image" />
                        <img className="PDS3star3" src={filledstar} alt="Image" />
                        <img className="PDS3star4" src={notfilledstar} alt="Image" />
                        <img className="PDS3star5" src={notfilledstar} alt="Image" />
                        <p className="PDS3txt2">$51.00</p>
                    </div>
                </div>
                <br/><br/>
            </div>
        </div>
    );
}

export default PDSection3;