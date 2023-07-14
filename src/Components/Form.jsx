import { useRef, useContext,useState, useEffect } from "react"
import { Context } from "../Context/Context";


export function Form(){
    let [getFoto,setFoto] = useState("");
    let refName = useRef("");
    let refDesc = useRef("");
    let refPrec = useRef("");
    let refPict = useRef("");
    // let {getLista,setLista} = useContext(Context)

    useEffect(() => {
       console.log(getFoto,"getFoto") 
    },[getFoto])

    function CargarFoto(e){
        setFoto(e.target.value)
        console.log("VaL",e.target.value)
    }
    function HandleSend(){
        let producto = {
            name: refName.current.value,
            descr: refDesc.current.value,
            price: refPrec.current.value,
            pic: getFoto
        }
        console.log(producto);
    }
    return(
        <div>
            <div className="foto">
                <input onChange={CargarFoto} ref = {refPict} type="file"></input>
                {getFoto !== "" && <img src={getFoto} alt = "imagen del producto"/>}
            </div>
            <div className="info">
                <input ref={refName} type="text" name="Nombre"/>
                <label>Nombre del producto</label>
                <input ref={refDesc} type="textarea" name="Descrpcion"/>
                <label>Nombre del producto</label>
            </div>
            <div>
                <label>$</label>
                <input ref={refPrec} type="number" name="Precio"/>
            </div>
            <button onClick={HandleSend}>Enviar</button>
            
        </div>
    )
}