import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import Header from "./Common/Header";
import Footer from "./Common/Footer";
import HeadDiv from "./Common/HeadDiv";
import Banner from "./Common/Banner";
import Button1 from "./Common/Button";
import userService from "./Service/User";
import { Button,Modal } from "react-bootstrap";


export default function SignUp() {
  const [inputvalue, setInputValue] = useState({
    name: "",
    email: "",
    pwd: "",
  });

  const [error, setError] = useState({});
  const[show,setShow]=useState(false);
  const[message,setMessage]=useState('');
  const[status,setStatus]=useState("");
  const[color,setColor]=useState("");


  const { signup } = userService;

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const data = await signup(inputvalue).catch((e)=>{
      console.log("error",e);
      setMessage(e.message);
      setStatus("Failed");
      setColor("red");
      setShow(!show);
    });
    if(data.success==true){
      setStatus("Success");
      setColor("#228B22");
      setMessage(data.message);
      setShow(!show);
      setInputValue({
        name: "",
        email: "",
        pwd: "",
    })
  }
    console.log(data);
    
  };



  

  const SignUpValidation = (e) => {
    const { name, value } = e.target;
    setError((prev) => {
      const stateObj = { ...prev, [name]: "" };

      switch (name) {
        case "name":
          if(!value){
            stateObj[name] = "*Name is Required";
          }
          break;

        case "email":
          if(!value){
            stateObj[name] = "*Email is Required";
          }
          else if(!/\S+@\S+\.\S+/.test(value)){
            stateObj[name] = "*Email Is Invalid";
        }
        break;

        case "pwd":
          if(!value){
            stateObj[name] = "*Password is Required";
          } else if(value.length < 8){
            stateObj[name] = "*Password should atleast contain 8 characters";
          }else if(!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/.test(value)){
            stateObj[name] = "Password must contain one uppercase letter, one number and a special character";
          }
          break;
          default:
            break;
      }
      return stateObj;
    });
}

const onChangeHandler = (e) => {
  const { name, value } = e.target;
    setInputValue((prev) => ({
      ...prev,
      [name]: value,
    }));
    SignUpValidation(e);
}

  return (


    <div>
      <Header />
      <HeadDiv text={"My Account"} />

      <br />
      <br />
      <div className="logindiv">
        <h3 className="loginhead">Sign Up</h3>

        <form onSubmit={(e) => onSubmitHandler(e)}>
          <input
            value={inputvalue.name}
            type="text"
            name="name"
            placeholder="Name"
            onChange={onChangeHandler}
          />
          { error.name && <p className="error">{error.name}</p> }
          <input
            value={inputvalue.email}
            type="text"
            name="email"
            placeholder="Email Address"
            onChange={onChangeHandler}
          />
          { error.email && <p className="error">{error.email}</p> }
          <input
            value={inputvalue.pwd}
            type="text"
            name="pwd"
            placeholder="Password"
            className="pwd"
            onChange={onChangeHandler}
          />
          { error.pwd && <p className="error">{error.pwd}</p> }
          <div className="loginbtn">
            <Button1 text={"Sign Up"} />
          </div>
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

          <p className="logintxt2">
            Already have an Account?
            <Link to="/login" className="signup">
              Login
            </Link>
          </p>
        </form>
      </div>

      <br />
      <br />
      <br />
      <Banner />
      <Footer />
    </div>
  );
}
