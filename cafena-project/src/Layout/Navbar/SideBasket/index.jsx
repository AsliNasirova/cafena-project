import React, { useMemo, useRef } from 'react'
import './index.scss'
import { usePosition } from '../../../Context/Position'
import { useBasket } from '../../../Context/Basket'

function SideBasket() {

    const { basket, setBasket, addToBasket, removeFromBasket } = useBasket()
    const { position, setPosition, display, setDisplay } = usePosition()

    const Count = basket.length

    const TotalPrice = useMemo(()=> basket ? basket.reduce((acc, item)=> acc + +item.price*item.count, 0) : 0)

    function handleBasket() {
        setPosition('-300px')
    }

    return (
        <div className='sideBasket' style={{ right: `${position}`, display: `${display}` }}>
            <div className="exitBtn" onClick={handleBasket}>
                <i className="fa-solid fa-xmark"></i>
            </div>

            <div className="sideBasketCardItems">
                <h4>CART ITEMS - {Count}</h4>
            </div>

            <div className="sideBasketProductsBox">

                {basket && basket.map((product) => (
                    <div key={product.id} className="sideBasketProduct">
                        <div className="sideBasketProductRight">
                            <div className="sideBasketProductImgBox">
                                <img src={product.img} alt="" />
                            </div>
                            <div className="sideBasketProductTextBox">
                                <h4 className="sideBasketProductName">{product.name}</h4>
                                <span className="sideBasketProductPrice">${product.price} x {product.count}</span>
                            </div>
                        </div>
                        <div className="sideBasketProductDeleteBtn" onClick={()=>removeFromBasket(product)}>
                            <i className="fa-solid fa-xmark"></i>
                        </div>
                    </div>
                ))}

                {/* Example 
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
                 Example */}
            </div>

            <div className="sideBasketSubTotalBox">
                <h3 className='sideSubTotalTitle'>SUBTOTAL:</h3>
                <span className='sideSubTotal'>${TotalPrice}</span>
            </div>

            <div className="sideBasketBtns">
                <button className="sideBasketViewCart">VIEW CART</button>
                <button className="sideBasketCheckout">CHECKOUT</button>
            </div>

        </div>
    )
}

export default SideBasket