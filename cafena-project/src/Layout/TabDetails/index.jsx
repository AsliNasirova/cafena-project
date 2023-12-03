import React, { useState } from 'react'
import "./index.scss"
import Button from '../../components/Button';

function TabDetails() {

  const [toggleBtn, setToggleBtn] = useState(1)

  function toggleButton(index) {
    setToggleBtn(index);
  }
  return (
    <section id='tabDetails'>

      <div className="buttonTabs">
        <button className={toggleBtn === 1 ? "buttonTab activeButton" : "buttonTab"} onClick={() => toggleButton(1)}>PRODUCT DETAILS</button>
        <button className={toggleBtn === 2 ? "buttonTab activeButton" : "buttonTab"} onClick={() => toggleButton(2)}>ADDITIONAL IMFORMATION</button>
        <button className={toggleBtn === 3 ? "buttonTab activeButton" : "buttonTab"} onClick={() => toggleButton(3)}>(04) REVIEW</button>
      </div>
      <div className="contentTabs">
        <div className={toggleBtn === 1 ? "details activeContent" : "details"}>
          <p>Rrem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,</p>
        </div>
        <div className={toggleBtn === 2 ? "info activeContent" : "info"}>
          <ul>
            <li>Weight</li>
            <li>1.4 oz</li>
            <li>Dimensions</li>
            <li>62 × 56 × 12 in</li>
            <li>Size</li>
            <li>XL, XXL, LG, SM, MD</li>
            <li>Fabric</li>
            <li>Cotton, Silk & Synthetic</li>
            <li>Warranty</li>
            <li>3 Months</li>
          </ul>
        </div>
        <div className={toggleBtn === 3 ? "review activeContent" : "review"}>
          <div className="comments">
            <div className="comment">
              <div className="thumb">
                <img src="https://xpressrow.com/html/cafena/cafena/assets/images/author/c-author-1.png" alt="img" />
              </div>
              <div className="content">
                <h5 className="name">Roger West -<span className="date">June 5, 2021</span></h5>
                <div className="rate">
                  <i className="fa-regular fa-star"></i>
                  <i className="fa-regular fa-star"></i>
                  <i className="fa-regular fa-star"></i>
                  <i className="fa-regular fa-star"></i>
                  <i className="fa-regular fa-star"></i>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
              </div>
            </div>
            <div className="comment">
              <div className="thumb">
                <img src="https://xpressrow.com/html/cafena/cafena/assets/images/author/c-author-2.png" alt="img" />
              </div>
              <div className="content">
                <h5 className="name">Aayat West -<span className="date">June 9, 2021</span></h5>
                <div className="rate">
                  <i className="fa-regular fa-star"></i>
                  <i className="fa-regular fa-star"></i>
                  <i className="fa-regular fa-star"></i>
                  <i className="fa-regular fa-star"></i>
                  <i className="fa-regular fa-star"></i>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
              </div>
            </div>
          </div>
          <div className="commentsSide">
            <h4>Add a Review</h4>
            <div className="rate">
              <span className='rating'>Your Rating:</span>
              <i className="fa-regular fa-star"></i>
              <i className="fa-regular fa-star"></i>
              <i className="fa-regular fa-star"></i>
              <i className="fa-regular fa-star"></i>
              <i className="fa-regular fa-star"></i>
            </div>
          </div>
          <div className="formSide">
            <div className='textarea'>
              <label htmlFor="">YOUR REVIEW</label>
              <textarea name="message" id="message"></textarea>
            </div>
            <div className="name">
              <label htmlFor="">Name</label>
              <input type="text" />
            </div>
            <div className="email">
              <label htmlFor="">Email</label>
              <input type="text" />
            </div>
            <div className="btn">
              <Button>
                <a href="">SUBMIT</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TabDetails