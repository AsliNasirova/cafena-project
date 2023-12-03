import { createContext, useContext, useEffect, useState } from "react";
import useFetch from "../Hooks/useFetch";

const ProductContext=createContext()

export const ProductProvider=({children})=>{

    const baseURL = 'http://localhost:3000/Cafena-API/db.json'

    const [data, setData] = useState([])

    useEffect(() => {
      useFetch(baseURL, handleData)
    }, [])

    function handleData(data) {
        setData(data)
    }

    return(
        <ProductContext.Provider value={data} >
            {children}
        </ProductContext.Provider>
    )

}

export const useData=()=>useContext(ProductContext)