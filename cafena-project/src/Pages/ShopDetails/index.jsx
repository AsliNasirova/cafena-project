import React from 'react'
import "./index.scss"
import ProductDetails from '../../Layout/ProductDetails'
import RelatedProducts from '../../Layout/RelatedProducts'
import TabDetails from '../../Layout/TabDetails'

function ShopDetails() {
  return (
    <main>
        <ProductDetails/>
        <TabDetails/>
        <RelatedProducts/>
    </main>
  )
}

export default ShopDetails