import React, { useEffect } from "react";
import Header from "./Common/Header";
import Footer from "./Common/Footer";
import HeadDiv from "./Common/HeadDiv";
import EcommerceItems from "./Common/EcommerceItems";
import Banner from "./Common/Banner";
import { Link, useSearchParams } from "react-router-dom";
import "./ShopGrid.css";
import Group44 from "./Images/Group 44.png";
import dummyImage from "./Images/dummyImage.png";

// import Ecom1 from './Images/Ecom1.png';
// import Ecom2 from './Images/Ecom2.png';
// import Ecom3 from './Images/Ecom3.png';
// import Ecom4 from './Images/Ecom4.png';
// import Ecom5 from './Images/Ecom5.png';
// import Ecom6 from './Images/Ecom6.png';
// import Ecom7 from './Images/Ecom7.png';
// import Ecom8 from './Images/Ecom8.png';
// import Ecom9 from './Images/Ecom9.png';
// import Ecom10 from './Images/Ecom10.png';
// import Ecom11 from './Images/Ecom11.png';
import { useState } from "react";
import productService from "./Service/Product";

const ShopGrid = () => {
  const text = "Shop Grid Default";

  const [searchParams] = useSearchParams();
  const [productDetails, setProductDetails] = useState([]);
//   const [loaded, setLoaded] = useState(false);
//   const [error, setError] = useState(false);

  const { getProduct } = productService;

  useEffect(() => {
    fetchdata();
    searchParams.set("viewtype", "g");
  }, []);

  const fetchdata = async () => {
    let response = await getProduct();
    console.log(response);
    setProductDetails(response.result.products);

    // await axios.get("https://api-ecommerce-dev.devtomaster.com/v1/product/getProducts/").then(response=>{
    //     console.log(response.data.result.products);
    //     setProductDetails(response.data.result.products);
    // })
  };

//   const onImageLoad = () =>{
//     setLoaded(true);
//   }

  const onImageError = (ev) => {
    ev.target.src = dummyImage;
  }

  return (
    <div>
      <Header />
      <HeadDiv text={text} />
      <EcommerceItems />

      <div className="shopgridmain">
        {searchParams.get("viewtype") === "g" ? (
          <div className="SGItemgrid">
            {productDetails.map((item) => (
              <Link to={`/product/${item._id}`}>
                <div className="SGItemsdiv">
                  <div className="SGimg">
                    <img
                      className="SGItemimg1"
                      src={item.images.map((img) => img.img)}
                      alt="Img"
                    //   onLoad={()=>onImageLoad()}
                      onError={(e)=>onImageError(e)}
                    />
                    <br />
                  </div>
                  <div className="SGdesc">
                    <text className="SGItem1txt1">{item.productName}</text>
                    <img className="SGgrp44" src={Group44} alt="Img" />
                    <p className="SGtxt2">
                      ${item.offer}.00
                      <span className="SGtxt3">${item.price}</span>
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          productDetails.map((item) => (
            <Link to={`/product/${item._id}`}>
              <div className="SGItemsdiv_list">
                <div className="SGimg1">
                  <img
                    className="SGItemimg_list"
                    src={item.images.map((img) => img.img)}
                    alt="Img"
                  />
                  <br />
                </div>
                <div className="SGdesc1">
                  <text className="SGItem1txt1">{item.productName}</text>
                  <p className="SGitempara">{item.description}</p>
                  <img className="SGgrp44" src={Group44} alt="Img" />
                  <p className="SGtxt2_list">
                    ${item.offer}.00
                    <span className="SGtxt3">${item.price}</span>
                  </p>
                </div>
              </div>
            </Link>
          ))
        )}
        <Banner />
      </div>

      <Footer />
    </div>
  );
};

export default ShopGrid;
