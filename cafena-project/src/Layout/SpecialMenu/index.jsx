import React, { useRef } from 'react'
import './index.scss'

function SpecialMenu() {

    const Filters = useRef()

    function addSelected(e) {
        const parent = Filters.current.children
        for (const x of parent) {
            if (x === e) {
                x.classList.add('selected')
            }
            else {
                x.classList.remove('selected')
            }

        }
    }

    return (
        <section id='specialMenu'>
            <div className="specialMenuContainer">
                <h6 className='specialMenuTitle'>SPECIAL MENU</h6>
                <h2 className='popularMenu'>CAFENA POPULAR MENU</h2>
                <div className="specialMenuFilterBox" ref={Filters}>
                    <button onClick={(e) => addSelected(e.target)} className='filterItem selected'>All</button>
                    <button onClick={(e) => addSelected(e.target)} className='filterItem'>CHOCOLATE</button>
                    <button onClick={(e) => addSelected(e.target)} className='filterItem'>COFFEE</button>
                    <button onClick={(e) => addSelected(e.target)} className='filterItem'>SANDWICHES</button>
                    <button onClick={(e) => addSelected(e.target)} className='filterItem'>SWEETS</button>
                    <button onClick={(e) => addSelected(e.target)} className='filterItem'>BLACK TEA</button>
                    <button onClick={(e) => addSelected(e.target)} className='filterItem'>GREAN TEA</button>
                </div>
                <div className="popularProductsContainer">
                    <div className="popularProducts">
                        {/* Example */}
                        <div className="popularProduct">
                            <div className="popularProductImgBox">
                                <img src="https://xpressrow.com/html/cafena/cafena/assets/images/menu/menu-2.jpeg" alt="" />
                            </div>
                            <div className="popularProductTextBox">
                                <h3 className="popularProductName">Americano</h3>
                                <span className="popularProductPrice">PRICE-</span>
                                <div className="popularProductsIconBox">
                                    <i className="fa-solid fa-basket-shopping"></i>
                                    <i className="fa-regular fa-heart"></i>
                                    <i className="fa-regular fa-eye"></i>
                                </div>
                            </div>
                        </div>
                        {/* Example */}
                        {/* Example */}
                        <div className="popularProduct">
                            <div className="popularProductImgBox">
                                <img src="https://xpressrow.com/html/cafena/cafena/assets/images/menu/menu-2.jpeg" alt="" />
                            </div>
                            <div className="popularProductTextBox">
                                <h3 className="popularProductName"></h3>
                                <span className="popularProductPrice">PRICE-</span>
                                <div className="popularProductIconBox">
                                    <i className="popularProductIcon fa-solid fa-basket-shopping"></i>
                                    <i className="popularProductIcon fa-regular fa-heart"></i>
                                    <i className="popularProductIcon fa-regular fa-eye"></i>
                                </div>
                            </div>
                        </div>
                        {/* Example */}
                        {/* Example */}
                        <div className="popularProduct">
                            <div className="popularProductImgBox">
                                <img src="https://xpressrow.com/html/cafena/cafena/assets/images/menu/menu-2.jpeg" alt="" />
                            </div>
                            <div className="popularProductTextBox">
                                <h3 className="popularProductName"></h3>
                                <span className="popularProductPrice">PRICE-</span>
                                <div className="popularProductsIconBox">
                                    <i className="fa-solid fa-basket-shopping"></i>
                                    <i className="fa-regular fa-heart"></i>
                                    <i className="fa-regular fa-eye"></i>
                                </div>
                            </div>
                        </div>
                        {/* Example */}
                        {/* Example */}
                        <div className="popularProduct">
                            <div className="popularProductImgBox">
                                <img src="https://xpressrow.com/html/cafena/cafena/assets/images/menu/menu-2.jpeg" alt="" />
                            </div>
                            <div className="popularProductTextBox">
                                <h3 className="popularProductName"></h3>
                                <span className="popularProductPrice">PRICE-</span>
                                <div className="popularProductsIconBox">
                                    <i className="fa-solid fa-basket-shopping"></i>
                                    <i className="fa-regular fa-heart"></i>
                                    <i className="fa-regular fa-eye"></i>
                                </div>
                            </div>
                        </div>
                        {/* Example */}
                        {/* Example */}
                        <div className="popularProduct">
                            <div className="popularProductImgBox">
                                <img src="https://xpressrow.com/html/cafena/cafena/assets/images/menu/menu-2.jpeg" alt="" />
                            </div>
                            <div className="popularProductTextBox">
                                <h3 className="popularProductName"></h3>
                                <span className="popularProductPrice">PRICE-</span>
                                <div className="popularProductsIconBox">
                                    <i className="fa-solid fa-basket-shopping"></i>
                                    <i className="fa-regular fa-heart"></i>
                                    <i className="fa-regular fa-eye"></i>
                                </div>
                            </div>
                        </div>
                        {/* Example */}
                        {/* Example */}
                        <div className="popularProduct">
                            <div className="popularProductImgBox">
                                <img src="https://xpressrow.com/html/cafena/cafena/assets/images/menu/menu-2.jpeg" alt="" />
                            </div>
                            <div className="popularProductTextBox">
                                <h3 className="popularProductName"></h3>
                                <span className="popularProductPrice">PRICE-100$</span>
                                <div className="popularProductsIconBox">
                                    <i className="fa-solid fa-basket-shopping"></i>
                                    <i className="fa-regular fa-heart"></i>
                                    <i className="fa-regular fa-eye"></i>
                                </div>
                            </div>
                        </div>
                        {/* Example */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SpecialMenu