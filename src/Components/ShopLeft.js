import React from "react";
import './ShopLeft.css';

import Header from "./Common/Header";
import Footer from './Common/Footer';
import HeadDiv from './Common/HeadDiv';
import EcommerceItems from './Common/EcommerceItems';
import Banner from './Common/Banner';

import Pic8 from './Images/Pic8.png';
import Pic9 from './Images/Pic9.png';
import Pic10 from './Images/Pic10.png';
import Pic11 from './Images/Pic11.png';
import Pic12 from './Images/Pic12.png';
import Pic13 from './Images/Pic13.png';
import Pic14 from './Images/Pic14.png';
import filledstar from './Images/Star.png';
import notfilledstar from './Images/NFstar.png';
import cart from './Images/shopcart.png';
import heart from './Images/uil_heart-alt.png';
import searchplus from './Images/uil_search-plus.png';
import Ellipse_65 from './Images/Ellipse 65.png';
import Ellipse_66 from './Images/Ellipse 66.png';
import Ellipse_24 from './Images/Ellipse 24.png';
// import check from './Images/uil_check.png';
// import checkpink from './Images/uil_check_pink.png';
// import checkyellow from './Images/uil_check_yellow.png';
// import check_filled from './Images/uil_check_filled.png';
// import check_pfill from './Images/uil_check_pinkfilled.png';
// import check_yfill from './Images/uil_check_yellowfilled.png';

import blue from './Images/blue.png';
import orange from './Images/orange.png';
import brown from './Images/brown.png';
import green from './Images/green.png';
import purple from './Images/purple.png';
import sky from './Images/sky.png';


