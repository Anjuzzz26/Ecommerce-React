import React from "react";
import './ShoppingCart.css';
import {Link} from "react-router-dom";
import Header from "./Common/Header";
import Footer from './Common/Footer';
import HeadDiv from './Common/HeadDiv';
import Button from './Common/Button';

import Rect34 from './Images/Rectangle 34.png';
import Rect35 from './Images/Rectangle 35.png';
import Rect36 from './Images/Rectangle 36.png';
import Rect37 from './Images/Rectangle 37.png';
import Rect38 from './Images/Rectangle 38.png';
import Group52 from './Images/Group 52.png';
import green_check from './Images/green_check.png';

const ShoppingCart = () => {
    const txt="Shopping Cart";
    const update="Update Cart";
    const clear="Clear Cart";
    const calculate="Calculate Shipping";

    return(
        <div className="Shopping_Cart">
            <Header />
            <HeadDiv text={txt} />
            
            <br/>
            <h2 className="SCarthead1">Product</h2>
            <h2 className="SCarthead2">Price</h2>
            <h2 className="SCarthead3">Quantity</h2>
            <h2 className="SCarthead4">Total</h2>
            {/* <h2 className="SCarthead5">Cart Totals</h2> */}
            <br/>
            <div className="SCartdiv">
                <div className="Cartgrid1">

                    <div className="CartItem">

                        <div className="Cartimg">
                            <img src={Rect34} alt="Img" />
                        </div>
                        <div>
                            <p className="Carttxt1">Ut diam consequat</p>
                            <p className="Carttxt2">Color:Brown</p>
                            <p className="Carttxt3">Size:XL</p>
                        </div>
                        <div>
                            <p className="Cartprice">$32.00</p>

                        </div>
                        <div>
                            <img className="CartQty" src={Group52} alt="Img" />
                        </div>
                        <div>
                            <p className="Carttotal">£219.00</p>
                        </div>


                    </div>
                    <div className="CartItem">
                        
                        <div className="Cartimg">
                            <img src={Rect35} alt="Img" /> 
                        </div>
                        <div>
                            <p className="Carttxt1">Vel faucibus posuere</p>
                            <p className="Carttxt2">Color:Brown</p>
                            <p className="Carttxt3">Size:XL</p>
                        </div>
                        <div>
                            <p className="Cartprice">$32.00</p>

                        </div>
                        <div>
                            <img className="CartQty" src={Group52} alt="Img" />
                        </div>
                        <div>
                            <p className="Carttotal">£219.00</p>
                        </div>


                    </div>
                    <div className="CartItem">
                        
                        <div className="Cartimg">
                            <img src={Rect36} alt="Img" />
                        </div>
                        <div>
                            <p className="Carttxt1">Ac vitae vestibulum</p>
                            <p className="Carttxt2">Color:Brown</p>
                            <p className="Carttxt3">Size:XL</p>
                        </div>
                        <div>
                            <p className="Cartprice">$32.00</p>

                        </div>
                        <div>
                            <img className="CartQty" src={Group52} alt="Img" />
                        </div>
                        <div>
                            <p className="Carttotal">£219.00</p>
                        </div>

                    </div>
                    <div className="CartItem">
                        
                        <div className="Cartimg">
                            <img src={Rect37} alt="Img" />
                        </div>
                        <div>
                            <p className="Carttxt1">Elit massa diam</p>
                            <p className="Carttxt2">Color:Brown</p>
                            <p className="Carttxt3">Size:XL</p>
                        </div>
                        <div>
                            <p className="Cartprice">$32.00</p>

                        </div>
                        <div>
                            <img className="CartQty" src={Group52} alt="Img" />
                        </div>
                        <div>
                            <p className="Carttotal">£219.00</p>
                        </div>


                    </div>
                    <div className="CartItem">
                        
                        <div className="Cartimg">
                            <img src={Rect38} alt="Img" />
                        </div>
                        <div>
                            <p className="Carttxt1">Proin pharetra elementum</p>
                            <p className="Carttxt2">Color:Brown</p>
                            <p className="Carttxt3">Size:XL</p>
                        </div>
                        <div>
                            <p className="Cartprice">$32.00</p>

                        </div>
                        <div>
                            <img className="CartQty" src={Group52} alt="Img" />
                        </div>
                        <div>
                            <p className="Carttotal">£219.00</p>
                        </div>
                    </div>
                </div>

                <div className="Cartgrid2">
                <h3 className="SCarthead5">Cart Total</h3>
                    <div className="carttotalgrid">
                        
                        <div className="carttotals_subitems">
                            <text className="subitem1">Subtotals:</text>
                            <p className="subitem2">£219.00</p>
                        </div>
                        <div className="carttotals_subitems">
                            <text className="subitem1 tot">Totals:</text>
                            <p className="subitem2">£325.00</p>
                        </div>
                        <div>
                            <img className="green_check" src={green_check} alt="Img" />
                            <p className="carttotal_para">Shipping & taxes calculated at checkout</p>
                        </div>
                        <Link to="/ordercompleted"><button className="checkoutbtn">Proceed To Checkout</button></Link>
                        
                    </div>

                    <div className="calculategrid">
                        <h3 className="calculate">Calculate Shopping</h3>
                        <div className="Cartform">
                            <form>
                                <input type="text" placeholder="Bangladesh" /><br/>
                                <input type="text" placeholder="Mirpur Dhaka - 1200" /><br/>
                                <input type="text" placeholder="Postal Code" />
                            </form>
                            <div className="calculatebtn"><Button text={calculate} /></div>
                            
                        </div>
                    </div>

                </div>

            </div>
            <br/><br/>
            <div className="SCartButton">
                <Button text={update} />
                <Button text={clear} />
            </div>
            <br/><br/>
            <Footer />
        </div>
    );
}

export default ShoppingCart;