import React from "react";
import './Navbar.css';
import { Link } from "react-router-dom";

const Navbar = () => {
    return(
        <div className="navbar">
            <div className="title"><Link to="/" className="titlelink"><b>Hekto</b></Link></div>
            <div className="links">
                <header>
                    <nav>
                        <ul> 
                            <li><Link to="/"><a href='home'>
                                    <select>
                                        <option value="Home">Home</option>
                                    </select>
                                </a></Link></li>
                            <li><Link to="/page"><a href='page'>Pages</a></Link></li>
                            <li><Link to="/shopgrid"><a href='shopgrid'>Products</a></Link></li>
                            <li><Link to="/blog"><a href='blog'>Blog</a></Link></li>
                            <li><Link to="/shopleft"><a href='shopleft'>Shop</a></Link></li>
                            <li><Link to="/contact"><a href='contact'>Contact</a></Link></li>
                            {/* <li><Link to="/hektodemo"><a href='contact'>Hekto Demo</a></Link></li>
                            <li><Link to="/about"><a href='contact'>About</a></Link></li>
                            <li><Link to="/faq"><a href='contact'>FAQ</a></Link></li> */}
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