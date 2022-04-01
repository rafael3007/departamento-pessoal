import React, {
    useEffect,
    useState
} from "react";

import { useHistory,useParams } from "react-router-dom"
import { toast } from "react-toastify";
import {db} from "../backend/config/firebase-config"

import { 
    deleteDoc,
    doc
  } from "firebase/firestore"


const Remove = () => {

    const { id } = useParams()
    const history = useHistory()

    const remover = async(id) =>{
        const userDoc = doc(db,"peoples",id)
        await deleteDoc(userDoc)
        toast.warning("Removido com Sucesso!")
    }

    

    useEffect(()=>{

        if(window.confirm("Deseja realmente excluir esse item?")){
            remover(id)
            
        }else{
            toast.error("O item não foi Removido")
        }
        //delet
        
        
        //redirect from homepage
        setTimeout(()=>history.push("/"),500)
    },[id])
    return(
        <div></div>
    )
}

export default Remove;