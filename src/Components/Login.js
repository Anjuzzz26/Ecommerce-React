import React, { useState } from "react";
import "./Login.css";

import Header from "./Common/Header";
import Footer from "./Common/Footer";
import HeadDiv from "./Common/HeadDiv";
import Banner from "./Common/Banner";
import Button1 from "./Common/Button";
import { Link, useNavigate } from "react-router-dom";
import userService from "./Service/User";
import { Button,Modal } from "react-bootstrap";

const Login = () => {
  const txt = "My Account";

  const [inputvalue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [error, setError] = useState({});
  const[show,setShow]=useState(false);
  const[message,setMessage]=useState('');
  const[status,setStatus]=useState("");
  const[color,setColor]=useState("");

  const { login } = userService;

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const data = await login(inputvalue)
    .catch((e)=>{
      console.log("error",e);
      setMessage(e.message);
      setStatus("Failed");
      setColor("red");
      setShow(!show);
    });
    if(data.success==true){
      setStatus("Success");
      setMessage(data.message);
      setShow(!show);
      setInputValue({
        email: "",
        password: "",
    })
    localStorage.setItem('Access_token', data.result.accessToken)
    navigate('/');
  }
  };

  const Validation = (e) => {
    const { name, value } = e.target;
    setError((prev) => {
      const stateObj = { ...prev, [name]: "" };

      switch (name) {
        case "email":
          if (!value) {
            stateObj[name] = "*Email is Required";
          } else if (!/\S+@\S+\.\S+/.test(value)) {
            stateObj[name] = "*Email Is Invalid";
          }
          break;

        case "password":
          if (!value) {
            stateObj[name] = "*Password is Required";
          }
          break;
        default:
          break;
      }
      return stateObj;
    });
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({
      ...prev,
      [name]: value,
    }));
    Validation(e);
  };

  return (
    <div>
      <Header />
      <HeadDiv text={txt} />

      <br />
      <br />
      <div className="logindiv">
        <h3 className="loginhead">Login</h3>
        <p className="logintxt">Please login using account detail bellow.</p>

        <form onSubmit={(e) => onSubmitHandler(e)}>
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={inputvalue.email}
            onChange={onChangeHandler}
          />
          { error.email && <p className="error">{error.email}</p> }
          <input
            type="text"
            placeholder="Password"
            className="password"
            name="password"
            value={inputvalue.password}
            onChange={onChangeHandler}
          />
          { error.password && <p className="error">{error.password}</p> }
          <div className="forgetpwddiv">
          <a href="/#" className="forgetpwd">
            Forgot your password?
          </a>
          </div>
          <div className="loginbtn">
            <Button1 text={"Sign In"} />
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
            Don’t have an Account?
            <Link to="/signup" className="signup">
              Create account
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
};

export default Login;
