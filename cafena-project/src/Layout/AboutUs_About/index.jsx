import React from "react";
import "./index.scss";

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
    </>
  );
}

export default AboutUs_About;
