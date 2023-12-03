import { createContext, useContext, useEffect, useState } from "react";
import useFetch from "../Hooks/useFetch";

const ProductContext=createContext()

export const ProductProvider=({children})=>{

    const baseURL = 'http://localhost:3000/products'

    const [products, setProducts] = useState([])

    useEffect(() => {
      useFetch(baseURL, handleData)
    }, [])

    function handleData(data) {
        setProducts(data)
    }

    const data = {
        products,
        setProducts
    }

    return(
        <ProductContext.Provider value={data} >
            {children}
        </ProductContext.Provider>
    )

}

export const useProducts=()=>useContext(ProductContext)