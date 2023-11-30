import React from 'react'
import './index.scss'

function Footer() {
  return (
    <>
    <footer id='footer'>
      <div className="footer">
      <div className="footer_top">
      <a href="#">
      <i className="fa-solid fa-arrow-up"></i>
      </a>
      </div>
      <div className="container_footer">
        <div className="content_center_footer">
          <div className="phone">
            <div className="phone_item">
              <img src="https://xpressrow.com/html/cafena/cafena/assets/images/icons/ft-phone.png" alt="" />
              <p>PHONE :</p>
              <a href="tel:123 456 77 89">+123 456 77 89</a>
            </div>
            <div className="address">
              <div className="address_item">
                <img src="https://xpressrow.com/html/cafena/cafena/assets/images/icons/ft-map-marker.png" alt="" />
                <p>ADDRESS :</p>
                <p>30 North West New</p>
              </div>
            </div>
            <div className="subscribe">
              <form action="index.html">
                <input type="email" name='email' id='email' placeholder='Enter your email' />
                <button className='subscribe_button'>
                  Subscribe
                  <i className="fa-solid fa-paper-plane"></i>
                </button>
              </form>
            </div>

          </div>
        </div>
      </div>

      <div className="container_cafena">
          <div className="cafena_item">
            <div className="footer_logo_content">
              <img src="https://xpressrow.com/html/cafena/cafena/assets/images/logo/logo.png" alt="" />
              <p>Donec et nibh maximus, congue est eu, mattis nunc. Praesent ut quam quis quam <br />
               venenatis fringilla. Morbi vestibulum</p>
            </div>
          </div>

          <div className="social_part">
            <a href="#0"><i className="fa-brands fa-twitter"></i></a>
            <a href="#0"><i className="fa-brands fa-facebook-f"></i></a>
            <a href="#0"><i className="fa-brands fa-youtube"></i></a>
            <a href="#0"><i className="fa-brands fa-google-plus-g"></i></a>
            <a href="#0"><i className="fa-brands fa-instagram"></i></a>
          </div>
        </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
