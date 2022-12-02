import React from "react";
import './EcommerceItems.css';
import icon1 from '../Images/clarity_grid-view-solid.png';
import icon2 from '../Images/fa-solid_list.png';

const EcommerceItems = () => {
    return(
        <div className="Ecomhead">
                    <div>
                        <h3 className="Ecomh3">Ecommerce Acceories & Fashion item </h3>
                        <p className="Ecomp">About 9,620 results (0.62 seconds)</p>
                    </div>
                    <div className="Ecomgridform"> 
                        <form className="Ecomform">
                            <div>
                                <text className="Ecomtxt">Per Page: </text>
                                <select name="perpage">
                                    <option value="0">Select</option>
                                    <option value="10">10</option>
                                    <option value="20">20</option>
                                    <option value="30">30</option>
                                    <option value="40">40</option>
                                    <option value="50">50</option>
                                </select>
                            </div>
                            <div>
                                <text className="Ecomtxt">Sort By: </text>
                                <select name="sort">
                                    <option value="0">Best Match</option>
                                    <option value="Popularity">Popularity</option>
                                    <option value="Relevance">Relevance</option>
                                    <option value="lowtohigh">Low to High</option>
                                    <option value="hightolow">High to Low</option>
                                </select>
                            </div>
                            <div className="Ecomviewdiv">
                                <div><text className="Ecomtxt">&nbsp;&nbsp;&nbsp;View: </text></div>
                                <div><img className="Ecomicon1" src={icon1} alt="Image" /></div>
                                <div><img className="Ecomicon2" src={icon2} alt="Image" /></div>
                                <div className="Ecomtextbox"><input type="text" name="view" /></div>
                            </div>
                        </form>
                    </div>
                    <br/><br/>
                </div>
    );
}

export default EcommerceItems;