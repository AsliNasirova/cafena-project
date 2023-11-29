import React from 'react'
import './index.scss'

function AboutUs() {
  return (
    <>
      <section className='aboutUs'>
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
                   <h2>ONE OF THE BEST COFFEE HOUSE <br />
                    IN YOUR HOME TOWN</h2> <br />
                    <p>Mauris rhoncus orci in imperdiet placerat. Vestibulum euismod nisl <br /> suscipit ligula volutpat, a feugiat urna maximus. Cras massa <br /> nibhtincidunt.</p> <br /> 
                    <p>Donec et nibh maximus, congue est eu, mattis nunc. Praesent ut <br /> quam quis quam venenatis fringilla. Morbi vestibulum id tellus <br /> mmodo mattis. Aliquam erat volutpat. Aenean accumsan id mi nec <br /> semper. Lorem ipsum.</p>

                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default AboutUs

