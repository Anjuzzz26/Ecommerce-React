import React from "react";
import './ShopList.css';

import Header from "./Common/Header";
import Footer from './Common/Footer';
import HeadDiv from './Common/HeadDiv';
import EcommerceItems from './Common/EcommerceItems';
import Banner from './Common/Banner';

import Pic1 from './Images/Pic1.png';
import Pic2 from './Images/Pic2.png';
import Pic3 from './Images/Pic3.png';
import Pic4 from './Images/Pic4.png';
import Pic5 from './Images/Pic5.png';
import Pic6 from './Images/Pic6.png';
import Pic7 from './Images/Pic7.png';
import filledstar from './Images/Star.png';
import notfilledstar from './Images/NFstar.png';
import cart from './Images/shopcart.png';
import heart from './Images/uil_heart-alt.png';
import searchplus from './Images/uil_search-plus.png';
import Ellipse_65 from './Images/Ellipse 65.png';
import Ellipse_66 from './Images/Ellipse 66.png';
import Ellipse_24 from './Images/Ellipse 24.png';


const ShopList = () => {
    const text="Shop List"
    return(
        <div>
            <Header />
            <HeadDiv text={text} />
            <EcommerceItems />
            <br/>
            <div className="SLdiv">
                <div className="SLgridItems">
                    <div className="SLimggrid">
                        <img src={Pic1} alt="Image" />
                    </div>
                    <div className="SLdescgrid">
                        <text className="SLtxt1">Accumsan tincidunt</text>
                        <img className="SLdot1" src={Ellipse_24} alt="Image" />
                        <img className="SLdot2" src={Ellipse_65} alt="Image" />
                        <img className="SLdot3" src={Ellipse_66} alt="Image" />
                        <p className="SLtxt2">$26.00 &nbsp;&nbsp;&nbsp;<span>$52.00</span></p>
                        <img className="SLstar1" src={filledstar} alt="Image" />
                        <img className="SLstar2" src={filledstar} alt="Image" />
                        <img className="SLstar3" src={filledstar} alt="Image" />
                        <img className="SLstar4" src={filledstar} alt="Image" />
                        <img className="SLnfstar" src={notfilledstar} alt="Image" />
                        <p className="SLtxt3">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                         Magna in est adipiscing in phasellus non in justo.</p>
                        <img className="SLcart" src={cart} alt="Image" />
                        <img className="SLheart" src={heart} alt="Image" />
                        <img className="SLsearch" src={searchplus} alt="Image" />
                    </div>
                </div>
                <div className="SLgridItems">
                    <div className="SLimggrid">
                        <img src={Pic2} alt="Image" />
                    </div>
                    <div className="SLdescgrid">
                        <text className="SLtxt1">In nulla</text>
                        <img className="SLdot1" src={Ellipse_24} alt="Image" />
                        <img className="SLdot2" src={Ellipse_65} alt="Image" />
                        <img className="SLdot3" src={Ellipse_66} alt="Image" />
                        <p className="SLtxt2">$26.00  &nbsp;&nbsp;&nbsp;<span>$52.00</span></p>
                        <img className="SLstar1" src={filledstar} alt="Image" />
                        <img className="SLstar2" src={filledstar} alt="Image" />
                        <img className="SLstar3" src={filledstar} alt="Image" />
                        <img className="SLstar4" src={filledstar} alt="Image" />
                        <img className="SLnfstar" src={notfilledstar} alt="Image" />
                        <p className="SLtxt3">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                         Magna in est adipiscing in phasellus non in justo.</p>
                        <img className="SLcart" src={cart} alt="Image" />
                        <img className="SLheart" src={heart} alt="Image" />
                        <img className="SLsearch" src={searchplus} alt="Image" />
                    </div>
                </div>
                <div className="SLgridItems">
                    <div className="SLimggrid">
                        <img src={Pic3} alt="Image" />
                    </div>
                    <div className="SLdescgrid">
                        <text className="SLtxt1">Vel sem</text>
                        <img className="SLdot1" src={Ellipse_24} alt="Image" />
                        <img className="SLdot2" src={Ellipse_65} alt="Image" />
                        <img className="SLdot3" src={Ellipse_66} alt="Image" />
                        <p className="SLtxt2">$26.00  &nbsp;&nbsp;&nbsp;<span>$52.00</span></p>
                        <img className="SLstar1" src={filledstar} alt="Image" />
                        <img className="SLstar2" src={filledstar} alt="Image" />
                        <img className="SLstar3" src={filledstar} alt="Image" />
                        <img className="SLstar4" src={filledstar} alt="Image" />
                        <img className="SLnfstar" src={notfilledstar} alt="Image" />
                        <p className="SLtxt3">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                         Magna in est adipiscing in phasellus non in justo.</p>
                        <img className="SLcart" src={cart} alt="Image" />
                        <img className="SLheart" src={heart} alt="Image" />
                        <img className="SLsearch" src={searchplus} alt="Image" />
                    </div>
                </div>
                <div className="SLgridItems">
                    <div className="SLimggrid">
                        <img src={Pic4} alt="Image" />
                    </div>
                    <div className="SLdescgrid">
                        <text className="SLtxt1">Porttitor cum</text>
                        <img className="SLdot1" src={Ellipse_24} alt="Image" />
                        <img className="SLdot2" src={Ellipse_65} alt="Image" />
                        <img className="SLdot3" src={Ellipse_66} alt="Image" />
                        <p className="SLtxt2">$26.00  &nbsp;&nbsp;&nbsp;<span>$52.00</span></p>
                        <img className="SLstar1" src={filledstar} alt="Image" />
                        <img className="SLstar2" src={filledstar} alt="Image" />
                        <img className="SLstar3" src={filledstar} alt="Image" />
                        <img className="SLstar4" src={filledstar} alt="Image" />
                        <img className="SLnfstar" src={notfilledstar} alt="Image" />
                        <p className="SLtxt3">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                         Magna in est adipiscing in phasellus non in justo.</p>
                        <img className="SLcart" src={cart} alt="Image" />
                        <img className="SLheart" src={heart} alt="Image" />
                        <img className="SLsearch" src={searchplus} alt="Image" />
                    </div>
                </div>
                <div className="SLgridItems">
                    <div className="SLimggrid">
                        <img src={Pic5} alt="Image" />
                    </div>
                    <div className="SLdescgrid">
                        <text className="SLtxt1">Nunc in</text>
                        <img className="SLdot1" src={Ellipse_24} alt="Image" />
                        <img className="SLdot2" src={Ellipse_65} alt="Image" />
                        <img className="SLdot3" src={Ellipse_66} alt="Image" />
                        <p className="SLtxt2">$26.00  &nbsp;&nbsp;&nbsp;<span>$52.00</span></p>
                        <img className="SLstar1" src={filledstar} alt="Image" />
                        <img className="SLstar2" src={filledstar} alt="Image" />
                        <img className="SLstar3" src={filledstar} alt="Image" />
                        <img className="SLstar4" src={filledstar} alt="Image" />
                        <img className="SLnfstar" src={notfilledstar} alt="Image" />
                        <p className="SLtxt3">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                         Magna in est adipiscing in phasellus non in justo.</p>
                        <img className="SLcart" src={cart} alt="Image" />
                        <img className="SLheart" src={heart} alt="Image" />
                        <img className="SLsearch" src={searchplus} alt="Image" />
                    </div>
                </div>
                <div className="SLgridItems">
                    <div className="SLimggrid">
                        <img src={Pic6} alt="Image" />
                    </div>
                    <div className="SLdescgrid">
                        <text className="SLtxt1">Vitae facilisis</text>
                        <img className="SLdot1" src={Ellipse_24} alt="Image" />
                        <img className="SLdot2" src={Ellipse_65} alt="Image" />
                        <img className="SLdot3" src={Ellipse_66} alt="Image" />
                        <p className="SLtxt2">$26.00  &nbsp;&nbsp;&nbsp;<span>$52.00</span></p>
                        <img className="SLstar1" src={filledstar} alt="Image" />
                        <img className="SLstar2" src={filledstar} alt="Image" />
                        <img className="SLstar3" src={filledstar} alt="Image" />
                        <img className="SLstar4" src={filledstar} alt="Image" />
                        <img className="SLnfstar" src={notfilledstar} alt="Image" />
                        <p className="SLtxt3">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                         Magna in est adipiscing in phasellus non in justo.</p>
                        <img className="SLcart" src={cart} alt="Image" />
                        <img className="SLheart" src={heart} alt="Image" />
                        <img className="SLsearch" src={searchplus} alt="Image" />
                    </div>
                </div>
                <div className="SLgridItems">
                    <div className="SLimggrid">
                        <img src={Pic7} alt="Image" />
                    </div>
                    <div className="SLdescgrid">
                        <text className="SLtxt1">Curabitur lectus</text>
                        <img className="SLdot1" src={Ellipse_24} alt="Image" />
                        <img className="SLdot2" src={Ellipse_65} alt="Image" />
                        <img className="SLdot3" src={Ellipse_66} alt="Image" />
                        <p className="SLtxt2">$26.00  &nbsp;&nbsp;&nbsp;<span>$52.00</span></p>
                        <img className="SLstar1" src={filledstar} alt="Image" />
                        <img className="SLstar2" src={filledstar} alt="Image" />
                        <img className="SLstar3" src={filledstar} alt="Image" />
                        <img className="SLstar4" src={filledstar} alt="Image" />
                        <img className="SLnfstar" src={notfilledstar} alt="Image" />
                        <p className="SLtxt3">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                         Magna in est adipiscing in phasellus non in justo.</p>
                        <img className="SLcart" src={cart} alt="Image" />
                        <img className="SLheart" src={heart} alt="Image" />
                        <img className="SLsearch" src={searchplus} alt="Image" />
                    </div>
                </div>
            </div>
            <br/><br/><br/><br/>
            <Banner />
            <Footer />
        </div>
    );
}

export default ShopList;