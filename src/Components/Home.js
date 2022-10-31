import React, { useState } from "react";
import Footer from "./Common/Footer";
import Header from "./Common/Header";

import './Home.css';
import Section1 from "./HomePage/Section1";
import Section2 from "./HomePage/Section2";
import Section3 from "./HomePage/Section3";
import Section4 from "./HomePage/Section4";
import Section5 from "./HomePage/Section5";

const Home = () => {
    return(
        <div>
            <Header />
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
            <Footer />
        </div>
    );
}

export default Home;