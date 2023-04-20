import React, { useEffect } from "react";
import './ShoppingCart.css';
import { Link } from "react-router-dom";
import Header from "./Common/Header";
import Footer from './Common/Footer';
import HeadDiv from './Common/HeadDiv';
import Button1 from './Common/Button';


import green_check from './Images/green_check.png';
import { useState } from 'react';
import cartService from './Service/Cart';
import { Button,Modal } from "react-bootstrap";
import dummyImage from "./Images/dummyImage.png";


const ShoppingCart = () => {
    const txt="Shopping Cart";
    const update="Update Cart";
    const clear="Clear Cart";
    const calculate="Calculate Shipping";

    // const [searchParams] = useSearchParams();
    const [cartItems, setCartItems] = useState([]);
    const [total, setTotal] = useState(0);
    const[show,setShow]=useState(false);

    const { getCartDetail } = cartService;
    const { clearCart } = cartService;
    const { increaseQuantity } = cartService;
    const { decreaseQuantity1 } = cartService;
    const { deleteSingleItem } = cartService

    useEffect(()=>{
        fetchdata();
    },[])

    const fetchdata= async () => {
        let response=await getCartDetail();
        console.log(response.cartItems);
        setCartItems(response.cartItems);
        cartItems.map((item)=>{
            setTotal(total+item.price);
        })
    }

    const calculateTotal = () => {
        cartItems.map((item)=>{
            setTotal(total+item.price);
        })
        console.log(total);
    }

    const decrement = async (id,price,cid) => {
        const response= await decreaseQuantity1({
            cartItems : {
                productId : id,
                quantity : 1,
                price : price,
                categoryId : cid,
            }
        });
        console.log(response.result);
        if(response.success==true){
            fetchdata();
        }
        // if(response.result.cartItems){
        //     document.getElementById("qty").innerHTML=response.result.cartItems.map((itm)=>itm.quantity)
        //     document.getElementById("tot").innerHTML=response.result.cartItems.map((itm)=>itm.price)

        // }

    }

    const increment = async (id,price,cid) => { 

        const response= await increaseQuantity({
            cartItems : {
                productId : id,
                quantity : 1,
                price : price,
                categoryId : cid,
            }
        });
        console.log(response.result);
        if(response.success==true){
            fetchdata();
        }
        
    }

    const EmptyCart = async () => {
        let response = await clearCart();
        console.log(response);
        if(response.success==true){
            fetchdata();
        }
    }


    const deleteItem =  async (id) => {
        const response = await deleteSingleItem({'productId' : id});
        if(response.success==true){
            fetchdata();
        }
        console.log(response);
        setShow(!show);
    }
    const popUp = () => {
        setShow(!show);
    }
    
    const onImageError = (ev) => {
        ev.target.src = dummyImage;
      }

    return(
        <div className="Shopping_Cart">
            <Header />
            <HeadDiv text={txt} />
            
            <br/>
            <div className="SCheaders">
                <div  className="SCarthead1"><h2>Product</h2></div>
                <div className="SCarthead2"><h2>Price</h2></div>
                <div className="SCarthead3"><h2>Quantity</h2></div>
                <div className="SCarthead4"><h2>Total</h2></div>
                <div className="SCarthead5"><h2>Cart Totals</h2> </div>
            </div>
            
            <br/>
            <div className="SCartdiv">
                <div className="Cartgrid1">
                
                    {   
                        cartItems?cartItems.map( (item) =>(
                            
                                <div className="CartItem">  
                                    
                                        <div className="Cartimg">
                                            <img src={item.productId.images.map((img)=>img.img)} alt="Img" onError={(e)=>onImageError(e)} />
                                        </div>
                                        <div className="CartItemdesc">
                                            <p className="Carttxt1">{item.productId.productName}</p>
                                            <p className="Carttxt2">Color:Brown</p>
                                            <p className="Carttxt3">Size:XL</p>
                                        </div>
                                        <div className="CartPricediv">
                                            <p className="Cartprice">{item.productId.price}</p>

                                        </div>
                                        <div className="CartQtydiv">
                                            <div className="Cartitemsno">
                                                <button type="submit" onClick={()=>decrement(item.productId._id,item.productId.price,item.categoryId._id,item.quantity)}>-</button>
                                                <p className="quantity">{item.quantity}</p>
                                                <button type="submit" onClick={()=>increment(item.productId._id,item.productId.price,item.categoryId._id,item.quantity)}>+</button>
                                            </div>
                                            {/* <img className="CartQty" src={Group52} alt="Img" /> */}
                                        </div>
                                        <div className="Carttotaldiv">
                                            <p className="Carttotal">{item.productId.price * item.quantity}</p>
                                        </div>
                                        <div className="Cartdelete">
                                            <button type="submit" id="delete" onClick={()=>popUp()}><i class="fa fa-trash" aria-hidden="true"></i></button>
                                        </div>
                                        <Modal show={show}>
                                            <Modal.Header>
                                                Delete Item
                                            </Modal.Header>
                                            <Modal.Body>
                                                Are you sure you want to remove ?
                                            </Modal.Body>
                                            
                                            <Modal.Footer>
                                            <Button onClick={()=>deleteItem(item.productId._id)} >
                                                Yes
                                            </Button>
                                            <Button onClick={()=>{setShow(!show)}} >
                                                No
                                            </Button>
                                            </Modal.Footer>
                                        </Modal>
                                    </div>

                        )):""
                    }
                                       
                </div>
                <div className="Cartgrid2">
                    <div className="carttotalgrid">
                        
                        <div className="carttotals_subitems">
                            <text className="subitem1">Subtotals:</text>
                            <p className="subitem2">{total}</p>
                        </div>
                        <div className="carttotals_subitems">
                            <text className="subitem1 tot">Totals:</text>
                            <p className="subitem2">{total}</p>
                        </div>
                        <div>
                            <img className="green_check" src={green_check} alt="Img" />
                            <p className="carttotal_para">Shipping & taxes calculated at checkout</p>
                        </div>
                        <Link to="/hektodemo"><button className="checkoutbtn">Proceed To Checkout</button></Link>
                        
                    </div>

                    <div className="calculategrid">
                        <h3 className="calculate">Calculate Shopping</h3>
                        <div className="Cartform">
                            <form>
                                <input type="text" placeholder="Bangladesh" /><br/>
                                <input type="text" placeholder="Mirpur Dhaka - 1200" /><br/>
                                <input type="text" placeholder="Postal Code" />
                            </form>
                            <div className="calculatebtn"><Button1 text={calculate} /></div>
                            
                        </div>
                    </div>

                </div>

            </div>
            <br/><br/>
            <div className="SCartButton">
                <p ><Button1 text={update} /></p>
                <p onClick={()=>EmptyCart()}><Button1 text={clear} /></p>
            </div>
            <br/><br/>
            <Footer />
        </div>
    );
}

export default ShoppingCart;