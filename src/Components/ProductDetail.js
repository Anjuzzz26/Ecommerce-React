import React from "react";
import './ProductDetail.css';

import Header from "./Common/Header";
import Footer from './Common/Footer';
import HeadDiv from './Common/HeadDiv';
import Banner from './Common/Banner';
import PDSection1 from "./ProductDetails/PDSection1";
import PDSection2 from "./ProductDetails/PDSection2";
import PDSection3 from "./ProductDetails/PDSection3";



const ProductDetails = () => {
    const txt="Product Details";
    return(
        <div>
            <Header />
            <HeadDiv text={txt} />
            <br/>
            <PDSection1 />
            <br/><br/><br/>
            <PDSection2 />
            <br/><br/><br/>   
            <PDSection3 />
            <br/>          
            <Banner />
            <Footer />
        </div>
    );
}

export default ProductDetails;