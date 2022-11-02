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
                                <input type="text" name="perpage" />
                            </div>
                            <div>
                                <text className="Ecomtxt">Sort By: </text>
                                <select name="sort">
                                    <option value="0">Best Match</option>
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