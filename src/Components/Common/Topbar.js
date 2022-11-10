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
                    <img src={mailicon} alt="Mail" className="icon1" />
                    <p>mhhasanul@gmail.com</p>
                </div>

                <div className="sec2">
                    <img src={call} alt="Call" className="icon1" />
                    <p>(12345)67890</p>
                </div>

                <div className="menu">
                    <div  className="childmenu">English</div>
                    <div className="childmenu">USD</div>
                    <div className="childmenu login"><Link to="/login">Login</Link></div>
                    <div className="childmenu icon2"><img src={user} alt="User" /></div>
                    <div className="childmenu">Wishlist</div>
                    <div className="childmenu icon3"><img src={wishlist} alt="Wishlist" /></div>
                    <div className="childmenu icon4"><Link to="/cart"><img src={cart} alt="Cart" /></Link></div>
                </div>
            
        </div>
    );
}

export default Topbar;
