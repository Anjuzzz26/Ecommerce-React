import React, { useEffect } from "react";
import "./HektoDemo.css";
import { useState } from "react";
import cartService from "./Service/Cart";
import userService from "./Service/User";
import Service from "./Service/Checkout";

import Header from "./Common/Header";
import HeadDiv from "./Common/HeadDiv";
import Footer from "./Common/Footer";
// import Button from "./Common/Button";
import { Link } from "react-router-dom";
import dummyImage from "./Images/dummyImage.png";

import green_check from "./Images/green_check.png";
import green_check1 from "./Images/green_check1.png";
import { Button,Modal } from "react-bootstrap";


const HektoDemo = () => {
  //   const txt = "Continue Shipping";
  const [cartItems, setCartItems] = useState([]);
  const [currentUser, setCurrentUser] = useState([]);
  const[show,setShow]=useState(false);
  const[message,setMessage]=useState('');
  const[status,setStatus]=useState("");
  const [address, setAddress] = useState({
    shippingPrice : 219.00,
    shippingAddress:{
        address: "",
        city: "",
        state: "",
        phoneNumber: ""
    },
    orderStatus:"placed"
  });

  const { getCartDetail } = cartService;
  const { getCurrentUserDetails } = userService;
  const { newOrder } = Service;

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    let response = await getCartDetail();
    setCartItems(response.cartItems);
    let userdet = await getCurrentUserDetails();
    setCurrentUser(userdet.result.userDetails);
    console.log(currentUser);
    // setFirstName(fullname[0]);
    // setLastName(fullname[fullname.length - 1]);
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    address.shippingAddress[name]= value;
    setAddress({...address})
  }
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const data = await newOrder(address).catch((e)=>{
      console.log("error",e);
      setMessage(e.message);
      setStatus("Failed");
      setShow(!show);
    });;
    console.log(data);
    if(data.success==true){
      setShow(!show);
      setMessage(data.message);
      setStatus("Success");
    }
  }

  const onImageError = (ev) => {
    ev.target.src = dummyImage;
  }

  let name=currentUser.fullName?currentUser.fullName:'';
  let fullname=name.split(' ');

  return (
    <div>
      <Header />

      <HeadDiv text={"Hekto Demo"} />
      <div className="HDheader">
        <h3 className="HDhead">Hekto Demo</h3>
        <p className="HDsubhead">Cart/ Information/ Shipping/ Payment</p>
      </div>

      <div className="HDgrid1">
        <div className="HDinfogrid">
          <div className="HDcontactdetails">
            <h3 className="HDtxt1">Contact Information</h3>
            <p className="HDtxt2">
              Already have an account? <a href="/#">Log In</a>
            </p>
            <form>
              <input type="text" placeholder="Email or mobile phone number" />
            </form>
            <img className="green_check1" src={green_check1} alt="Img" />
            <p className="HDtxt3">
              Keep me up to date on news and excluive offers
            </p>
          </div>

          <div className="HDshippingdetails">
            <h3 className="HDtxt4">Shipping address</h3>
            <form onSubmit={(e) => onSubmitHandler(e)}>
              <input
                type="text"
                placeholder="First name"
                className="textbox"
                value={fullname[0]}
              />
              <input type="text" placeholder="Last name" className="textbox2" value={fullname[fullname.length - 1]}/>
              <input
                type="text"
                placeholder="Address"
                className="inputtextbox"
                name="address"
                onChange={onChangeHandler}
                value={address.shippingAddress.address}
                required
              />
              {/* <input
                type="text"
                placeholder="Appaetnentment,suit,e.t.c (optinal)"
                className="inputtextbox"
                name="appartment"
                onChange={onChangeHandler}
                value={address.shippingAddress.address}
              /> */}
              <input
                type="text"
                placeholder="City"
                className="inputtextbox"
                name="city"
                onChange={onChangeHandler}
                value={address.shippingAddress.city}
                required
              />
              <input
                type="text"
                placeholder="Bangladesh"
                className="textbox"
                name="state"
                onChange={onChangeHandler}
                value={address.shippingAddress.state}
                required
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="textbox2"
                name="phoneNumber"
                onChange={onChangeHandler}
                value={address.shippingAddress.phoneNumber}
                required
              />
              <button type="submit">Submit</button>
            </form>
            <div className="HDbtn">
              {/* <Link to="/shopgrid">
                <Button text={txt} />
              </Link> */}
            </div>
          </div>
        </div>

        <div className="HDitemsgrid">
          <div className="HDiteminfogrid">
            {cartItems
              ? cartItems.map((item) => (
                  <div className="HDitems">
                    <div>
                      <img
                        src={item.productId.images.map((img) => img.img)}
                        alt="Img"
                        className="HDimg"
                        onError={(e)=>onImageError(e)}
                      />
                    </div>
                    <div className="HDitemdiv">
                      <text className="HDitemname">
                        {item.productId.productName}
                      </text>
                      <p className="HDitemcolor">Color: Brown</p>
                      <p className="HDitemsize">Size: XL</p>
                    </div>
                    <div>
                      <p className="HDitemprice">{item.productId.price}</p>
                    </div>
                  </div>
                ))
              : ""}
          </div>

          <div className="HDshipping">
            <div className="HDcarttotalgrid">
              <div className="HDcarttotals_subitems">
                <text className="HDsubitem1">Subtotals:</text>
                <p className="HDsubitem2">£219.00</p>
              </div>
              <div className="HDcarttotals_subitems">
                <text className="HDsubitem1 tot">Totals:</text>
                <p className="HDsubitem2">£325.00</p>
              </div>
              <div className="HDcheckdiv">
                <img className="HDgreen_check" src={green_check} alt="Img" />
                <p className="HDcarttotal_para">
                  Shipping & taxes calculated at checkout
                </p>
              </div>
              <Link to="/ordercompleted">
                <button className="HDcheckoutbtn">Proceed To Checkout</button>
              </Link>
              <Modal show={show}>
            <Modal.Header>
                {status}
            </Modal.Header>
            <Modal.Body>
              {message}
            </Modal.Body>
            
            <Modal.Footer>
              <Button onClick={()=>{setShow(!show)}} >
                OK
              </Button>
            </Modal.Footer>
          </Modal>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HektoDemo;