const ShopLeft = () => {
    const txt="Shop Left Sidebar"
    return(
        <div>
            <Header />
            <HeadDiv text={txt} />
            <EcommerceItems />
            <br/><br/>
            <div className="ShopLeft">
                        <div className="Sleft_div">
                            <div className="Sleft_filtergrid">
                                <div className="Sleft_brand">
                                    <h3 className="filter_head">Product Brand</h3>
                                    <div className="checkbox_container"><input type="checkbox" className="checkbox" value="Coaster" id="PB1" />
                                    <label for="PB1" className="filter_list">Coaster Furniture</label></div>
                                    <div className="checkbox_container"><input type="checkbox" className="checkbox" value="Fusion" id="PB2" />
                                    <label for="PB2" className="filter_list">Fusion Dot High Fashion</label></div>
                                    <div className="checkbox_container"><input type="checkbox" className="checkbox" value="Unique" id="PB3" />
                                    <label for="PB3" className="filter_list">Unique Furnitture Restor</label></div>
                                    <div className="checkbox_container"><input type="checkbox" className="checkbox" value="Dream" id="PB4" />
                                    <label for="PB4" className="filter_list">Dream Furnitture Flipping</label></div>
                                <div className="checkbox_container"><input type="checkbox" className="checkbox" value="Young" id="PB5" />
                                    <label for="PB5" className="filter_list">Young Repurposed</label></div>
                                    <div className="checkbox_container"><input type="checkbox" className="checkbox" value="Green" id="PB6" />
                                    <label for="PB6" className="filter_list">Green DIY furniture</label></div>
                                </div>

                                <div className="Sleft_discount">
                                    <h3 className="filter_head">Discount Offer</h3>
                                    <div className="checkbox_container"><input type="checkbox" className="checkbox" value="CashBack_20" id="DO1" />
                                    <label for="DO1" className="filter_list">20% Cashback</label></div>
                                    <div className="checkbox_container"><input type="checkbox" className="checkbox" value="CashBack_5" id="DO2" />
                                    <label for="DO2" className="filter_list">5% Cashback Offer</label></div>
                                    <div className="checkbox_container"><input type="checkbox" className="checkbox" value="CashBack_25" id="DO3" />
                                    <label for="DO3" className="filter_list">25% Cashback Offer</label></div>
                                </div>

                                <div className="Sleft_rating">
                                    <h3 className="filter_head">Rating Item</h3>

                                    <div className="checkbox_container"><input type="checkbox" className="checkbox" value="star_4" id="Rating1" />
                                    <img className="rating_star" src={filledstar} alt="Img" />
                                    <img className="rating_star" src={filledstar} alt="Img" />
                                    <img className="rating_star" src={filledstar} alt="Img" />
                                    <img className="rating_star" src={filledstar} alt="Img" />
                                    <img className="rating_star" src={notfilledstar} alt="Img" />
                                    <p className="rating_list">(2341)</p></div>

                                    <div className="checkbox_container"><input type="checkbox" className="checkbox" value="star_3" id="Rating2" />
                                    <img className="rating_star" src={filledstar} alt="Img" />
                                    <img className="rating_star" src={filledstar} alt="Img" />
                                    <img className="rating_star" src={filledstar} alt="Img" />
                                    <img className="rating_star" src={notfilledstar} alt="Img" />
                                    <img className="rating_star" src={notfilledstar} alt="Img" />
                                    <p className="rating_list">(1726)</p></div>

                                    <div className="checkbox_container"><input type="checkbox" className="checkbox" value="star_2" name="Rating3" />
                                    <img className="rating_star" src={filledstar} alt="Img" />
                                    <img className="rating_star" src={filledstar} alt="Img" />
                                    <img className="rating_star" src={notfilledstar} alt="Img" />
                                    <img className="rating_star" src={notfilledstar} alt="Img" />
                                    <img className="rating_star" src={notfilledstar} alt="Img" />
                                    <p className="rating_list">(258)</p></div>

                                    <div className="checkbox_container"><input type="checkbox" className="checkbox" value="star_2" name="Rating4" />
                                    <img className="rating_star" src={filledstar} alt="Img" />
                                    <img className="rating_star" src={filledstar} alt="Img" />
                                    <img className="rating_star" src={notfilledstar} alt="Img" />
                                    <img className="rating_star" src={notfilledstar} alt="Img" />
                                    <img className="rating_star" src={notfilledstar} alt="Img" />
                                    <p className="rating_list">(25)</p></div>

                                </div>

                                <div className="Sleft_categories">

                                    <h3 className="filter_head">Categories</h3>

                                    <div className="checkbox_container"><input type="checkbox" className="checkbox" value="Prestashop" id="Categories1" />
                                    <label for="Categories1" className="filter_list" >Prestashop</label></div>
                                    <div className="checkbox_container"><input type="checkbox" className="checkbox" value="Magneto" id="Categories2" />
                                    <label for="Categories2" className="filter_list" >Magento</label></div>
                                    <div className="checkbox_container"><input type="checkbox" className="checkbox" value="Bigcommerce" id="Categories3" />
                                    <label for="Categories3" className="filter_list" >Bigcommerce</label></div>
                                    <div className="checkbox_container"><input type="checkbox" className="checkbox" value="osCommerce" id="Categories4" />
                                    <label for="Categories4" className="filter_list" >osCommerce</label></div>
                                    <div className="checkbox_container"><input type="checkbox" className="checkbox" value="3dcart" id="Categories5" />
                                    <label for="Categories5" className="filter_list" >3dcart</label></div>
                                    <div className="checkbox_container"><input type="checkbox" className="checkbox" value="Bags" id="Categories6" />
                                    <label for="Categories6" className="filter_list" >Bags</label></div>
                                    <div className="checkbox_container"><input type="checkbox" className="checkbox" value="Accessories" id="Categories7" />
                                    <label for="Categories7" className="filter_list">Accessories</label></div>
                                    <div className="checkbox_container"><input type="checkbox" className="checkbox" value="Jewellery" id="Categories8" />
                                    <label for="Categories8" className="filter_list">Jewellery</label></div>
                                    <div className="checkbox_container"><input type="checkbox" className="checkbox" value="Watches" id="Categories9" />
                                    <label for="Categories9" className="filter_list" >Watches</label></div>

                                </div>

                                <div className="Sleft_price">

                                    <h3 className="filter_head">Price Filter</h3>
                                    
                                    <div className="checkbox_container"><input type="checkbox" className="checkbox" id="Price1" />
                                    <label for="Price1" className="filter_list">$0.00 - $150.00</label></div>
                                    <div className="checkbox_container"><input type="checkbox" className="checkbox" id="Price2" />
                                    <label for="Price2" className="filter_list">$150.00 - $350.00</label></div>
                                    <div className="checkbox_container"><input type="checkbox" className="checkbox" id="Price3" />
                                    <label for="Price3" className="filter_list">$150.00 - $504.00</label></div>
                                    <div className="checkbox_container"><input type="checkbox" className="checkbox" id="Price4" />
                                    <label for="Price4" className="filter_list">$450.00 +</label></div>
                                    <form className="filter_price_search">
                                        <input type="text" name="pricefilter" />
                                    </form>

                                </div>

                                <div className="Sleft_color">

                                    <h3 className="filter_head">Filter By Color</h3>

                                    <img className="colordot1" src={blue} alt="Img" />
                                    <p className="color_list1">Blue</p>
                                    <img className="colordot2" src={orange} alt="Img" />
                                    <p className="color_list2">Orange</p>
                                    <img className="colordot3" src={brown} alt="Img" />
                                    <p className="color_list3">Brown</p>
                                    <img className="colordot4" src={green} alt="Img" />
                                    <p className="color_list4">Green</p>
                                    <img className="colordot5" src={purple} alt="Img" />
                                    <p className="color_list5">Purple</p>
                                    <img className="colordot6" src={sky} alt="Img" />
                                    <p className="color_list6">Sky</p>

                                </div>
                            </div>


                            <div className="Sleft_Itemgrid">
                                <div className="SLeft_gridItems">
                                    <div className="SLimggrid">
                                        <img src={Pic8} alt="Img" />
                                    </div>
                                    <div className="SLeft_descgrid">
                                        <text className="SLtxt1">Dictum morbi</text>
                                        <img className="SLdot1" src={Ellipse_24} alt="Img" />
                                        <img className="SLdot2" src={Ellipse_65} alt="Img" />
                                        <img className="SLdot3" src={Ellipse_66} alt="Img" />
                                        <p className="SLtxt2">$26.00 &nbsp;&nbsp;&nbsp;<span>$52.00</span></p>
                                        <img className="SLstar1" src={filledstar} alt="Img" />
                                        <img className="SLstar2" src={filledstar} alt="Img" />
                                        <img className="SLstar3" src={filledstar} alt="Img" />
                                        <img className="SLstar4" src={filledstar} alt="Img" />
                                        <img className="SLnfstar" src={notfilledstar} alt="Img" />
                                        <p className="SLtxt3">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Magna in est adipiscing in phasellus non in justo.</p>
                                        <img className="SLcart" src={cart} alt="Img" />
                                        <img className="SLheart" src={heart} alt="Img" />
                                        <img className="SLsearch" src={searchplus} alt="Img" />
                                    </div>
                                </div>
                                <div className="SLeft_gridItems">
                                    <div className="SLimggrid">
                                        <img src={Pic9} alt="Img" />
                                    </div>
                                    <div className="SLeft_descgrid">
                                        <text className="SLtxt1">Sodales sit</text>
                                        <img className="SLdot1" src={Ellipse_24} alt="Img" />
                                        <img className="SLdot2" src={Ellipse_65} alt="Img" />
                                        <img className="SLdot3" src={Ellipse_66} alt="Img" />
                                        <p className="SLtxt2">$26.00  &nbsp;&nbsp;&nbsp;<span>$52.00</span></p>
                                        <img className="SLstar1" src={filledstar} alt="Img" />
                                        <img className="SLstar2" src={filledstar} alt="Img" />
                                        <img className="SLstar3" src={filledstar} alt="Img" />
                                        <img className="SLstar4" src={filledstar} alt="Img" />
                                        <img className="SLnfstar" src={notfilledstar} alt="Img" />
                                        <p className="SLtxt3">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Magna in est adipiscing in phasellus non in justo.</p>
                                        <img className="SLcart" src={cart} alt="Img" />
                                        <img className="SLheart" src={heart} alt="Img" />
                                        <img className="SLsearch" src={searchplus} alt="Img" />
                                    </div>
                                </div>
                                <div className="SLeft_gridItems">
                                    <div className="SLimggrid">
                                        <img src={Pic10} alt="Img" />
                                    </div>
                                    <div className="SLeft_descgrid">
                                        <text className="SLtxt1">Nibh varius</text>
                                        <img className="SLdot1" src={Ellipse_24} alt="Img" />
                                        <img className="SLdot2" src={Ellipse_65} alt="Img" />
                                        <img className="SLdot3" src={Ellipse_66} alt="Img" />
                                        <p className="SLtxt2">$26.00  &nbsp;&nbsp;&nbsp;<span>$52.00</span></p>
                                        <img className="SLstar1" src={filledstar} alt="Img" />
                                        <img className="SLstar2" src={filledstar} alt="Img" />
                                        <img className="SLstar3" src={filledstar} alt="Img" />
                                        <img className="SLstar4" src={filledstar} alt="Img" />
                                        <img className="SLnfstar" src={notfilledstar} alt="Img" />
                                        <p className="SLtxt3">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Magna in est adipiscing in phasellus non in justo.</p>
                                        <img className="SLcart" src={cart} alt="Img" />
                                        <img className="SLheart" src={heart} alt="Img" />
                                        <img className="SLsearch" src={searchplus} alt="Img" />
                                    </div>
                                </div>
                                <div className="SLeft_gridItems">
                                    <div className="SLimggrid">
                                        <img src={Pic11} alt="Img" />
                                    </div>
                                    <div className="SLeft_descgrid">
                                        <text className="SLtxt1">Mauris quis</text>
                                        <img className="SLdot1" src={Ellipse_24} alt="Img" />
                                        <img className="SLdot2" src={Ellipse_65} alt="Img" />
                                        <img className="SLdot3" src={Ellipse_66} alt="Img" />
                                        <p className="SLtxt2">$26.00  &nbsp;&nbsp;&nbsp;<span>$52.00</span></p>
                                        <img className="SLstar1" src={filledstar} alt="Img" />
                                        <img className="SLstar2" src={filledstar} alt="Img" />
                                        <img className="SLstar3" src={filledstar} alt="Img" />
                                        <img className="SLstar4" src={filledstar} alt="Img" />
                                        <img className="SLnfstar" src={notfilledstar} alt="Img" />
                                        <p className="SLtxt3">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Magna in est adipiscing in phasellus non in justo.</p>
                                        <img className="SLcart" src={cart} alt="Img" />
                                        <img className="SLheart" src={heart} alt="Img" />
                                        <img className="SLsearch" src={searchplus} alt="Img" />
                                    </div>
                                </div>
                                <div className="SLeft_gridItems">
                                    <div className="SLimggrid">
                                        <img src={Pic12} alt="Img" />
                                    </div>
                                    <div className="SLeft_descgrid">
                                        <text className="SLtxt1">Morbi sagittis</text>
                                        <img className="SLdot1" src={Ellipse_24} alt="Img" />
                                        <img className="SLdot2" src={Ellipse_65} alt="Img" />
                                        <img className="SLdot3" src={Ellipse_66} alt="Img" />
                                        <p className="SLtxt2">$26.00  &nbsp;&nbsp;&nbsp;<span>$52.00</span></p>
                                        <img className="SLstar1" src={filledstar} alt="Img" />
                                        <img className="SLstar2" src={filledstar} alt="Img" />
                                        <img className="SLstar3" src={filledstar} alt="Img" />
                                        <img className="SLstar4" src={filledstar} alt="Img" />
                                        <img className="SLnfstar" src={notfilledstar} alt="Img" />
                                        <p className="SLtxt3">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Magna in est adipiscing in phasellus non in justo.</p>
                                        <img className="SLcart" src={cart} alt="Img" />
                                        <img className="SLheart" src={heart} alt="Img" />
                                        <img className="SLsearch" src={searchplus} alt="Img" />
                                    </div>
                                </div>
                                <div className="SLeft_gridItems">
                                    <div className="SLimggrid">
                                        <img src={Pic13} alt="Img" />
                                    </div>
                                    <div className="SLeft_descgrid">
                                        <text className="SLtxt1">Ultricies venenatis</text>
                                        <img className="SLdot1" src={Ellipse_24} alt="Img" />
                                        <img className="SLdot2" src={Ellipse_65} alt="Img" />
                                        <img className="SLdot3" src={Ellipse_66} alt="Img" />
                                        <p className="SLtxt2">$26.00  &nbsp;&nbsp;&nbsp;<span>$52.00</span></p>
                                        <img className="SLstar1" src={filledstar} alt="Img" />
                                        <img className="SLstar2" src={filledstar} alt="Img" />
                                        <img className="SLstar3" src={filledstar} alt="Img" />
                                        <img className="SLstar4" src={filledstar} alt="Img" />
                                        <img className="SLnfstar" src={notfilledstar} alt="Img" />
                                        <p className="SLtxt3">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Magna in est adipiscing in phasellus non in justo.</p>
                                        <img className="SLcart" src={cart} alt="Img" />
                                        <img className="SLheart" src={heart} alt="Img" />
                                        <img className="SLsearch" src={searchplus} alt="Img" />
                                    </div>
                                </div>
                                <div className="SLeft_gridItems">
                                    <div className="SLimggrid">
                                        <img src={Pic14} alt="Img" />
                                    </div>
                                    <div className="SLeft_descgrid">
                                        <text className="SLtxt1">Scelerisque dignissim</text>
                                        <img className="SLdot1" src={Ellipse_24} alt="Img" />
                                        <img className="SLdot2" src={Ellipse_65} alt="Img" />
                                        <img className="SLdot3" src={Ellipse_66} alt="Img" />
                                        <p className="SLtxt2">$26.00  &nbsp;&nbsp;&nbsp;<span>$52.00</span></p>
                                        <img className="SLstar1" src={filledstar} alt="Img" />
                                        <img className="SLstar2" src={filledstar} alt="Img" />
                                        <img className="SLstar3" src={filledstar} alt="Img" />
                                        <img className="SLstar4" src={filledstar} alt="Img" />
                                        <img className="SLnfstar" src={notfilledstar} alt="Img" />
                                        <p className="SLtxt3">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Magna in est adipiscing in phasellus non in justo.</p>
                                        <img className="SLcart" src={cart} alt="Img" />
                                        <img className="SLheart" src={heart} alt="Img" />
                                        <img className="SLsearch" src={searchplus} alt="Img" />
                                    </div>
                            </div>
                        </div>
                        </div>
            </div>
            <br/><br/><br/><br/>
            <Banner/>
            <Footer/>
        </div>
    );
}

export default ShopLeft;