import React,{useEffect, useState} from "react";
import './ProductDetail.css';
import { useNavigate, useParams } from "react-router-dom";
import CustomButton from "./Common/Button";
import dummyImage from "./Images/dummyImage.png";

import Header from "./Common/Header";
import Footer from './Common/Footer';
import HeadDiv from './Common/HeadDiv';
import Banner from './Common/Banner';
import './ProductDetails/PDSection1.css';
import { Button,Modal } from "react-bootstrap";

import Rectangle_134 from './Images/Rectangle 134.png';
import Rectangle_136 from './Images/Rectangle 136.png';
import Rectangle_137 from './Images/Rectangle 137.png';
import Rectangle_138 from './Images/Rectangle 138.png';
import filledstar from './Images/Star.png';
import heart from './Images/uil_heart-alt.png';
import Group_205 from './Images/Group 205.png';
import PDSection2 from "./ProductDetails/PDSection2";
import PDSection3 from "./ProductDetails/PDSection3";

import productService from "./Service/Product";
import cartService from './Service/Cart';


const ProductDetails = () => {
    const txt="Product Details";

    const navigate = useNavigate();
    const [product, setProduct] = useState([]);
    const {id} = useParams();

    const[show,setShow]=useState(false);
    const[message,setMessage]=useState('');
    const[status,setStatus]=useState("");
    const[color,setColor]=useState("");

    const { getProductDetail } = productService;
    const { addItemToCart } = cartService;

    useEffect(()=>{
        fetchdata();
    },[id])

    const fetchdata= async () => {
        let response=await getProductDetail(id);
        console.log(response);
        setProduct(response.result.product);
        // await axios.get(`https://api-ecommerce-dev.devtomaster.com/v1/product/getProduct/${id}`).then(response=>{
        //     console.log(response.data.result.product);
        //     setProduct(response.data.result.product)
        // })
    }

    const onClick = async (e) =>{
        e.preventDefault();
        const token=localStorage.getItem('Access_token');
        if(token){
            const data = await addItemToCart({cartItems : {
                productId : product._id,
                quantity : 1,
                price : product.price,
                categoryId : product.category?product.category._id:"",
            }}).catch((e)=>{
                console.log("error",e);
                setMessage(e.message);
                setStatus("Failed");
                setColor("red");
                setShow(!show);
            });
            if(data.success==true){
                setStatus("Success");
                setMessage(data.message);
                setColor("green");
                setShow(!show);
            }
            else{
                navigate('/login');
            }
        }
       
        else{
            navigate('/login');
        }
        
    }

    const onImageError = (ev) => {
        ev.target.src = dummyImage;
      }

    return(
        <div>
            <Header />
            <HeadDiv text={txt} />
            <br/>
            <div className="PDdiv">
                <div className="PDgriditem1">
                    
                    <div className="PDgridimg">
                        <img className="PDimg1" src={product.images?product.images.map((img)=>img.img):Rectangle_134} alt="Img" onError={(e)=>onImageError(e)} />
                    </div>
                    
                    <div className="PDgridimg">
                        <img className="PDimg2" src={product.images?product.images.map((img)=>img.img):Rectangle_136} alt="Img" onError={(e)=>onImageError(e)} />
                    </div>
                    
                    <div className="PDgridimg">
                        <img className="PDimg3" src={product.images?product.images.map((img)=>img.img):Rectangle_137} alt="Img" onError={(e)=>onImageError(e)} />
                    
                    </div>
                </div>
                
                
                <div className="PDgriditem2">
                    <img className="PDimg4" src={product.images?product.images.map((img)=>img.img):Rectangle_138} alt="Img" onError={(e)=>onImageError(e)} />
                </div>
                
                
                <div className="PDgriditem3">

                    <h1 className="PDtxt1">{product.productName}</h1>
                    <img className="PDstar" src={filledstar} alt="Img" />
                    <img className="PDstar" src={filledstar} alt="Img" />
                    <img className="PDstar" src={filledstar} alt="Img" />
                    <img className="PDstar" src={filledstar} alt="Img" />
                    <img className="PDstar" src={filledstar} alt="Img" />
                    <p className="PDtxt2">(22)</p>
                    <p className="PDtxt3">${product.price} &nbsp;&nbsp;&nbsp;<span>${product.offer}.00</span></p>
                    <p className="PDtxt4">Color</p>
                    <p className="PDtxt5">{product.description}</p>
                    <p className="PDtxt6" onClick={(e) => onClick(e)} ><CustomButton text={"Add To cart"} /></p>
                    <Modal show={show}>
                        <Modal.Header style={{background: color}}>
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
                    <img className="PDheart" src={heart} alt="Img" />
                    <p className="PDtxt7">Categories:&nbsp;&nbsp;&nbsp;{product.category?product.category.catName:""}</p>
                    <p className="PDtxt8">Tags</p>
                    <p className="PDtxt9">Share</p>
                    <img className="PDshare" src={Group_205} alt="Img" />

                </div>
            </div>
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