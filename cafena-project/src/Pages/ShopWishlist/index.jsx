import React from 'react'
import { useWishlist } from './../../Context/Wishlist'
import './index.scss'

function ShopWishlist() {

    const { wishlist, addToWishlist } = useWishlist()

    return (
        <section id='shopWishlist'>
            <div className="wishlistContainer">
                <table>
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th className='desTitle'>Description</th>
                            <th>Discount Price</th>
                            <th>Price</th>
                            <th>Category</th>
                        </tr>
                    </thead>
                    <tbody>
                        { wishlist && wishlist.map(item=>(
                            <tr key={item.id}>
                                <td className='tdImg'><img src={item.img} alt="" /></td>
                                <td className='tdName'>{item.name.toUpperCase()}</td>
                                <td className='tdDescription'>{item.description}</td>
                                <td className='tdPrice'>${(+item.price*(100 - item.discount))/100}</td>
                                <td className='tdPrice'>${item.price}</td>
                                <td className='tdCategory'>{item.category[0]}</td>
                            </tr>
                        )) }
                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default ShopWishlist