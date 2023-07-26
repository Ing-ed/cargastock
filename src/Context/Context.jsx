import { createContext, useEffect, useState } from "react";

export let Context = createContext();

export function Provider({children}){
    let [getLista,setLista] = useState([]);
    let [getPag, setPag] = useState("Load"); //Load / Mod
    // useEffect(() => {
    //     console.log("getPag",getPag)
    // },[getPag])
    
    return(
        <Context.Provider value = {{
            getLista:getLista,
            setLista:setLista,
            getPag:getPag,
            setPag:setPag
            
        }}>{children}</Context.Provider>
    )
}