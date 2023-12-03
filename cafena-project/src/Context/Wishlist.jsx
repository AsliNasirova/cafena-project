import { createContext, useContext, useState } from "react";

const WishlistContext = createContext()

export const WishlistProvider =({children})=>{

    const [wishlist, setWishlist] = useState([])

    function addToWishlist(item) {
        const itemIndex = wishlist.findIndex((x)=> x.id === item.id)
        if (itemIndex === -1) {
            setWishlist([...wishlist,{...item, count: 1}])
            return
        }
        let WishlistCopy = [...wishlist]
        WishlistCopy = WishlistCopy.filter((x)=> x.id !== item.id)
        setWishlist(WishlistCopy)
    }

    const data = {
        wishlist,
        setWishlist,
        addToWishlist
    }

    return(
        <WishlistContext.Provider value={data}>
            {children}
        </WishlistContext.Provider>
    )

}

export const useWishlist=()=> useContext(WishlistContext)