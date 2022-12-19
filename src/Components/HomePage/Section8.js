import React from "react";
import './Section8.css';

import Blog1  from '../Images/HomeBlog1.png';
import Blog2  from '../Images/HomeBlog2.png';
import Blog3  from '../Images/HomeBlog3.png';
import calender from '../Images/calender.png';
import pen from '../Images/pen.png';

import Banner from '../Common/Banner';
import { Link } from "react-router-dom";

const Section8 = () => {
    return(
        <div className="section8main">
            <br/>
            <Banner />
            <br/>
            <h1 className="s8head">Leatest Blog</h1>
            <br />
            <div className="s8grid">
                <div className="S8itemsgrid">
                    <div className="s8imgdiv1">
                        <img className="s8img1" src={Blog1} alt="Img" />
                    </div>
                    <div className="s8desc">
                       <img src={pen} alt="Img" className="Blogicon1" />
                        <text className="s8txt1">SaberAli</text>
                        <img src={calender} alt="Img" className="Blogicon2" />
                        <text className="s8txt2">21 August,2020</text>
                        <h3>Top esssential Trends in 2021</h3>
                        <p>More off this less hello samlande lied much over tightly circa horse taped mightly</p>
                        <Link to="/singleblog"><a href="/#">Read More</a></Link>
                    </div>
                </div>
                <div className="S8itemsgrid">
                    <div className="s8imgdiv2">
                        <img className="s8img2" src={Blog2} alt="Img" />
                    </div>
                    <div className="s8desc">
                        <img src={pen} alt="Img" className="Blogicon1" />
                        <text className="s8item2txt1">Surf Auxion</text>
                        <img src={calender} alt="Img" className="Blogicon2" />
                        <text className="s8txt2">21 August,2020</text>
                        <h3>Top esssential Trends in 2021</h3>
                        <p>More off this less hello samlande lied much over tightly circa horse taped mightly</p>
                        <Link to="/singleblog"><a href="/#">Read More</a></Link>
                    </div>
                </div>
                <div className="S8itemsgrid">
                    <div className="s8imgdiv3">
                        <img className="s8img3" src={Blog3} alt="Img" />
                    </div>
                    <div className="s8desc">
                        <img src={pen} alt="Img" className="Blogicon1" />
                        <text className="s8txt1">SaberAli</text>
                        <img src={calender} alt="Img" className="Blogicon2" />
                        <text className="s8txt2">21 August,2020</text>
                        <h3>Top esssential Trends in 2021</h3>
                        <p>More off this less hello samlande lied much over tightly circa horse taped mightly</p>
                        <Link to="/singleblog"><a href="/#">Read More</a></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Section8;