import React,{ useState,createContext } from 'react'


export const scoreContext = createContext();

export const Score = (props) => {
    const [state,setState] = useState(0)
    
    return(
        <scoreContext.Provider value={[state,setState]}>
            {props.children}
        </scoreContext.Provider>
    )   
}