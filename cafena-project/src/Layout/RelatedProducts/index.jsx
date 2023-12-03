import React from 'react'
import "./index.scss"

function RelatedProducts() {
  return (
    <section id='related'>
      <div className="title">
        <h2>Reletad Product</h2>
      </div>
      <div className="mainSide">
        <div className="card">
          <div className="imgbox">
            <img className='imageOne' src="https://xpressrow.com/html/cafena/cafena/assets/images/products/shop/s-p-1.png" alt="" />
            <img className='imageTwo' src="https://xpressrow.com/html/cafena/cafena/assets/images/products/shop/s-p-2.png" alt="" />
            <div className="items">
              <i className="fa-solid fa-basket-shopping"></i>
              <i className="fa-regular fa-heart"></i>
              <i className="fa-regular fa-eye"></i>
            </div>
          </div>
          <div className="subtitle">
            <a href="">ROSTED COFFEE</a>
            <h4>VICARAGUA COFFEE BEANS</h4>
            <div className="price">
              <h6>PRICE</h6>
              <span className='price'>$325.00 /</span>
              <del>$348</del>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="imgbox">
            <img className='imageOne' src="https://xpressrow.com/html/cafena/cafena/assets/images/products/shop/s-p-2.png" alt="" />
            <img className='imageTwo' src="https://xpressrow.com/html/cafena/cafena/assets/images/products/shop/s-p-3.png" alt="" />
            <div className="items">
              <i className="fa-solid fa-basket-shopping"></i>
              <i className="fa-regular fa-heart"></i>
              <i className="fa-regular fa-eye"></i>
            </div>
          </div>
            <div className="subtitle">
              <a href="">ROSTED COFFEE</a>
              <h4>CAFFÈ LATTE</h4>
              <div className="price">
                <h6>PRICE</h6>
                <span className='price'>$325.00 /</span>
                <del>$348</del>
              </div>
            </div>
        </div>
        <div className="card">
          <div className="imgbox">
            <img className='imageOne' src="https://xpressrow.com/html/cafena/cafena/assets/images/products/shop/s-p-3.png" alt="" />
            <img className='imageTwo' src="https://xpressrow.com/html/cafena/cafena/assets/images/products/shop/s-p-4.png" alt="" />
            <div className="items">
              <i className="fa-solid fa-basket-shopping"></i>
              <i className="fa-regular fa-heart"></i>
              <i className="fa-regular fa-eye"></i>
            </div>
          </div>
            <div className="subtitle">
              <a href="">ROSTED COFFEE</a>
              <h4>JAPANIS COFFEE GRED</h4>
              <div className="price">
                <h6>PRICE</h6>
                <span className='price'>$325.00 /</span>
                <del>$348</del>
              </div>
            </div>
        </div>
        <div className="card">
          <div className="imgbox">
            <img className='imageOne' src="https://xpressrow.com/html/cafena/cafena/assets/images/products/shop/s-p-4.png" alt="" />
            <img className='imageTwo' src="https://xpressrow.com/html/cafena/cafena/assets/images/products/shop/s-p-5.png" alt="" />
            <div className="items">
              <i className="fa-solid fa-basket-shopping"></i>
              <i className="fa-regular fa-heart"></i>
              <i className="fa-regular fa-eye"></i>
            </div>
          </div>
            <div className="subtitle">
              <a href="">ROSTED COFFEE</a>
              <h4>AMERICANO COFFEE</h4>
              <div className="price">
                <h6>PRICE</h6>
                <span>$325.00 /</span>
                <del>$348</del>
              </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default RelatedProducts