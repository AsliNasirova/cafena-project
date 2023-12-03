import React, { useEffect, useRef } from 'react'
import './index.scss'
import { usePosition } from '../../../Context/Position'

function SideBasket() {

    const Basket = useRef()

    const {position, setPosition} = usePosition()

    return (
        <div className='sideBasket' ref={Basket} style={{right:`${position}`}}>
            <div className="exitBtn" onClick={()=>setPosition('-300px')}>
                <i className="fa-solid fa-xmark"></i>
            </div>

            <div className="sideBasketCardItems">
                <h4>CART ITEMS - 4</h4>
            </div>

            <div className="sideBasketProductsBox">
                {/* Example */}
                <div className="sideBasketProduct">
                    <div className="sideBasketProductImgBox">
                        <img src="https://xpressrow.com/html/cafena/cafena/assets/images/top-grade/tg-1.png" alt="" />
                    </div>
                    <div className="sideBasketProductTextBox">
                        <h4 className="sideBasketProductName">Rorem ipsum dolor sit amet</h4>
                        <span className="sideBasketProductPrice">$87.00</span>
                    </div>
                    <div className="sideBasketProductDeleteBtn">
                        <i className="fa-solid fa-xmark"></i>
                    </div>
                </div>
                {/* Example */}
            </div>

            <div className="sideBasketSubTotalBox">
                <h3 className='sideSubTotalTitle'>SUBTOTAL:</h3>
                <span className='sideSubTotal'>$87.00</span>
            </div>

            <div className="sideBasketBtns">
                <button className="sideBasketViewCart">VIEW CART</button>
                <button className="sideBasketCheckout">CHECKOUT</button>
            </div>

        </div>
    )
}

export default SideBasket