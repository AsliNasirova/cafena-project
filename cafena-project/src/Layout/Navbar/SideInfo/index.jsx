import React from 'react'
import './index.scss'

function SideInfo() {
    return (
        <div>
            <div className="AboutUsPart">

                <h3 className='aboutusTitle'>ABOUT US</h3>

                <p className='aboutusText'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid molestiae maiores, et tenetur debitis voluptatum id rerum magnam consectetur atque dolore illum, fugit earum reiciendis illo saepe asperiores, facere cumque.</p>

                <button className='contactusBtn'>CONTACT US</button>

            </div>

            <div className="ContactUsPart">
                <h3>CONTACT US</h3>
                <div className="contactusIcons">
                    <i className="fa-solid contactusIcon fa-location-dot"><span className='contactusIconText'>Bowery St., New York, NY 10013, USA</span></i>
                    <i className="fa-solid contactusIcon fa-phone-flip"><span className='contactusIconText'>+1255-568-6523</span></i>
                    <i className="fa-solid contactusIcon fa-envelope-open-text"><span className='contactusIconText'>information@gmail.com</span></i>
                </div>
                <div className="socialLinks">
                    <div className="socialLinkIconBox"><i className="socialLinkIcon fa-brands fa-facebook-f"></i></div>
                    <div className="socialLinkIconBox"><i className="socialLinkIcon fa-brands fa-twitter"></i></div>
                    <div className="socialLinkIconBox"><i className="socialLinkIcon fa-brands fa-google-plus-g"></i></div>
                    <div className="socialLinkIconBox"><i className="socialLinkIcon fa-brands fa-instagram"></i></div>
                </div>
            </div>
        </div>
    )
}

export default SideInfo