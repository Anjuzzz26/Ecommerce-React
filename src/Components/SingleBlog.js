import React from "react";
import './SingleBlog.css';
import './BlogPage.css';

import Header from "./Common/Header";
import Footer from './Common/Footer';
import HeadDiv from './Common/HeadDiv';
import Banner from './Common/Banner';
import Button from './Common/Button';

import Blog1 from './Images/Blogimg1.png';
import calender from './Images/calender.png';
import pen from './Images/pen.png';
import Group92 from './Images/Group 92.png';
import Rectangle70 from './Images/Rectangle 70.png';

import filledstar from './Images/Star.png';
import notfilledstar from './Images/NFstar.png';
import SB1 from './Images/SB1.png';
import SB2 from './Images/SB2.png';
import SB3 from './Images/SB3.png';
import SB4 from './Images/SB4.png';
import Group224 from './Images/Group 224.png';
import prev_arrow from './Images/prev_arrow.png';
import next_arrow from './Images/next_arrow.png';
import SBCard1 from './Images/SBCard1.png';
import SBCard2 from './Images/SBCard2.png';

import RecentPost1 from './Images/RecentPost1.png';
import RecentPost2 from './Images/RecentPost2.png';
import RecentPost3 from './Images/RecentPost3.png';
import RecentPost4 from './Images/RecentPost4.png';
import Sale1 from './Images/Sale1.png';
import Sale2 from './Images/Sale2.png';
import Sale3 from './Images/Sale3.png';
import OfferProduct1 from './Images/OfferProduct1.png';
import OfferProduct2 from './Images/OfferProduct2.png';
import OfferProduct3 from './Images/OfferProduct3.png';
import OfferProduct4 from './Images/OfferProduct4.png';

