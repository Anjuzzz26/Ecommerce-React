import React from "react";
import Header from "./Common/Header";
import Footer from './Common/Footer';
import HeadDiv from './Common/HeadDiv';
import EcommerceItems from './Common/EcommerceItems';
import Banner from './Common/Banner';

import { Link } from "react-router-dom";

import './ShopGrid.css';
import Group44 from './Images/Group 44.png';

import Ecom1 from './Images/Ecom1.png';
import Ecom2 from './Images/Ecom2.png';
import Ecom3 from './Images/Ecom3.png';
import Ecom4 from './Images/Ecom4.png';
import Ecom5 from './Images/Ecom5.png';
import Ecom6 from './Images/Ecom6.png';
import Ecom7 from './Images/Ecom7.png';
import Ecom8 from './Images/Ecom8.png';
import Ecom9 from './Images/Ecom9.png';
import Ecom10 from './Images/Ecom10.png';
import Ecom11 from './Images/Ecom11.png';


const ShopGrid = () => {
    const text="Shop Grid Default"
    return(
        <div>
            <Header />
            <HeadDiv text={text} />
            <EcommerceItems />
            <div className="shopgridmain">
                <div className="SGItemgrid">
                        <Link to="/product"><div className="SGItemsdiv">
                            <div className="SGimg">
                                <img className="SGItemimg1" src={Ecom1} alt="Image" />
                                <br/>
                            </div>
                            <div className="SGdesc">
                                <text className="SGItem1txt1">Vel elit euismod</text>
                                <img className="SGgrp44" src={Group44} alt="Image" />
                                <p className="SGtxt2">$26.00 </p>
                                <p className="SGtxt3">$42.00</p>
                            </div>
                        </div></Link>
                        <Link to="/product"><div className="SGItemsdiv">
                            <div className="SGimg2">
                                <img className="SGItemimg2" src={Ecom2} alt="Image" />
                                <br/>
                            </div>
                            <div className="SGdesc">
                                <text className="SGItem2txt1">Ultricies condimentum imperdiet</text>
                                <img className="SGgrp44" src={Group44} alt="Image" />
                                <p className="SGtxt2">$26.00 </p>
                                <p className="SGtxt3">$42.00</p>
                            </div>
                        </div></Link>
                        <Link to="/product"><div className="SGItemsdiv">
                            <div className="SGimg">
                                <img className="SGItemimg3" src={Ecom3} alt="Image" />
                                <br/>
                            </div>
                            <div className="SGdesc">
                                <text className="SGItem3txt1">Vitae suspendisse sed</text>
                                <img className="SGgrp44" src={Group44} alt="Image" />
                                <p className="SGtxt2">$26.00 </p>
                                <p className="SGtxt3">$42.00</p>
                            </div>
                        </div></Link>
                        <Link to="/product"><div className="SGItemsdiv">
                            <div className="SGimg">
                                <img className="SGItemimg4" src={Ecom4} alt="Image" />
                                <br/>
                            </div>
                            <div className="SGdesc">
                                <text className="SGItem4txt1">Sed at fermentum</text>
                                <img className="SGgrp44" src={Group44} alt="Image" />
                                <p className="SGtxt2">$26.00 </p>
                                <p className="SGtxt3">$42.00</p>
                            </div>
                        </div></Link>
                        <Link to="/product"><div className="SGItemsdiv">
                            <div className="SGimg">
                                <img className="SGItemimg5" src={Ecom5} alt="Image" />
                                <br/>
                            </div>
                            <div className="SGdesc">
                                <text className="SGItem5txt1">Fusce pellentesque at</text>
                                <img className="SGgrp44" src={Group44} alt="Image" />
                                <p className="SGtxt2">$26.00 </p>
                                <p className="SGtxt3">$42.00</p>
                            </div>
                        </div></Link>
                        <Link to="/product"><div className="SGItemsdiv">
                            <div className="SGimg">
                                <img className="SGItemimg6" src={Ecom6} alt="Image" />
                                <br/>
                            </div>
                            <div className="SGdesc">
                                <text className="SGItem6txt1">Vestibulum magna laoreet</text>
                                <img className="SGgrp44" src={Group44} alt="Image" />
                                <p className="SGtxt2">$26.00 </p>
                                <p className="SGtxt3">$42.00</p>
                            </div>
                        </div></Link>
                        <Link to="/product"><div className="SGItemsdiv">
                            <div className="SGimg">
                                <img className="SGItemimg7" src={Ecom7} alt="Image" />
                                <br/>
                            </div>
                            <div className="SGdesc">
                                <text className="SGItem7txt1">Sollicitudin amet orci</text>
                                <img className="SGgrp44" src={Group44} alt="Image" />
                                <p className="SGtxt2">$26.00 </p>
                                <p className="SGtxt3">$42.00</p>
                            </div>
                        </div></Link>
                        <Link to="/product"><div className="SGItemsdiv">
                            <div className="SGimg">
                                <img className="SGItemimg8" src={Ecom8} alt="Image" />
                                <br/>
                            </div>
                            <div className="SGdesc">
                                <text className="SGItem8txt1">Ultrices mauris sit</text>
                                <img className="SGgrp44" src={Group44} alt="Image" />
                                <p className="SGtxt2">$26.00 </p>
                                <p className="SGtxt3">$42.00</p>
                            </div>
                        </div></Link>
                        <Link to="/product"><div className="SGItemsdiv">
                            <div className="SGimg">
                                <img className="SGItemimg9" src={Ecom9} alt="Image" />
                                <br/>
                            </div>
                            <div className="SGdesc">
                                <text className="SGItem9txt1">Pellentesque condimentum ac</text>
                                <img className="SGgrp44" src={Group44} alt="Image" />
                                <p className="SGtxt2">$26.00 </p>
                                <p className="SGtxt3">$42.00</p>
                            </div>
                        </div></Link>
                        <Link to="/product"><div className="SGItemsdiv">
                            <div className="SGimg">
                                <img className="SGItemimg10" src={Ecom10} alt="Image" />
                                <br/>
                            </div>
                            <div className="SGdesc">
                                <text className="SGItem10txt1">Cras scelerisque velit</text>
                                <img className="SGgrp44" src={Group44} alt="Image" />
                                <p className="SGtxt2">$26.00 </p>
                                <p className="SGtxt3">$42.00</p>
                            </div>
                        </div></Link>
                        <Link to="/product"><div className="SGItemsdiv">
                            <div className="SGimg">
                                <img className="SGItemimg11" src={Ecom11} alt="Image" />
                                <br/>
                            </div>
                            <div className="SGdesc">
                                <text className="SGItem11txt1">Lectus vulputate faucibus</text>
                                <img className="SGgrp44" src={Group44} alt="Image" />
                                <p className="SGtxt2">$26.00 </p>
                                <p className="SGtxt3">$42.00</p>
                            </div>
                        </div></Link>
                        <Link to="/product"><div className="SGItemsdiv">
                            <div className="SGimg">
                                <img className="SGItemimg4" src={Ecom4} alt="Image" />
                                <br/>
                            </div>
                            <div className="SGdesc">
                                <text className="SGItem12txt1">Purus risus, ut</text>
                                <img className="SGgrp44" src={Group44} alt="Image" />
                                <p className="SGtxt2">$26.00 </p>
                                <p className="SGtxt3">$42.00</p>
                            </div>
                        </div></Link>
                    </div>
                    <Banner />
            </div>

            <Footer />
        </div>
    );
}

export default ShopGrid;