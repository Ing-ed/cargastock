import { createContext, useState } from "react";

export let Context = createContext();

export function Provider({children}){
    let [getLista,setLista] = useState([]);
    return(
        <Context.Provider value = {{
            getLista:getLista,
            setLista:setLista,
            
        }}>{children}</Context.Provider>
    )
}