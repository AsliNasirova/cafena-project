import { createContext, useContext, useState } from "react"

const PositionContext = createContext()

export const PositionProvider = ({children})=> {

  const [position, setPosition] = useState('0px')
  
    const data={
      position,
      setPosition
    }

  return (
    <PositionContext.Provider value={data}>
      {children}
    </PositionContext.Provider>
  )
}

export const usePosition=()=>useContext(PositionContext)