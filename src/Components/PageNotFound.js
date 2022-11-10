import React from "react";
import './PageNotFound.css';
import {Link} from "react-router-dom";
import Header from "./Common/Header";
import Footer from './Common/Footer';
import HeadDiv from './Common/HeadDiv';
import Banner from './Common/Banner';
import Button from './Common/Button';

import Group123 from './Images/Group 123.png';

const PageNotFound = () => {
    return(
        <div>
		<Header />
		<HeadDiv text={"404 Not Found"} />
		
        <div className="PNFmain">
            <img src={Group123} alt="Image" className="PNFimg" />
            <h3 className="PNFtxt">oops!</h3>
            <div className="PNFbtn">
                <Link to="/"><Button text={"Back To Home"} /></Link>
            </div>
        </div>

		<br/><br/><br/>
		<Banner />
		<Footer />

        </div>
    );
}

export default PageNotFound;