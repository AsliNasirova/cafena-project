import { createContext, useState } from "react";

const WishlistContext = createContext()

export const WishlistProvider =({children})=>{

    const [wishlist, setWishlist] = useState([])

    function addToWishlist(item) {
        const itemIndex = wishlist.findIndex((x)=> x.id === item.id)
        if (itemIndex === -1) {
            setWishlist([...wishlist,{...item, count: +count}])
            return
        }
    }

    const data = {
        wishlist,
        setWishlist
    }

}