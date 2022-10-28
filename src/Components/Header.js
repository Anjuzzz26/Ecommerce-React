import React from "react";
import "./Header.css";
import Navbar from "./Navbar";
import Topbar from "./Topbar";
import promotional from '../Images/promotional.png';


const Header = () => {
    return(
        <div>
            <Topbar />
            <Navbar />
            <img src={promotional} alt="image"  />
        </div> 
    );
}

export default Header;