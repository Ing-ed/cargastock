import { useRef, useState } from "react"
import { collection, addDoc, getFirestore} from 'firebase/firestore'
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import './Form.css'


export function Form(){
    let [getFoto,setFoto] = useState(null);
    let refName = useRef("");
    let refDesc = useRef("");
    let refPrec = useRef("");
    let refPict = useRef("");
    let refCat  = useRef("");
    // let {getLista,setLista} = useContext(Context)
    let storage = getStorage()
    let db = getFirestore();
    // let menu = collection(db,"Menu");
    // useEffect(() => {
    //    console.log(getFoto,"getFoto") 
    // },[getFoto])

    function CargarFoto(e){
        setFoto(e.target)
        console.log("VaL",e.target.files[0])
    }
    function Limpiar(){
        refName.current.value = ""
        refDesc.current.value = ""
        refPrec.current.value = ""
        refPict.current.value = ""
    }
    function HandleSend(){
        let producto = {
            name: refName.current.value,
            category: refCat.current.value,
            descr: refDesc.current.value,
            price: refPrec.current.value,
            pic: getFoto,
        }
        let cachitosRef = ref(storage, `CachitosBakery/${getFoto.name}`);
        uploadBytes(cachitosRef,getFoto).then((snapshot) =>{
            console.log("uploaded");
            console.log(snapshot);
        }).then(() => {
                getDownloadURL(cachitosRef).then((r) => {
                producto.pic = r;
                addDoc(collection(db,"productos"),producto).then((res) => Limpiar())
            })
        })
        // console.log(producto);
    }
    return(
        <div className="FormContainer">
            <div className="Col1">
                <input onChange={CargarFoto} ref = {refPict} type="file"></input>
                {/* {getFoto !== "" && <img src={getFoto} alt = "imagen del producto"/>} */}
            </div>
            <div className="Col2">
                <div className="Info">
                <input ref={refName} type="text" name="Nombre"/>
                <label>Nombre del producto</label>
                <input ref={refCat} type="text" name="Nombre"/>
                <label>Categoria del producto</label>
                <input ref={refDesc} type="textarea" name="Descrpcion"/>
                    <label>Descripcion del producto</label>
            </div>
                <div className="Precio">
                <label>$</label>
                <input ref={refPrec} type="number" name="Precio"/>
            </div>
            <button onClick={HandleSend}>Enviar</button>
            </div>
            
        </div>
    )
}