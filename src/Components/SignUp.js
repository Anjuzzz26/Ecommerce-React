import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./Login.css";
import { Link } from "react-router-dom";
import Header from "./Common/Header";
import Footer from "./Common/Footer";
import HeadDiv from "./Common/HeadDiv";
import Banner from "./Common/Banner";
import Button from "./Common/Button";
import Validation from "./SignUpValidation";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  const [error, setError] = useState({});

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setError(Validation(name,email,pwd))
    console.log(name);
    console.log(email);
    console.log(pwd);
  };

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
            value={name}
            type="text"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
          { error.name && <p className="error">{error.name}</p> }
          <input
            value={email}
            type="text"
            placeholder="Email Address"
            onChange={(e) => setEmail(e.target.value)}
          />
          { error.email && <p className="error">{error.email}</p> }
          <input
            value={pwd}
            type="text"
            placeholder="Password"
            className="pwd"
            onChange={(e) => setPwd(e.target.value)}
          />
          { error.pwd && <p className="error">{error.pwd}</p> }
          <div className="loginbtn">
            <Button text={"Sign Up"} />
          </div>

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
