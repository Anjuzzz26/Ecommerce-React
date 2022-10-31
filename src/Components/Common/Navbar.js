import React from "react";
import './Navbar.css';

const Navbar = () => {
    return(
        <div className="navbar">
            <div className="title"><b>Hekto</b></div>
            <div className="links">
                <header>
                    <nav>
                        <ul> 
                            <li><a href='#'>Home</a></li>
                            <li><a href='#'>Pages</a></li>
                            <li><a href='#'>Products</a></li>
                            <li><a href='#'>Blog</a></li>
                            <li><a href='#'>Shop</a></li>
                            <li><a href='#'>Contact</a></li>
                        </ul>
                    </nav>
                </header>
            </div>
            <div className="searchdiv">
                <form className="example" action="#">
                    <input type="text"name="search" /><i>
                    <button type="submit"><i className="fa fa-search"></i></button></i>
                </form>
            </div>
        </div>
    );
}


export default Navbar;