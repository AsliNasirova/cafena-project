import { createContext, useContext, useState } from "react";
import useLocalStorage from "../Hooks/useLocalStorage";

const BasketContext = createContext()

export const BasketProvider=({children})=>{

    const [basket, setBasket] = useLocalStorage('basket')

    function addToBasket(item, count=1) {
        const itemIndex = basket.findIndex((x)=> x.id === item.id)
        if (itemIndex === -1) {
            setBasket([...basket,{...item, count: +count}])
            return
        }
        const BasketCopy = [...basket]
        BasketCopy[itemIndex].count = BasketCopy[itemIndex].count + count
        setBasket(BasketCopy)
    }

    function removeFromBasket(item) {
        let BasketCopy = [...basket]
        BasketCopy = BasketCopy.filter((x)=>x.id !== item.id)
        setBasket(BasketCopy)
    }

    const data = {
        basket,
        setBasket,
        addToBasket,
        removeFromBasket,
    }

    return(
        <BasketContext.Provider value={data}>
            {children}
        </BasketContext.Provider>
    )

}

export const useBasket=()=> useContext(BasketContext)