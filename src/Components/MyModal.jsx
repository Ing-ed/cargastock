import { useState,useEffect, Children } from "react";
import Modal from 'react-modal'

export function MyModal({producto,Children,open}){
    return(
        <Modal className={MyModal} isOpen = {open}>
            <input type="text">{producto.name}</input>
            {Children}
        </Modal>
    )
}