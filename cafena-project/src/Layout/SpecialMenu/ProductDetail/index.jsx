import React, { useMemo, useState } from 'react'
import { useBasket } from './../../../Context/Basket'
import { useProducts } from './../../../Context/Product'

function ProductDetail({id,setId}) {

    const {products} = useProducts()
    const { basket, setBasket, addToBasket } = useBasket()

    const [count, setCount] = useState(1)
    const product = useMemo(()=>products.filter((item)=> item.id === id)[0],[id])

    function hideModal() {
        setId('')
    }

    function handleInput(e) {
        setCount(+e.value)
    }

    return (
        <div className="popularProductModalContainer" >
            <div className="popularProductModal">
                <div className="modalProductImgBox">
                    <img src={product.img} alt="" />
                </div>
                <div className="modalProductTextBox">
                    <h2 className='modalProductName'>{product.name}</h2>
                    <h4 className='modalProductPrice'>$ {product.price}</h4>
                    <h4 className='modalProductInStock'>Available: {product.inStock}</h4>
                    <span className="modalProductDescription">{product.description}</span>
                    <div className="modalProductQYT">
                        <span>QYT</span>
                        <input type="number" min={1} onChange={(e)=>handleInput(e.target)} defaultValue={1} id="modalProductAddingCount" />
                        <button className='modalProductAdd'onClick={()=>addToBasket(product,count)} >ADD TO CART</button>
                    </div>
                    <span className='modalProductCategory'>Category: {product.category[0]}</span>
                </div>
                <div className="modalExitBtn" onClick={hideModal}>
                    <i className="fa-solid fa-xmark"></i>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail