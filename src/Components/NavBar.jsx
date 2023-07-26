import { useContext } from "react";
import { Context } from "../Context/Context";
import './NavBar.css'

export function NavBar(){
    let { setPag } = useContext(Context);
    return(
        <ul className="NavBar">
            <li><button onClick={() => setPag("Load")}>Ingresar Producto</button></li>
            <li><button onClick={() => setPag("Mod")}>Modificar Producto</button></li>
        </ul>
    )
}