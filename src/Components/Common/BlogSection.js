import React from "react";
import './BlogSection.css';

import RecentPost1 from '../Images/RecentPost1.png';
import RecentPost2 from '../Images/RecentPost2.png';
import RecentPost3 from '../Images/RecentPost3.png';
import RecentPost4 from '../Images/RecentPost4.png';
import Sale1 from '../Images/Sale1.png';
import Sale2 from '../Images/Sale2.png';
import Sale3 from '../Images/Sale3.png';
import OfferProduct1 from '../Images/OfferProduct1.png';
import OfferProduct2 from '../Images/OfferProduct2.png';
import OfferProduct3 from '../Images/OfferProduct3.png';
import OfferProduct4 from '../Images/OfferProduct4.png';
import Group224 from '../Images/Group 224.png';

const BlogSection = () =>{
    return(
        <div className="blogmaingrid2">
                <div className="Bgrid2item1">
                        <text className="Blog_head">Search</text>
                        <form>
                            <div className="Bloginput_container">
                                <input className="Binput_field" type="text" placeholder="  Search For Posts" />
                                <i class="fa fa-search Bsearchicon" aria-hidden="true" />
                            </div>
                        </form>
                        <text className="Blog_head">Categories</text><br/><br/>
                        <text  className="Bcat1">Hobbies (14)</text>
                        <text className="Bcat2">Women (21)</text><br/><br/>
                        <text className="Bcat3">Women (21)</text>
                        <text className="Bcat4">Women (21)</text><br/><br/>
                        <text className="Bcat5">Women (21)</text>
                        <text className="Bcat6">Women (21)</text>
                    </div>

                    <div className="Bgrid2item2">
                        
                        <h3 className="Blog_head">Recent Post</h3>
                        <div className="Bgrid2_subgrid">
                            <div className="Bsubgrid_items">
                                <div className="Bsubgrid_itemimg">
                                    <img src={RecentPost1} alt="Img" />
                                </div>
                                <div className="Bsubgrid_itemdesc">
                                    <text className="Bsubgrid_txt1">It is a long established fact</text>
                                    <p className="Bsubgrid_txt2">Aug 09 2020</p>
                                </div>
                            </div>

                            <div className="Bsubgrid_items">
                                <div className="Bsubgrid_itemimg">
                                    <img src={RecentPost2} alt="Img" />
                                </div>
                                <div className="Bsubgrid_itemdesc">
                                    <text className="Bsubgrid_txt1">It is a long established fact</text>
                                    <p className="Bsubgrid_txt2">Aug 09 2020</p>
                                </div>
                            </div>

                            <div className="Bsubgrid_items">
                                <div className="Bsubgrid_itemimg">
                                    <img src={RecentPost3} alt="Img" />
                                </div>
                                <div className="Bsubgrid_itemdesc">
                                    <text className="Bsubgrid_txt1">It is a long established fact</text>
                                    <p className="Bsubgrid_txt2">Aug 09 2020</p>
                                </div>
                            </div>

                            <div className="Bsubgrid_items">
                                <div className="Bsubgrid_itemimg">
                                    <img src={RecentPost4} alt="Img" />
                                </div>
                                <div className="Bsubgrid_itemdesc">
                                    <text className="Bsubgrid_txt1">It is a long established fact</text>
                                    <p className="Bsubgrid_txt2">Aug 09 2020</p>
                                </div>
                            </div>
                            
                        </div>
                    </div>

                    <div className="Bgrid2item3">
                    <h3 className="Blog_head">Sale Product</h3>
                        <div className="Bgrid2_subgrid">
                            <div className="Bsubgrid_items">
                                <div className="Bsubgrid_itemimg">
                                    <img src={Sale1} alt="Img" />
                                </div>
                                <div className="Bsubgrid_itemdesc">
                                    <text className="Bsubgrid_txt1">Sale Product</text>
                                    <p className="Bsubgrid_txt2">Aug 09 2020</p>
                                </div>
                            </div>

                            <div className="Bsubgrid_items">
                                <div className="Bsubgrid_itemimg">
                                    <img src={Sale2} alt="Img" />
                                </div>
                                <div className="Bsubgrid_itemdesc">
                                    <text className="Bsubgrid_txt1">Viverra pulvinar et enim.</text>
                                    <p className="Bsubgrid_txt2">Aug 09 2020</p>
                                </div>
                            </div>

                            <div className="Bsubgrid_items">
                                <div className="Bsubgrid_itemimg">
                                    <img src={Sale3} alt="Img" />
                                </div>
                                <div className="Bsubgrid_itemdesc">
                                    <text className="Bsubgrid_txt1">Mattis varius donec fdsfd</text>
                                    <p className="Bsubgrid_txt2">Aug 09 2020</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="Bgrid2item4">
                        
                        <h3 className="Blog_head">Offer Product</h3>
                        <div className="Boffproductgrid">
                            <div className="BOffgriditem">
                                
                                <div className="BOfferproducts">
                                    <img src={OfferProduct1} alt="Img" className="Boffimg"/>
                                    <h4 className="Offitemname">Duis lectus est.</h4>
                                    <p className="Offitemprice">$12.00 - $15.00</p>
                                </div>
                                <div className="BOfferproducts">
                                    <img src={OfferProduct2} alt="Img" className="Boffimg" />
                                    <h4 className="Offitemname">Sed placerat.</h4>
                                    <p className="Offitemprice">$12.00 - $15.00</p>
                                </div>

                            </div>

                            <div className="BOffgriditem">
                                
                                <div className="BOfferproducts">
                                    <img src={OfferProduct3} alt="Img" className="Boffimg"/>
                                    <h4 className="Offitemname">Netus proin.</h4>
                                    <p className="Offitemprice">$12.00 - $15.00</p>
                                </div>
                                <div className="BOfferproducts">
                                    <img src={OfferProduct4} alt="Img" className="Boffimg" />
                                    <h4 className="Offitemname">Platea in.</h4>
                                    <p className="Offitemprice">$12.00 - $15.00</p>
                                </div>

                            </div>

                        </div>

                    </div>

                    <div className="Bgrid2item5">
                        <h3 className="Blog_head">Follow</h3> 
                        <img src={Group224} alt="Img" className="Bfollowimg" />
                        <h3 className="Blog_head">Tags</h3>
                        <a href="/#" className="Btag1">General</a>
                        <a href="/#" className="Btag2">Atsanil</a>
                        <a href="/#" className="Btag3">Insas.</a><br/><br/>
                        <a href="/#" className="Btag4">Bibsaas</a>
                        <a href="/#" className="Btag5">Nulla.</a>
                    </div>
            
        </div>
    );
}

export default BlogSection;