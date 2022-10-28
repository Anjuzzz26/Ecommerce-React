import React from "react";
import "./Topbar.css";
import mailicon from "../Images/mail_icon.png";
import call from "../Images/call.png";
import user from "../Images/user.png";
import wishlist from "../Images/wishlist.png";
import cart from "../Images/cart.png";

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
                    <div className="childmenu login">Login</div>
                    <div className="childmenu icon2"><img src={user} alt="User" /></div>
                    <div className="childmenu">Wishlist</div>
                    <div className="childmenu icon3"><img src={wishlist} alt="Wishlist" /></div>
                    <div className="childmenu icon4"><img src={cart} alt="Cart" /></div>
                </div>
            
        </div>
    );
}

export default Topbar;

{/* <div className="bg-violet-500 text-white">
                <img src={mailicon} alt="Mail" />
                <p>mhhasanul@gmail.com</p>
                <img src={call} alt="Call" />
                <p>(12345)67890</p>
                <p>English</p>
                <p>USD</p>
                <p>Login</p>
                <img src={user} alt="User" />
                <p>Wishlist</p>
                <img src={wishlist} alt="Wishlist" />
                <img src={cart} alt="Cart" />
            </div> */}