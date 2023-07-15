import { useRef, useContext,useState, useEffect,useId } from "react"
import {doc, collection, updateDoc, addDoc, getFirestore} from 'firebase/firestore'
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { Context } from "../Context/Context";


export function Form(){
    let [getFoto,setFoto] = useState(null);
    let refName = useRef("");
    let refDesc = useRef("");
    let refPrec = useRef("");
    let refPict = useRef("");
    // let {getLista,setLista} = useContext(Context)
    let storage = getStorage()
    let db = getFirestore();
    let menu = collection(db,"Menu");
    // useEffect(() => {
    //    console.log(getFoto,"getFoto") 
    // },[getFoto])

    function CargarFoto(e){
        setFoto(e.target.files[0])
        console.log("VaL",e.target.files[0])
    }
    function HandleSend(){
        let producto = {
            name: refName.current.value,
            descr: refDesc.current.value,
            price: refPrec.current.value,
            pic: getFoto,
            id: 1
        }
        let cachitosRef = ref(storage, `CachitosBakery/${getFoto.name}`);
        uploadBytes(cachitosRef,getFoto).then((snapshot) =>{
            console.log("uploaded");
            console.log(snapshot);
        }).then(() => {
            let url = getDownloadURL(cachitosRef).then((r) => {
                producto.pic = r;
                addDoc(collection(db,"Menu"),producto).then((res) => console.log(res.id))
            })
        })
        // console.log(producto);
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
                <label>Descripcion del producto</label>
            </div>
            <div>
                <label>$</label>
                <input ref={refPrec} type="number" name="Precio"/>
            </div>
            <button onClick={HandleSend}>Enviar</button>
            
        </div>
    )
}