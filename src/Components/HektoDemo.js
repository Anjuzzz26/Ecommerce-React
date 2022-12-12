import React from "react";
import './HektoDemo.css';

import Header from "./Common/Header";
import Footer from './Common/Footer';
import Button from './Common/Button';
import {Link} from 'react-router-dom';

import Rectangle115 from './Images/Rectangle 115.png';
import Rectangle144 from './Images/Rectangle 144.png';
import Rectangle145 from './Images/Rectangle 145.png';
import Rectangle146 from './Images/Rectangle 146.png';
import Rectangle147 from './Images/Rectangle 147.png';
import Rectanglebag from './Images/Rectangle bag.png';
import green_check from './Images/green_check.png';
import green_check1 from './Images/green_check1.png';


const HektoDemo = () => {
    const txt="Continue Shipping";

    return(
        <div>
            <Header />

            <div>
                <img src={Rectangle115} alt="Image" />
                <h1 className="headdiv_title">Hekto Demo</h1><br/><br/><br/>
            </div>

            <h3 className="HDhead">Hekto Demo</h3>
            <p className="HDsubhead">Cart/ Information/ Shipping/ Payment</p>

            <div className="HDgrid1">
                <div className="HDinfogrid">

                    <div className="HDcontactdetails">
                        <h3 className="HDtxt1">Contact Information</h3>
                        <p className="HDtxt2">Already have an account? <a href="#">Log In</a></p>
                        <form>
                            <input type="text" placeholder="Email or mobile phone number" />
                        </form>
                        <img className="green_check1" src={green_check1} alt="Image" />
                        <p className="HDtxt3">Keep me up to date on news and excluive offers</p>
                    </div>

                    <div className="HDshippingdetails">
                        <h3 className="HDtxt4">Shipping address</h3>
                        <form>
                            <input type="text" placeholder="First name (optional)" className="textbox"/>
                            <input type="text" placeholder="Last name" className="textbox2"/>
                            <input type="text" placeholder="Address" className="inputtextbox" />
                            <input type="text" placeholder="Appaetnentment,suit,e.t.c (optinal)" className="inputtextbox" />
                            <input type="text" placeholder="City" className="inputtextbox" />
                            <input type="text" placeholder="Bangladesh" className="textbox" />
                            <input type="text" placeholder="Postal Code" className="textbox2" />
                        </form>
                        <div className="HDbtn">
                            <Link to="/shopgrid"><Button text={txt} /></Link>
                        </div>
                    </div>

                </div>

                <div className="HDitemsgrid">

                    <div className="HDiteminfogrid">

                        <div className="HDitems">
                        
                            <div><img src={Rectanglebag} alt="Image" className="HDimg" /></div>
                            <div><text className="HDitemname">Ut diam consequat</text>
                            <p className="HDitemcolor">Color: Brown</p>
                            <p className="HDitemsize">Size: XL</p></div>
                            <div><p className="HDitemprice">$32.00</p></div>


                        </div>

                        <div className="HDitems">
                        
                            <div><img src={Rectangle144} alt="Image" className="HDimg" /></div>
                            <div><text className="HDitemname">Ut diam consequat</text>
                            <p className="HDitemcolor">Color: Brown</p>
                            <p className="HDitemsize">Size: XL</p></div>
                            <div><p className="HDitemprice">$32.00</p></div>


                        </div>

                        <div className="HDitems">
                        
                            <div><img src={Rectangle145} alt="Image" className="HDimg" /></div>
                            <div><text className="HDitemname">Ut diam consequat</text>
                            <p className="HDitemcolor">Color: Brown</p>
                            <p className="HDitemsize">Size: XL</p></div>
                            <div><p className="HDitemprice">$32.00</p></div>


                        </div>

                        <div className="HDitems">
                        
                            <div><img src={Rectangle146} alt="Image" className="HDimg" /></div>
                            <div><text className="HDitemname">Ut diam consequat</text>
                            <p className="HDitemcolor">Color: Brown</p>
                            <p className="HDitemsize">Size: XL</p></div>
                            <div><p className="HDitemprice">$32.00</p></div>


                        </div>

                        <div className="HDitems">
                        
                            <div><img src={Rectangle147} alt="Image" className="HDimg" /></div>
                            <div><text className="HDitemname">Ut diam consequat</text>
                            <p className="HDitemcolor">Color: Brown</p>
                            <p className="HDitemsize">Size: XL</p></div>
                            <div><p className="HDitemprice">$32.00</p></div>


                        </div>

                    </div>

                    <div className="HDshipping">
                    
                            <div className="HDcarttotalgrid">
                                <div className="HDcarttotals_subitems">
                                    <text className="HDsubitem1">Subtotals:</text>
                                    <p className="HDsubitem2">£219.00</p>
                                </div>
                                <div className="HDcarttotals_subitems">
                                    <text className="HDsubitem1 tot">Totals:</text>
                                    <p className="HDsubitem2">£325.00</p>
                                </div>
                                <div>
                                    <img className="HDgreen_check" src={green_check} alt="Image" />
                                    <p className="HDcarttotal_para">Shipping & taxes calculated at checkout</p>
                                </div>
                                <Link to="/ordercompleted"><button className="HDcheckoutbtn">Proceed To Checkout</button></Link>
                                
                            </div>

                    </div>

                </div>

                
            </div>
            

            <Footer />
        </div>
    );
}

export default HektoDemo;