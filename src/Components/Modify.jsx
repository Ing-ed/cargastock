import {collection, updateDoc , getDocs,addDoc, getFirestore, query, where} from "firebase/firestore"
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { useState,useEffect,useContext,useRef } from "react";
import Modal from 'react-modal'
import './Modify.css'
// import { Context } from "../Context/Context";

export function Modify(){
    let [getFoto,setFoto] = useState(null);
    let [chFoto, setChFoto] = useState(0);
    const [Productos,setProductos] = useState([])
    let [getOpenModal,setOpenModal] = useState(0);
    const db = getFirestore();
    let storage = getStorage()
    const itemColletion = collection(db,"productos");
    //referencias
    
    let refName = useRef("");
    let refDesc = useRef("");
    let refPrec = useRef("");
    let refPict = useRef("");
    let refCat  = useRef("");
    
    let storageRef = "";

    function CargarFoto(e){
        setFoto(e.target.files[0])
        setChFoto(1);
        console.log("VaL",e.target.files[0])
    }

    useEffect(() => {
        const arr = []
        getDocs(itemColletion).then((snapshot) => {
        if(snapshot.size > 0){
            snapshot.docs.map((doc) => {
                console.log(doc.data().nombre.replace(/\s+/g,''))
                arr.push({id:doc.id,link:doc.data().nombre.replace(/\s+/g,''),...doc.data()})
            })  
        }
        }).then(() => {
            setProductos(arr)
            // Prods = [...Productos];
        })
    },[])

    function openModal(item){
        storageRef = ref(storage, `CachitosBakery/${item.pic}`);
        console.log(storageRef)
        setFoto(item.pic)
        setOpenModal(1-getOpenModal)
        console.log(getFoto)
        console.log(item)
    }

    //SEND
    
    function HandleSend(){
        let producto = {
            name: refName.current.value !== ""?refName.current.value : refName.current.placeholder ,
            category: refCat.current.value !== ""? refCat.current.value : refCat.current.placeholder,
            descr: refDesc.current.value !== ""? refDesc.current.value : refDesc.current.placeholder,
            price: refPrec.current.value !== ""? refPrec.current.value : refPrec.current.placeholder,
            pic: getFoto
        }
        console.log(producto)
        // if(chFoto){

        // }
        // console.log(refPict.current.files[0])
    }
    return(
        <ul className="lista">
            {Productos.map((item) => {
                return(
                    <button onClick={() => console.log(item)}>{item.nombre}</button>
                )
            })}
        </ul>
    )

}