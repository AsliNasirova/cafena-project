import React from "react";
import "./index.scss";

import { LuPlus } from "react-icons/lu";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";


import { IoIosPhonePortrait } from "react-icons/io";
import { IoIosSend } from "react-icons/io";
import { IoIosArrowRoundUp } from "react-icons/io";

import { FaYoutube } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


function AboutUs_About() {
  return (
    <>
      <section id="breadcrump_area">
        <div className="common">
          <div className="container_breadcrump">
            <div className="shape shape_1">
              <img
                src="https://xpressrow.com/html/cafena/cafena/assets/images/shape/breadcrumb-shape-1.png"
                alt=""
              />
            </div>
            <div className="shape shape_2">
              <img
                src="https://xpressrow.com/html/cafena/cafena/assets/images/shape/breadcrumb-shape-2.png"
                alt=""
              />
            </div>

            <div className="text_center_breadcrump">
              <div className="center_text_about_cafena">
                <h2>ABOUT CAFENA</h2>
              </div>
              <div className="breadcrump_text_down">
                <h6>HOME /</h6>
                <h6 className="aboutus_breadcrump"> ABOUT US</h6>
              </div>
            </div>
          </div>
        </div>
      </section >

      <section id="about_cafena_area">
        <div className="container_aboutUs">
          <div className="left_image_part">
            <div className="image_aboutUs">
              <img className='bigImage' src="https://xpressrow.com/html/cafena/cafena/assets/images/about/about-img-2-1.png" alt="" />
              <img className='smallImage' src="https://xpressrow.com/html/cafena/cafena/assets/images/about/about-img-2-2.png" alt="" />
            </div>
          </div>


          <div className="right_text_part">
            <div className="text_aboutUs">
              <div className="aboutus"> <h6>ABOUT US</h6></div>
              <h2>ONE OF THE BEST COFFEE HOUSE
                IN YOUR HOME TOWN</h2>
              <p>Mauris rhoncus orci in imperdiet placerat. Vestibulum euismod nisl  suscipit ligula volutpat, a feugiat urna maximus. Cras massa  nibhtincidunt.</p>
            </div>
            <ul className="about_list">
              <li>
                <span className="icon">
                  <i className="fa-solid fa-check"></i>
                  <h4>What is Lorem Ipsum Lorem Ipsum is simply.</h4>
                </span>
              </li>
              <li>
                <span className="icon">
                  <i className="fa-solid fa-check"></i>
                  <h4>Dummy text of the printing text.</h4>
                </span>
              </li>
              <li>
                <span className="icon">
                  <i className="fa-solid fa-check"></i>
                  <h4>Typesetting industry Lorem Ipsum has been the industry's</h4>
                </span>

              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id='WhyChoose'>
                <div className='ChooseAll'>
                    <div className='ChooseText'>
                        <h6 className='chooseUS'>WHY CHOOSE US</h6>
                        <h1>WE ARE PROVIDE BEST SERVICE <br />
                            IN YOUR CITY</h1>
                    </div>
                    <div className='chooseContainer'>
                        <div className='AccumsaBox'>
                            <div className='BestTesty'>
                                <div className='ImageWhy'>
                                    <img src="https://xpressrow.com/html/cafena/cafena/assets/images/icons/wcu-1.png" alt="" />

                                </div>
                                <div className='WhyText'>
                                    <h2>Testy Coffee Recipe</h2><br />
                                    <p>Accumsa nfringilla. Morbi vestibulum id tellus mmodo mattis. Aliquam erat volutpat. Aenean accumsany.</p>
                                </div>
                                <div className='icons'>
                                    <span className='iconFal'><i class="fa-solid fa-arrow-right"></i></span>
                                </div>
                            </div>
                        </div>
                        <div className='AccumsaBox'>
                            <div className='BestTesty'>
                                <div className='ImageWhy'>
                                    <img src="https://xpressrow.com/html/cafena/cafena/assets/images/icons/wcu-2.png" alt="" />

                                </div>
                                <div className='WhyText'>
                                    <h2>Great Location</h2><br />
                                    <p>Accumsa nfringilla. Morbi vestibulum id tellus mmodo mattis. Aliquam erat volutpat. Aenean accumsany.</p>
                                </div>
                                <div className='icons'>
                                    <span className='iconFal'><i class="fa-solid fa-arrow-right"></i></span>
                                </div>
                            </div>
                        </div>
                        <div className='AccumsaBox'>
                            <div className='BestTesty'>
                                <div className='ImageWhy'>
                                    <img src="https://xpressrow.com/html/cafena/cafena/assets/images/icons/wcu-1.png" alt="" />

                                </div>
                                <div className='WhyText'>
                                    <h2>Professional Chef</h2><br />
                                    <p>Accumsa nfringilla. Morbi vestibulum id tellus mmodo mattis. Aliquam erat volutpat. Aenean accumsany.</p>
                                </div>
                                <div className='icons'>
                                    <span className='iconFal'><i class="fa-solid fa-arrow-right"></i></span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

      <section id="best_coffee">
        <div className="best_coffe_area">
          {/* <div className="best_coffe_bg">
            <img src="https://xpressrow.com/html/cafena/cafena/assets/images/bg/best-coffe-1.jpeg" alt="" />
          </div> */}

          <div className="text_best_coffe_area">
            <h2>TRY THE BEST COFFEE IN THE HOUSING CITY</h2>
            <p>Mauris rhoncus orci in imperdiet placerat. Vestibulum euismod nisl suscipit ligula volutpat, a feugiat urna maximus. Cras massa nibhtincidunt.</p>
            <p>Donec et nibh maximus, congue est eu, mattis nunc. Praesent ut quam quis quam venenatis fringilla. Morbi vestibulum id tellus mmodo mattis. Aliquam erat volutpat. Aenean</p>

          </div>

        </div>
      </section>

      <section id='Professional'>
                <div className='OurProfessional'>
                    <div className='ChooseText'>
                        <h6 className='chooseUS'>OUR CHEF</h6>
                        <h1>MEET OUR PROFESSIONAL</h1>
                    </div>

                    <div className='prof-card'>
                        <div className="team__box">
                            <div className="thumb">
                                <img src="https://xpressrow.com/html/cafena/cafena/assets/images/team/team-1.jpeg" alt="" />
                                <div className="social-links">
                                    <div className="social-links__trigger">
                                        <LuPlus />
                                        <ul className='list-unstyled'>
                                            <li className='face'><a href=""><FaFacebookF /></a></li>
                                            <li className='ywit'><a href=""><FaTwitter /></a></li>
                                            <li className='pint'><a href=""><FaPinterestP /></a></li>
                                            <li className='in'><a href=""><FaLinkedinIn /></a></li>
                                        </ul>
                                    </div>

                                </div>

                            </div>
                            <div className="content">
                                <h4>RASALINA DE WILLAMSON</h4><br />
                                <p> 12 year experience</p>
                            </div>
                        </div>
                        <div className="team__box">
                            <div className="thumb">
                                <img src="https://xpressrow.com/html/cafena/cafena/assets/images/team/team-2.jpeg" alt="" />
                                <div className="social-links">
                                    <div className="social-links__trigger">
                                        <LuPlus />
                                        <ul className='list-unstyled'>
                                            <li className='face'><a href=""><FaFacebookF /></a></li>
                                            <li className='ywit'><a href=""><FaTwitter /></a></li>
                                            <li className='pint'><a href=""><FaPinterestP /></a></li>
                                            <li className='in'><a href=""><FaLinkedinIn /></a></li>
                                        </ul>
                                    </div>

                                </div>

                            </div>
                            <div className="content">
                                <h4>ALEXTINA JIMIEY</h4><br />
                                <p>09 year experience</p>
                            </div>
                        </div>
                        <div className="team__box">
                            <div className="thumb">
                                <img src="https://xpressrow.com/html/cafena/cafena/assets/images/team/team-1.jpeg" alt="" />
                                <div className="social-links">
                                    <div className="social-links__trigger">
                                        <LuPlus />
                                        <ul className='list-unstyled'>
                                            <li className='face'><a href=""><FaFacebookF /></a></li>
                                            <li className='ywit'><a href=""><FaTwitter /></a></li>
                                            <li className='pint'><a href=""><FaPinterestP /></a></li>
                                            <li className='in'><a href=""><FaLinkedinIn /></a></li>
                                        </ul>
                                    </div>

                                </div>

                            </div>
                            <div className="content">
                                <h4>JIMMEY AENDERSON</h4><br />
                                <p>05 year experience</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <footer id='footer'>
            <div className="container">
                <div className='footerbox'>
                    <div className="footertop">
                        <div className="toparrow">
                            <a href="#header">
                                <IoIosArrowRoundUp />
                            </a>
                        </div>
                        <div className="topitems">
                            <div className="nums">
                                <div className="numbox">
                                    <i><IoIosPhonePortrait /></i>
                                    <p>Phone : <a href="">
                                        +88019 339 702 520</a></p>

                                </div>
                                <div className="numbox">
                                    <i><IoIosPhonePortrait /></i>
                                    <p>Phone : <a href="">
                                        +88019 339 702 520</a></p>

                                </div>
                            </div>
                            <div className="input">
                                <input type="text" />
                                <button>
                                    Subscribe
                                    <IoIosSend />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="footerbottom">
                        <div className="bottomleft">
                            <img src="https://xpressrow.com/html/cafena/cafena/assets/images/logo/logo.png" alt="" />
                            <p>Donec et nibh maximus, congue est eu, mattis nunc. Praesent ut quam quis quam venenatis fringilla. Morbi vestibulum</p>
                        </div>
                        <div className="bottomicons">
                            <div className="icondiv">
                                <i>
                                    <FaTwitter />
                                </i>
                            </div>
                            <div className="icondiv">
                                <i>
                                <FaFacebookF />
                                </i>
                            </div>
                            <div className="icondiv">
                                <i>
                                <FaYoutube />
                                </i>
                            </div>
                            <div className="icondiv">
                                <i>
                                <FaGooglePlusG />
                                </i>
                            </div>
                            <div className="icondiv">
                                <i>
                                <FaInstagram />
                                </i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer> */}



            
    </>
  );
}

export default AboutUs_About;
