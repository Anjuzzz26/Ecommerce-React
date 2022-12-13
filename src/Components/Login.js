import React, {useState} from "react";
import './Login.css';

import Header from "./Common/Header";
import Footer from './Common/Footer';
import HeadDiv from './Common/HeadDiv';
import Banner from './Common/Banner';
import Button from './Common/Button';
import {Link} from 'react-router-dom';

const Login = () => {
    const txt="My Account";

    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');

    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log(email);
        console.log(pwd);
        setEmail("");
        setPwd("");
    }

    return(
        <div>
            <Header />
            <HeadDiv text={txt} />

            <br/><br/>
            <div className="logindiv">

                <h3 className="loginhead">Login</h3>
                <p className="logintxt">Please login using account detail bellow.</p>
                
                <form onSubmit={(e)=> onSubmitHandler(e)}>
                    <input value={email} type="text" placeholder="Email Address" required onChange={(e) => setEmail(e.target.value)} />
                    <input value={pwd} type="text" placeholder="Password" className="pwd" required onChange={(e) => setPwd(e.target.value)} />
                    <a href="#" className="forgetpwd">Forgot your password?</a>
                    <div className="loginbtn">
                        <Button text={"Sign In"} />
                    </div>
                    <p className="logintxt2">Don’t have an Account?<Link to="/signup" className="signup">Create account</Link></p>
                </form>
            </div>

            <br/><br/><br/>
            <Banner />
            <Footer />

        </div>
    );
}

export default Login;