import React from 'react';
import styles from "./Modal.module.css"
const Modal = ({active, setActive}:{active:boolean; setActive:any}) => {
    if (!active){
        return <div></div>
    }
    return (
        <div className={styles.modal}>
           <div className={styles.modal__content}>
               <h1 className={styles.title}>METAMASK EXTENTION</h1>
               <div className={styles.content}>To work with our application, you have to install the Metamask browser extension</div>
               <button className="connect" onClick={()=>setActive(false)}>close</button>
           </div>
        </div>
    );
};

export default Modal;