const SingleBlog = () => {
    return(
        <div>
		<Header />
		<HeadDiv text={"Single Blog"} />
		
        <div className="SBmain">
            
            <div className="blogmaingrid1">

                    <div className="Bgrid1img">
                                <img src={Blog1} alt="Image" className="Blogimg" />
                    </div>

                    <div className="Bgrid1desc">
                                <img src={pen} alt="Image" className="Blogicon1" />
                                <div className="Blogitemtxt1"><text>Surf Auxion</text></div>
                                <img src={calender} alt="Image" className="Blogicon2" />
                                <div className="Blogitemtxt2"><text>Aug 09 2020</text></div>
                                <h3 className="Bloghead">Mauris at orci non vulputate diam tincidunt nec.</h3>
                                <p className="Blogpara">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                    Velit facilisis quis auctor pretium ipsum, eu rutrum. 
                                    Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. 
                                    Adipiscing purus, cursus vulputate id id dictum at.
                                </p>
                                <p className="Blogpara2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                    Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. 
                                    Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, 
                                    consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. 
                                    Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, 
                                </p>
                        
                    </div>

                    <div className="SBgrid1desc">
                        <div className="SBgrid1desc_item1">
                            <p>'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo dictum sapien, amet, consequat.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo dictum sapien, amet, consequat
                                toamk risusu'
                            </p>
                        </div>

                        <div className="SBgrid1desc_item2">
                            <div><img src={Group92} alt="Image" /></div>
                            <div><img src={Rectangle70} alt="Image" /></div>
                        </div>

                        <div className="SBgrid1desc_item3">
                            <p className="Blogpara2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, 
                                lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec 
                                vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit 
                                dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit 
                                in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur 
                                adipiscing elit. Velit dapibus est, nunc, 
                            </p>
                        </div>

                        <div className="SBgrid1desc_item4">
                            <div>
                                <img src={SB1} alt="Image" />
                                <h3 className="SBimgtitle">Quam sed</h3>
                                <p className="SBoffrprice">$32.00 <span>$56.00</span></p>
                                <img className="SBstar1" src={filledstar} alt="Image" />
                                <img className="SBstar2" src={filledstar} alt="Image" />
                                <img className="SBstar3" src={filledstar} alt="Image" />
                                <img className="SBstar4" src={filledstar} alt="Image" />
                                <img className="SBstar5" src={notfilledstar} alt="Image" />
                            </div>
                            <div>
                                <img src={SB2} alt="Image" />
                                <h3 className="SBimgtitle">Tristique sed</h3>
                                <p className="SBoffrprice">$32.00 <span>$56.00</span></p>
                                <img className="SBstar1" src={filledstar} alt="Image" />
                                <img className="SBstar2" src={filledstar} alt="Image" />
                                <img className="SBstar3" src={filledstar} alt="Image" />
                                <img className="SBstar4" src={filledstar} alt="Image" />
                                <img className="SBstar5" src={notfilledstar} alt="Image" />
                            </div>
                            <div>
                                <img src={SB3} alt="Image" />
                                <h3 className="SBimgtitle">A etiam</h3>
                                <p className="SBoffrprice">$32.00 <span>$56.00</span></p>
                                <img className="SBstar1" src={filledstar} alt="Image" />
                                <img className="SBstar2" src={filledstar} alt="Image" />
                                <img className="SBstar3" src={filledstar} alt="Image" />
                                <img className="SBstar4" src={filledstar} alt="Image" />
                                <img className="SBstar5" src={notfilledstar} alt="Image" />
                            </div>
                            <div>
                                <img src={SB4} alt="Image" />
                                <h3 className="SBimgtitle">Mi nisi</h3>
                                <p className="SBoffrprice">$32.00 <span>$56.00</span></p>
                                <img className="SBstar1" src={filledstar} alt="Image" />
                                <img className="SBstar2" src={filledstar} alt="Image" />
                                <img className="SBstar3" src={filledstar} alt="Image" />
                                <img className="SBstar4" src={filledstar} alt="Image" />
                                <img className="SBstar5" src={notfilledstar} alt="Image" />
                            </div>
                        </div>

                        <div className="SBgrid1desc_item5">
                            <p className="Blogpara2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, 
                                lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec 
                                vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit 
                                dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit 
                                in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur 
                                adipiscing elit. Velit dapibus est, nunc, 
                            </p>
                        </div>

                        <div className="SBgrid1desc_item6">
                            <p className="Blogpara2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, 
                                lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec 
                                vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit 
                                dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit 
                                in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur 
                                adipiscing elit. Velit dapibus est, nunc, 
                            </p>
                        </div>

                        <div className="SBgrid1desc_item7">
                             <hr className="SBhrline" />
                             <img src={Group224} alt="Image" className="SBfollowimg" />
                             <div className="SBnavigation">
                                <div><img src={prev_arrow} alt="Image" className="SBprev_arrow" />
                                <p className="SBnav_prev">Previous Post</p></div>
                                <div><p className="SBnav_next">Next Post</p>
                                <img src={next_arrow} alt="Image" className="SBnext_arrow" /></div>
                             </div>
                        </div>

                    </div>

                    <div className="SBgrid1desc_item8">
                        <div className="SBCard1">
                            <div><img src={SBCard1} alt="Image" className="SBCardimg" /></div>
                            <div>
                                <text className="SBCardtxt1">Sapien ac</text>
                                <p className="SBCardtxt2">Jan 09 2020</p>
                                <p className="SBCardtxt3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                    At in vitae rutrum vulputate consectetur.</p>
                            </div>
                        </div>
                        <div className="SBCard2">
                            <div><img src={SBCard2} alt="Image" className="SBCardimg" /></div>
                            <div>
                                <text className="SBCardtxt1">Augue conva</text>
                                <p className="SBCardtxt2">Aug 18 2020</p>
                                <p className="SBCardtxt3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                    At in vitae rutrum vulputate consectetur.</p>
                            </div>
                        </div>
                    </div>

                    <div className="SBgrid1desc_item9">
                            <form>
                                <div className="SBuser">
                                    <div className="SBinputcontainer">
                                        <i class="fa fa-user SBlogicon" />
                                        <input type="text" placeholder="Your Name*" className="Sbloginputfield" />
                                    </div>
                                    <div className="SBinputcontainer">
                                        <i class="fa fa-envelope SBlogicon" />
                                        <input type="text" placeholder="Write Your Email*" className="Sbloginputfield" />
                                    </div>
                                </div>
                                <div className="SBtextareacontainer">
                                    <i class="fa fa-comment SBlogicon" />
                                    <textarea placeholder="Write your comment*" className="Sblogtextarea" />
                                </div>
                                <input type="checkbox" className="SBcheckbox" />
                                <label className="SBcheckboxtxt">Save my name, email, and website in this browser for the next time I comment.</label>
                                <div className="SBbtn">
                                    <Button text={"Continue Shipping"} />
                                </div>

                            </form>
                        </div>

                    
            </div>


            <div className="Sblogmaingrid2">
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
                                    <img src={RecentPost1} alt="Image" />
                                </div>
                                <div className="Bsubgrid_itemdesc">
                                    <text className="Bsubgrid_txt1">It is a long established fact</text>
                                    <p className="Bsubgrid_txt2">Aug 09 2020</p>
                                </div>
                            </div>

                            <div className="Bsubgrid_items">
                                <div className="Bsubgrid_itemimg">
                                    <img src={RecentPost2} alt="Image" />
                                </div>
                                <div className="Bsubgrid_itemdesc">
                                    <text className="Bsubgrid_txt1">It is a long established fact</text>
                                    <p className="Bsubgrid_txt2">Aug 09 2020</p>
                                </div>
                            </div>

                            <div className="Bsubgrid_items">
                                <div className="Bsubgrid_itemimg">
                                    <img src={RecentPost3} alt="Image" />
                                </div>
                                <div className="Bsubgrid_itemdesc">
                                    <text className="Bsubgrid_txt1">It is a long established fact</text>
                                    <p className="Bsubgrid_txt2">Aug 09 2020</p>
                                </div>
                            </div>

                            <div className="Bsubgrid_items">
                                <div className="Bsubgrid_itemimg">
                                    <img src={RecentPost4} alt="Image" />
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
                                    <img src={Sale1} alt="Image" />
                                </div>
                                <div className="Bsubgrid_itemdesc">
                                    <text className="Bsubgrid_txt1">Sale Product</text>
                                    <p className="Bsubgrid_txt2">Aug 09 2020</p>
                                </div>
                            </div>

                            <div className="Bsubgrid_items">
                                <div className="Bsubgrid_itemimg">
                                    <img src={Sale2} alt="Image" />
                                </div>
                                <div className="Bsubgrid_itemdesc">
                                    <text className="Bsubgrid_txt1">Viverra pulvinar et enim.</text>
                                    <p className="Bsubgrid_txt2">Aug 09 2020</p>
                                </div>
                            </div>

                            <div className="Bsubgrid_items">
                                <div className="Bsubgrid_itemimg">
                                    <img src={Sale3} alt="Image" />
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
                                    <img src={OfferProduct1} alt="Image" className="Boffimg"/>
                                    <h4 className="Offitemname">Duis lectus est.</h4>
                                    <p className="Offitemprice">$12.00 - $15.00</p>
                                </div>
                                <div className="BOfferproducts">
                                    <img src={OfferProduct2} alt="Image" className="Boffimg" />
                                    <h4 className="Offitemname">Sed placerat.</h4>
                                    <p className="Offitemprice">$12.00 - $15.00</p>
                                </div>

                            </div>

                            <div className="BOffgriditem">
                                
                                <div className="BOfferproducts">
                                    <img src={OfferProduct3} alt="Image" className="Boffimg"/>
                                    <h4 className="Offitemname">Netus proin.</h4>
                                    <p className="Offitemprice">$12.00 - $15.00</p>
                                </div>
                                <div className="BOfferproducts">
                                    <img src={OfferProduct4} alt="Image" className="Boffimg" />
                                    <h4 className="Offitemname">Platea in.</h4>
                                    <p className="Offitemprice">$12.00 - $15.00</p>
                                </div>

                            </div>

                        </div>

                    </div>

                    <div className="Bgrid2item5">
                        <h3 className="Blog_head">Follow</h3> 
                        <img src={Group224} alt="Image" className="Bfollowimg" />
                        <h3 className="Blog_head">Tags</h3>
                        <a href="#" className="Btag1">General</a>
                        <a href="#" className="Btag2">Atsanil</a>
                        <a href="#" className="Btag3">Insas.</a><br/><br/>
                        <a href="#" className="Btag4">Bibsaas</a>
                        <a href="#" className="Btag5">Nulla.</a>
                    </div>
            
        </div>

            </div>

        </div>


		<br/><br/><br/>
		<Banner />
		<Footer />

        </div>
    );
}

export default SingleBlog;