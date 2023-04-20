import React from "react";
import './FAQ.css';

import Header from "./Common/Header";
import Footer from './Common/Footer';
import HeadDiv from './Common/HeadDiv';
import Button from './Common/Button';
import Banner from './Common/Banner';

const FAQ = () => {
    return(
        <div>
		<Header />
		<HeadDiv text={"FAQ"} />
        <br/>

        <div className="FAQdiv">

            <div className="FAQgriditem1">
                <h2 className="FAQhead">Generel Information</h2>
                <h4 className="FAQsubhead">Eu dictumst cum at sed euismood condimentum?</h4>
                <p className="FAQtxt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Tincidunt sed tristique mollis vitae, consequat gravida sagittis.</p>
                <h4 className="FAQsubhead">Eu dictumst cum at sed euismood condimentum?</h4>
                <p className="FAQtxt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Tincidunt sed tristique mollis vitae, consequat gravida sagittis.</p>
                <h4 className="FAQsubhead">Eu dictumst cum at sed euismood condimentum?</h4>
                <p className="FAQtxt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Tincidunt sed tristique mollis vitae, consequat gravida sagittis.</p>
                    <h4 className="FAQsubhead">Eu dictumst cum at sed euismood condimentum?</h4>
                <p className="FAQtxt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Tincidunt sed tristique mollis vitae, consequat gravida sagittis.</p>
            </div>
            <div className="FAQgriditem2">
                <h2 className="FAQhead5">Ask a Question</h2>
                <form className="FAQform">
                    <input type="text" placeholder="  Your Name*" />
                    <input type="text" placeholder="  Subject*" />
                    <textarea rows="7" cols="50" placeholder="  Type Your Message*" />
                    <div className="FAQbtn">
                            <Button text={"Send Mail"} />
                    </div>
                </form>
            </div>

        </div>
		

		<br/><br/><br/>
		<Banner />
		<Footer />

        </div>
    );
}

export default FAQ;