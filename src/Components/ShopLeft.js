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
import check from './Images/uil_check.png';
import checkpink from './Images/uil_check_pink.png';
import checkyellow from './Images/uil_check_yellow.png';
import check_filled from './Images/uil_check_filled.png';
import check_pfill from './Images/uil_check_pinkfilled.png';
import check_yfill from './Images/uil_check_yellowfilled.png';

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
            <div className="Sleft_div">
                <div className="Sleft_filtergrid">
                    <div className="Sleft_brand">
                        <h3 className="filter_head">Product Brand</h3>
                        <input type="checkbox" className="checkbox" value="Coaster" name="PB1" />
                         <p className="filter_list">Coaster Furniture</p>
                        <input type="checkbox" className="checkbox" value="Fusion" name="PB2" />
                        <p className="filter_list">Fusion Dot High Fashion</p>
                        <input type="checkbox" className="checkbox" value="Unique" name="PB3" />
                        <p className="filter_list">Unique Furnitture Restor</p>
                        <input type="checkbox" className="checkbox" value="Dream" name="PB4" />
                        <p className="filter_list">Dream Furnitture Flipping</p>
                       <input type="checkbox" className="checkbox" value="Young" name="PB5" />
                        <p className="filter_list">Young Repurposed</p>
                        <input type="checkbox" className="checkbox" value="Green" name="PB6" />
                        <p className="filter_list">Green DIY furniture</p>
                    </div>

                    <div className="Sleft_discount">
                        <h3 className="filter_head">Discount Offer</h3>
                        <input type="checkbox" className="checkbox" value="CashBack_20" name="DO1" />
                        <p className="filter_list">20% Cashback</p>
                        <input type="checkbox" className="checkbox" value="CashBack_5" name="DO2" />
                        <p className="filter_list">5% Cashback Offer</p>
                        <input type="checkbox" className="checkbox" value="CashBack_25" name="DO3" />
                        <p className="filter_list">25% Cashback Offer</p>
                    </div>

                    <div className="Sleft_rating">
                        <h3 className="filter_head">Rating Item</h3>

                        <input type="checkbox" className="checkbox" value="star_4" name="Rating1" />
                        <img className="rating_star" src={filledstar} alt="Image" />
                        <img className="rating_star" src={filledstar} alt="Image" />
                        <img className="rating_star" src={filledstar} alt="Image" />
                        <img className="rating_star" src={filledstar} alt="Image" />
                        <img className="rating_star" src={notfilledstar} alt="Image" />
                        <p className="rating_list">(2341)</p>

                        <input type="checkbox" className="checkbox" value="star_3" name="Rating2" />
                        <img className="rating_star" src={filledstar} alt="Image" />
                        <img className="rating_star" src={filledstar} alt="Image" />
                        <img className="rating_star" src={filledstar} alt="Image" />
                        <img className="rating_star" src={notfilledstar} alt="Image" />
                        <img className="rating_star" src={notfilledstar} alt="Image" />
                        <p className="rating_list">(1726)</p>

                        <input type="checkbox" className="checkbox" value="star_2" name="Rating3" />
                        <img className="rating_star" src={filledstar} alt="Image" />
                        <img className="rating_star" src={filledstar} alt="Image" />
                        <img className="rating_star" src={notfilledstar} alt="Image" />
                        <img className="rating_star" src={notfilledstar} alt="Image" />
                        <img className="rating_star" src={notfilledstar} alt="Image" />
                        <p className="rating_list">(258)</p>

                        <input type="checkbox" className="checkbox" value="star_2" name="Rating4" />
                        <img className="rating_star" src={filledstar} alt="Image" />
                        <img className="rating_star" src={filledstar} alt="Image" />
                        <img className="rating_star" src={notfilledstar} alt="Image" />
                        <img className="rating_star" src={notfilledstar} alt="Image" />
                        <img className="rating_star" src={notfilledstar} alt="Image" />
                        <p className="rating_list">(25)</p>

                    </div>

                    <div className="Sleft_categories">

                        <h3 className="filter_head">Categories</h3>

                        <input type="checkbox" className="checkbox" value="Prestashop" name="Categories1" />
                        <p className="filter_list">Prestashop</p>
                        <input type="checkbox" className="checkbox" value="Magneto" name="Categories1" />
                        <p className="filter_list">Magento</p>
                        <input type="checkbox" className="checkbox" value="Bigcommerce" name="Categories1" />
                        <p className="filter_list">Bigcommerce</p>
                        <input type="checkbox" className="checkbox" value="osCommerce" name="Categories1" />
                        <p className="filter_list">osCommerce</p>
                        <input type="checkbox" className="checkbox" value="3dcart" name="Categories1" />
                        <p className="filter_list">3dcart</p>
                        <input type="checkbox" className="checkbox" value="Bags" name="Categories1" />
                        <p className="filter_list">Bags</p>
                        <input type="checkbox" className="checkbox" value="Accessories" name="Categories1" />
                        <p className="filter_list independent">Accessories</p>
                        <input type="checkbox" className="checkbox" value="Jewellery" name="Categories1" />
                        <p className="filter_list independent">Jewellery</p>
                        <input type="checkbox" className="checkbox" value="Watches" name="Categories1" />
                        <p className="filter_list">Watches</p>

                    </div>

                    <div className="Sleft_price">

                        <h3 className="filter_head">Price Filter</h3>
                        
                        <input type="checkbox" className="checkbox" name="Price1" />
                        <p className="filter_list">$0.00 - $150.00</p>
                       <input type="checkbox" className="checkbox" name="Price2" />
                        <p className="filter_list">$150.00 - $350.00</p>
                        <input type="checkbox" className="checkbox" name="Price3" />
                        <p className="filter_list">$150.00 - $504.00</p>
                        <input type="checkbox" className="checkbox" name="Price4" />
                        <p className="filter_list">$450.00 +</p>
                        <form className="filter_price_search">
                            <input type="text" name="pricefilter" />
                        </form>

                    </div>

                    <div className="Sleft_color">

                        <h3 className="filter_head">Filter By Color</h3>

                        <img className="colordot1" src={blue} alt="Image" />
                        <p className="color_list1">Blue</p>
                        <img className="colordot2" src={orange} alt="Image" />
                        <p className="color_list2">Orange</p>
                        <img className="colordot3" src={brown} alt="Image" />
                        <p className="color_list3">Brown</p>
                        <img className="colordot4" src={green} alt="Image" />
                        <p className="color_list4">Green</p>
                        <img className="colordot5" src={purple} alt="Image" />
                        <p className="color_list5">Purple</p>
                        <img className="colordot6" src={sky} alt="Image" />
                        <p className="color_list6">Sky</p>

                    </div>
                </div>


                <div className="Sleft_Itemgrid">
                    <div className="SLeft_gridItems">
                        <div className="SLimggrid">
                            <img src={Pic8} alt="Image" />
                        </div>
                        <div className="SLeft_descgrid">
                            <text className="SLtxt1">Dictum morbi</text>
                            <img className="SLdot1" src={Ellipse_24} alt="Image" />
                            <img className="SLdot2" src={Ellipse_65} alt="Image" />
                            <img className="SLdot3" src={Ellipse_66} alt="Image" />
                            <p className="SLtxt2">$26.00 &nbsp;&nbsp;&nbsp;<span>$52.00</span></p>
                            <img className="SLstar1" src={filledstar} alt="Image" />
                            <img className="SLstar2" src={filledstar} alt="Image" />
                            <img className="SLstar3" src={filledstar} alt="Image" />
                            <img className="SLstar4" src={filledstar} alt="Image" />
                            <img className="SLnfstar" src={notfilledstar} alt="Image" />
                            <p className="SLtxt3">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Magna in est adipiscing in phasellus non in justo.</p>
                            <img className="SLcart" src={cart} alt="Image" />
                            <img className="SLheart" src={heart} alt="Image" />
                            <img className="SLsearch" src={searchplus} alt="Image" />
                        </div>
                    </div>
                    <div className="SLeft_gridItems">
                        <div className="SLimggrid">
                            <img src={Pic9} alt="Image" />
                        </div>
                        <div className="SLeft_descgrid">
                            <text className="SLtxt1">Sodales sit</text>
                            <img className="SLdot1" src={Ellipse_24} alt="Image" />
                            <img className="SLdot2" src={Ellipse_65} alt="Image" />
                            <img className="SLdot3" src={Ellipse_66} alt="Image" />
                            <p className="SLtxt2">$26.00  &nbsp;&nbsp;&nbsp;<span>$52.00</span></p>
                            <img className="SLstar1" src={filledstar} alt="Image" />
                            <img className="SLstar2" src={filledstar} alt="Image" />
                            <img className="SLstar3" src={filledstar} alt="Image" />
                            <img className="SLstar4" src={filledstar} alt="Image" />
                            <img className="SLnfstar" src={notfilledstar} alt="Image" />
                            <p className="SLtxt3">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Magna in est adipiscing in phasellus non in justo.</p>
                            <img className="SLcart" src={cart} alt="Image" />
                            <img className="SLheart" src={heart} alt="Image" />
                            <img className="SLsearch" src={searchplus} alt="Image" />
                        </div>
                    </div>
                    <div className="SLeft_gridItems">
                        <div className="SLimggrid">
                            <img src={Pic10} alt="Image" />
                        </div>
                        <div className="SLeft_descgrid">
                            <text className="SLtxt1">Nibh varius</text>
                            <img className="SLdot1" src={Ellipse_24} alt="Image" />
                            <img className="SLdot2" src={Ellipse_65} alt="Image" />
                            <img className="SLdot3" src={Ellipse_66} alt="Image" />
                            <p className="SLtxt2">$26.00  &nbsp;&nbsp;&nbsp;<span>$52.00</span></p>
                            <img className="SLstar1" src={filledstar} alt="Image" />
                            <img className="SLstar2" src={filledstar} alt="Image" />
                            <img className="SLstar3" src={filledstar} alt="Image" />
                            <img className="SLstar4" src={filledstar} alt="Image" />
                            <img className="SLnfstar" src={notfilledstar} alt="Image" />
                            <p className="SLtxt3">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Magna in est adipiscing in phasellus non in justo.</p>
                            <img className="SLcart" src={cart} alt="Image" />
                            <img className="SLheart" src={heart} alt="Image" />
                            <img className="SLsearch" src={searchplus} alt="Image" />
                        </div>
                    </div>
                    <div className="SLeft_gridItems">
                        <div className="SLimggrid">
                            <img src={Pic11} alt="Image" />
                        </div>
                        <div className="SLeft_descgrid">
                            <text className="SLtxt1">Mauris quis</text>
                            <img className="SLdot1" src={Ellipse_24} alt="Image" />
                            <img className="SLdot2" src={Ellipse_65} alt="Image" />
                            <img className="SLdot3" src={Ellipse_66} alt="Image" />
                            <p className="SLtxt2">$26.00  &nbsp;&nbsp;&nbsp;<span>$52.00</span></p>
                            <img className="SLstar1" src={filledstar} alt="Image" />
                            <img className="SLstar2" src={filledstar} alt="Image" />
                            <img className="SLstar3" src={filledstar} alt="Image" />
                            <img className="SLstar4" src={filledstar} alt="Image" />
                            <img className="SLnfstar" src={notfilledstar} alt="Image" />
                            <p className="SLtxt3">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Magna in est adipiscing in phasellus non in justo.</p>
                            <img className="SLcart" src={cart} alt="Image" />
                            <img className="SLheart" src={heart} alt="Image" />
                            <img className="SLsearch" src={searchplus} alt="Image" />
                        </div>
                    </div>
                    <div className="SLeft_gridItems">
                        <div className="SLimggrid">
                            <img src={Pic12} alt="Image" />
                        </div>
                        <div className="SLeft_descgrid">
                            <text className="SLtxt1">Morbi sagittis</text>
                            <img className="SLdot1" src={Ellipse_24} alt="Image" />
                            <img className="SLdot2" src={Ellipse_65} alt="Image" />
                            <img className="SLdot3" src={Ellipse_66} alt="Image" />
                            <p className="SLtxt2">$26.00  &nbsp;&nbsp;&nbsp;<span>$52.00</span></p>
                            <img className="SLstar1" src={filledstar} alt="Image" />
                            <img className="SLstar2" src={filledstar} alt="Image" />
                            <img className="SLstar3" src={filledstar} alt="Image" />
                            <img className="SLstar4" src={filledstar} alt="Image" />
                            <img className="SLnfstar" src={notfilledstar} alt="Image" />
                            <p className="SLtxt3">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Magna in est adipiscing in phasellus non in justo.</p>
                            <img className="SLcart" src={cart} alt="Image" />
                            <img className="SLheart" src={heart} alt="Image" />
                            <img className="SLsearch" src={searchplus} alt="Image" />
                        </div>
                    </div>
                    <div className="SLeft_gridItems">
                        <div className="SLimggrid">
                            <img src={Pic13} alt="Image" />
                        </div>
                        <div className="SLeft_descgrid">
                            <text className="SLtxt1">Ultricies venenatis</text>
                            <img className="SLdot1" src={Ellipse_24} alt="Image" />
                            <img className="SLdot2" src={Ellipse_65} alt="Image" />
                            <img className="SLdot3" src={Ellipse_66} alt="Image" />
                            <p className="SLtxt2">$26.00  &nbsp;&nbsp;&nbsp;<span>$52.00</span></p>
                            <img className="SLstar1" src={filledstar} alt="Image" />
                            <img className="SLstar2" src={filledstar} alt="Image" />
                            <img className="SLstar3" src={filledstar} alt="Image" />
                            <img className="SLstar4" src={filledstar} alt="Image" />
                            <img className="SLnfstar" src={notfilledstar} alt="Image" />
                            <p className="SLtxt3">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Magna in est adipiscing in phasellus non in justo.</p>
                            <img className="SLcart" src={cart} alt="Image" />
                            <img className="SLheart" src={heart} alt="Image" />
                            <img className="SLsearch" src={searchplus} alt="Image" />
                        </div>
                    </div>
                    <div className="SLeft_gridItems">
                        <div className="SLimggrid">
                            <img src={Pic14} alt="Image" />
                        </div>
                        <div className="SLeft_descgrid">
                            <text className="SLtxt1">Scelerisque dignissim</text>
                            <img className="SLdot1" src={Ellipse_24} alt="Image" />
                            <img className="SLdot2" src={Ellipse_65} alt="Image" />
                            <img className="SLdot3" src={Ellipse_66} alt="Image" />
                            <p className="SLtxt2">$26.00  &nbsp;&nbsp;&nbsp;<span>$52.00</span></p>
                            <img className="SLstar1" src={filledstar} alt="Image" />
                            <img className="SLstar2" src={filledstar} alt="Image" />
                            <img className="SLstar3" src={filledstar} alt="Image" />
                            <img className="SLstar4" src={filledstar} alt="Image" />
                            <img className="SLnfstar" src={notfilledstar} alt="Image" />
                            <p className="SLtxt3">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Magna in est adipiscing in phasellus non in justo.</p>
                            <img className="SLcart" src={cart} alt="Image" />
                            <img className="SLheart" src={heart} alt="Image" />
                            <img className="SLsearch" src={searchplus} alt="Image" />
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