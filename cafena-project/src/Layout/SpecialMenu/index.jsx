import React, { useMemo, useRef, useState } from 'react'
import ProductDetail from './ProductDetail'
import './index.scss'
import { useWishlist } from '../../Context/Wishlist'
import { useProducts } from './../../Context/Product'
import { useBasket } from '../../Context/Basket'

function SpecialMenu() {
    
    const { products } = useProducts()
    const { wishlist, setWishlist, addToWishlist } = useWishlist()
    const { basket, setBasket, addToBasket } = useBasket()
    

    const FiltersBox = useRef()
    const [filters, setFilters] = useState('all')
    const [id, setId] = useState()

    const FilteredProducts = useMemo(()=> filters && filters==='all' ? products : products.filter((item)=> item.category.includes(filters)), [filters, products])

    function addSelected(e) {

        const parent = FiltersBox.current.children
        for (const x of parent) {
            if (x === e) {
                x.classList.add('selected')
            }
            else {
                x.classList.remove('selected')
            }
        }

        if (filters.includes(e.textContent.toLowerCase())) {
            return
        }
        setFilters(e.textContent.toLowerCase())
    }

    return (
        <section id='specialMenu'>
            <div className="specialMenuContainer">
                <h6 className='specialMenuTitle'>SPECIAL MENU</h6>
                <h2 className='popularMenu'>CAFENA POPULAR MENU</h2>
                <div className="specialMenuFilterBox" ref={FiltersBox}>
                    <button onClick={(e) => addSelected(e.target)} className='filterItem selected'>All</button>
                    <button onClick={(e) => addSelected(e.target)} className='filterItem'>CHOCOLATE</button>
                    <button onClick={(e) => addSelected(e.target)} className='filterItem'>COFFEE</button>
                    <button onClick={(e) => addSelected(e.target)} className='filterItem'>SANDWICHES</button>
                    <button onClick={(e) => addSelected(e.target)} className='filterItem'>SWEETS</button>
                    <button onClick={(e) => addSelected(e.target)} className='filterItem'>BLACK TEA</button>
                    <button onClick={(e) => addSelected(e.target)} className='filterItem'>GREEN TEA</button>
                </div>
                <div className="popularProductsContainer">
                    <div className="popularProducts">
                        {FilteredProducts && FilteredProducts.map((product,grid) => (
                            <div key={product.id} className={`popularProduct 'grid${product.id}'`} style={{ gridArea: `grid${grid+1}` }}>   
                                <div className="popularProductImgBox">
                                    <img src={product.popularImg} alt="" />
                                </div>
                                <div className="popularProductTextBox">
                                    <h3 className="popularProductName">{product.name.toUpperCase()}</h3>
                                    <span className="popularProductPrice">PRICE-$ <span className='productPrice'>{(parseFloat(product.price) * (100 - product.discount)) / 100} / <span className='oldPrice'>{product.price}</span></span></span>
                                    <div className="popularProductsIconsBox">
                                        <div className="productIconBox" onClick={()=>addToBasket(product)}><i className="fa-solid fa-basket-shopping"></i></div>
                                        <div className="productIconBox" onClick={()=>addToWishlist(product)}><i className={`fa-${ wishlist.find((item)=> item.id === product.id) ? 'solid' : 'regular'} fa-heart`}></i></div>
                                        <div className="productIconBox" onClick={()=>setId(product.id)}><i className="fa-regular fa-eye"></i></div>
                                    </div>
                                </div>

                                { id && <ProductDetail id={id} setId={setId} /> }

                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SpecialMenu