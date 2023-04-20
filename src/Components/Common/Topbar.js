import React from "react";
import "./Topbar.css";
import mailicon from "../Images/mail_icon.png";
import call from "../Images/call.png";
import user from "../Images/user.png";
import wishlist from "../Images/wishlist.png";
import cart from "../Images/cart.png";

import { Link } from 'react-router-dom';

const Topbar = () => {
    return(
        <div className="main">
                <div className="sec1">
                    <div className="sec1div"><img src={mailicon} alt="Mail" className="icon1" /></div>
                    <div><p>mhhasanul@gmail.com</p></div>
                </div>
                <div className="sec2">
                    <div className="sec1div"><img src={call} alt="Call" className="icon2" /></div>
                    <div><p>(12345)67890</p></div>
                </div>

                <div className="menu">
                    <div  className="childmenu">
                        <select style={{background:"#7E33E0"}}>
                            <option value="0">English</option>
                        </select>
                    </div>
                    <div className="childmenu">
                        <select style={{background:"#7E33E0"}}>
                            <option value="0">USD</option>
                        </select>
                    </div>
                    <div className="childmenu login"><div className="topbar_logindiv"><Link to="/login">Login</Link></div>
                    <div><img src={user} alt="User" className="childmenu icon3"/></div></div>
                    <div className="childmenu wishlist"><div>Wishlist</div>
                    <div><img src={wishlist} alt="Wishlist" className="childmenu icon4" /></div></div>
                    <div className="topbar_cart"><Link to="/cart"><img src={cart} alt="Cart" className="childmenu icon5" /></Link></div>
                </div>
        </div>
    );
}

export default Topbar;
