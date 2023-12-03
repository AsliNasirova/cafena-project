import React, { useState } from 'react'
import "./index.scss"
import Button from '../../components/Button'

function ProductDetails() {
  const [toggle, setToggle] = useState(1)

  function toggleTab(index) {
    setToggle(index);
  }
  return (
    <section id='productDetails'>
      <div className="topSide">
        <h2>Product Details</h2>
        <a href="" className='firstLink'>HOME /</a>
        <a href="" className='secondLink'>PRODUCT</a>
        <div className="shape_1">
          <img src="https://xpressrow.com/html/cafena/cafena/assets/images/shape/breadcrumb-shape-1.png" alt="" />
        </div>
        <div className="shape_2">
          <img src="https://xpressrow.com/html/cafena/cafena/assets/images/shape/breadcrumb-shape-2.png" alt="" />
        </div>
      </div>
      <div className="bottomSide">
        <div className="leftSide">
          <div className="contentTabs">
            <div className={toggle === 1 ? "imageContent activeContent" : "imageContent"}>
              <img src="https://xpressrow.com/html/cafena/cafena/assets/images/products/pp-1.png" alt="" />
            </div>
            <div className={toggle === 2 ? "imageContent activeContent" : "imageContent"}>
              <img src="https://xpressrow.com/html/cafena/cafena/assets/images/products/pp-2.png" alt="" />
            </div>
            <div className={toggle === 3 ? "imageContent activeContent" : "imageContent"}>
              <img src="https://xpressrow.com/html/cafena/cafena/assets/images/products/pp-3.png" alt="" />
            </div>
            <div className={toggle === 4 ? "imageContent activeContent" : "imageContent"}>
              <img src="https://xpressrow.com/html/cafena/cafena/assets/images/products/pp-1.png" alt="" />
            </div>
            <div className={toggle === 5 ? "imageContent activeContent" : "imageContent"}>
              <img src="https://xpressrow.com/html/cafena/cafena/assets/images/products/pp-2.png" alt="" />
            </div>
          </div>
          <div className="buttonTabs">
            <div className="imgbox">
              <div className={toggle === 1 ? "imageTab activeTab" : "imageTab"} onClick={() => toggleTab(1)}>
                <img src="https://xpressrow.com/html/cafena/cafena/assets/images/products/shop/s-p-1.png" alt="" />
              </div>
            </div>
            <div className="imgbox">
              <div className={toggle === 2 ? "imageTab activeTab" : "imageTab"} onClick={() => toggleTab(2)}>
                <img src="https://xpressrow.com/html/cafena/cafena/assets/images/products/shop/s-p-2.png" alt="" />
              </div>
            </div>
            <div className="imgbox">
              <div className={toggle === 3 ? "imageTab activeTab" : "imageTab"} onClick={() => toggleTab(3)}>
                <img src="https://xpressrow.com/html/cafena/cafena/assets/images/products/shop/s-p-3.png" alt="" />
              </div>
            </div>
            <div className="imgbox">
              <div className={toggle === 4 ? "imageTab activeTab" : "imageTab"} onClick={() => toggleTab(4)}>
                <img src="https://xpressrow.com/html/cafena/cafena/assets/images/products/shop/s-p-4.png" alt="" />
              </div>
            </div>
            <div className="imgbox">
              <div className={toggle === 5 ? "imageTab activeTab" : "imageTab"} onClick={() => toggleTab(5)}>
                <img src="https://xpressrow.com/html/cafena/cafena/assets/images/products/shop/s-p-5.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="rightSide">
          <div className="title">
            <h2>Americano Coffee Beans</h2>
            <ul className='rateStar'>
              <li>
                <i className="fa-solid fa-star"></i>
              </li>
              <li>
                <i className="fa-solid fa-star"></i>
              </li>
              <li>
                <i className="fa-solid fa-star"></i>
              </li>
              <li>
                <i className="fa-solid fa-star"></i>
              </li>
              <li>
                <i className="fa-regular fa-star"></i>
              </li>
            </ul>
            <span className='customar'>04 - Customar Review</span>
          </div>
          <p>The coffee is brewed by first roasting the green coffee beans over hot coals in brazier.Once the beans are roasted each participant is given an opportunity to sample The coffee is brewed.</p>
          <i className="fa-solid fa-check"></i><span className='stock'>In Stock</span>
          <h3>$25</h3>
          <div className="variations">
            <span></span>
            <span className='secondBox'></span>
            <span className='thirdBox'></span>
          </div>
          <div className='addToCard'>
            <span className='quantity'>Quantity</span>
            <input type="number" placeholder='1' />
            <Button data={{ borderRadius: "0" }}>
              <a href="">ADD TO CARD</a>
            </Button>
          </div>
          <div className="watchList">
            <i className='fa-solid fa-heart'></i>
            <span> Add to watch list</span>
          </div>
          <div className="share">
            <i className='fa-solid fa-share'></i>
            <span className='share'>Share</span>
          </div>
          <div className="social">
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fa-brands fa-youtube"></i>
            <i className="fa-brands fa-google"></i>
            <i className="fa-brands fa-instagram"></i>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductDetails