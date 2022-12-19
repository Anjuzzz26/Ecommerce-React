import React from "react";
import './Section2.css';
import image_1168 from '../Images/image 1168.png';
import image_23 from '../Images/image 23.png';
import image_1166 from '../Images/image 1166.png';
import image32 from '../Images/image32.png';
import image3 from '../Images/image 3.png';
import image15 from '../Images/image 15.jpg';
import group27 from '../Images/Group 27.png';
import group28 from '../Images/Group 28.png';
import heart from '../Images/uil_heart-alt.png';
import searchplus from '../Images/uil_search-plus.png';
import 'react-awesome-slider/dist/styles.css';

const Section2 = () => {
    return(
        <div className="section2main">
            <h1 className="lpheading">Leatest Products</h1><br/>
            <header className="leatest_nav">
                <nav>
                    <ul>
                        <li><a href="/#">New Arrival</a></li>
                        <li><a href="/#">Best Seller</a></li>
                        <li><a href="/#">Featured</a></li>
                        <li><a href="/#">Special Offer</a></li>
                    </ul>
                </nav>
            </header>
            <div className="leatest">
                <div>
                    <div className="lproducts1">
                        <img className="leatestimg1" src={image_1166} alt="Sofa" />
                        <div className="lhover">
                            <img className="sale" src={group27} alt="Sale" />
                            <img className="lcart" src={group28} alt="Cart" />
                            <img className="lheart" src={heart} alt="Wishlist" />
                            <img className="lsearch" src={searchplus} alt="Search" />
                        </div>
                        <div className="lprodesc">
                        <div className="lproname"><text className="lpro_name">Comfort Handy Craft</text></div>
                        <div className="lpro_offr">
                        <text className="lpro_offprice">$42.00</text></div>
                        <div className="lpro_orgprice">
                        <text className="lpro_price">$65.00</text></div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="lproducts1">
                        <img className="leatestimg2" src={image15} alt="Sofa" />
                        <div className="lhover">
                            <img className="sale" src={group27} alt="Sale" />
                            <img className="lcart" src={group28} alt="Cart" />
                            <img className="lheart" src={heart} alt="Wishlist" />
                            <img className="lsearch" src={searchplus} alt="Search" />
                        </div>
                        <div className="lprodesc">
                       <div className="lproname"><text className="lpro_name">Comfort Handy Craft</text></div>
                       <div className="lpro_offr">
                        <text className="lpro_offprice">$42.00</text></div>
                        <div className="lpro_orgprice">
                        <text className="lpro_price">$65.00</text></div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="lproducts1">
                        <img className="leatestimg3" src={image_1168} alt="Sofa" />
                        <div className="lhover">
                            <img className="sale" src={group27} alt="Sale" />
                            <img className="lcart" src={group28} alt="Cart" />
                            <img className="lheart" src={heart} alt="Wishlist" />
                            <img className="lsearch" src={searchplus} alt="Search" />
                        </div>
                        <div className="lprodesc">
                       <div className="lproname"><text className="lpro_name">Comfort Handy Craft</text></div>
                       <div className="lpro_offr">
                        <text className="lpro_offprice">$42.00</text></div>
                        <div className="lpro_orgprice">
                        <text className="lpro_price">$65.00</text></div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="lproducts2">
                        <img className="leatestimg4" src={image_23} alt="Sofa" />
                        <div className="lhover">
                            <img className="sale" src={group27} alt="Sale" />
                            <img className="lcart" src={group28} alt="Cart" />
                            <img className="lheart" src={heart} alt="Wishlist" />
                            <img className="lsearch" src={searchplus} alt="Search" />
                        </div>
                        <div className="lprodesc">
                        <div className="lproname"><text className="lpro_name">Comfort Handy Craft</text></div>
                        <div className="lpro_offr">
                        <text className="lpro_offprice">$42.00</text></div>
                        <div className="lpro_orgprice">
                        <text className="lpro_price">$65.00</text></div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="lproducts2">
                        <img className="leatestimg5" src={image32} alt="Sofa" />
                        <div className="lhover">
                            <img className="sale" src={group27} alt="Sale" />
                            <img className="lcart" src={group28} alt="Cart" />
                            <img className="lheart" src={heart} alt="Wishlist" />
                            <img className="lsearch" src={searchplus} alt="Search" />
                        </div>
                        <div className="lprodesc">
                        <div className="lproname"><text className="lpro_name">Comfort Handy Craft</text></div>
                        <div className="lpro_offr">
                        <text className="lpro_offprice">$42.00</text></div>
                        <div className="lpro_orgprice">
                        <text className="lpro_price">$65.00</text></div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="lproducts2">
                        <img className="leatestimg6" src={image3} alt="Sofa" />
                        <div className="lhover">
                            <img className="sale" src={group27} alt="Sale" />
                            <img className="lcart" src={group28} alt="Cart" />
                            <img className="lheart" src={heart} alt="Wishlist" />
                            <img className="lsearch" src={searchplus} alt="Search" />
                        </div>
                        <div className="lprodesc">
                        <div className="lproname"><text className="lpro_name">Comfort Handy Craft</text></div>
                        <div className="lpro_offr">
                        <text className="lpro_offprice">$42.00</text></div>
                        <div className="lpro_orgprice">
                        <text className="lpro_price">$65.00</text></div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Section2;