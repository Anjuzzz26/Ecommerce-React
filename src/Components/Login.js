import React from "react";
import './Login.css';

import Header from "./Common/Header";
import Footer from './Common/Footer';
import HeadDiv from './Common/HeadDiv';
import Banner from './Common/Banner';
import Button from './Common/Button';

const Login = () => {
    const txt="My Account";

    return(
        <div>
            <Header />
            <HeadDiv text={txt} />

            <br/><br/>
            <div className="logindiv">

                <h3 className="loginhead">Login</h3>
                <p className="logintxt">Please login using account detail bellow.</p>
                <form>
                    <input type="text" placeholder="  Email Address" />
                    <input type="text" placeholder="  Password" className="pwd"/>
                    <a href="#" className="forgetpwd">Forgot your password?</a>
                    <div className="loginbtn">
                        <Button text={"Sign In"} />
                    </div>
                    <p className="logintxt2">Don’t have an Account?<a href="#" className="signup">Create account</a></p>
                </form>
            </div>

            <br/><br/><br/>
            <Banner />
            <Footer />

        </div>
    );
}

export default Login;