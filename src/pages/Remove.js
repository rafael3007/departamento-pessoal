import axios from "axios";
import React, {useEffect} from "react";

import { useHistory,useParams } from "react-router-dom"
import { toast } from "react-toastify";



const Remove = () => {

    const { id } = useParams()
    const history = useHistory()

    const remover = async(id) =>{

        axios({ 
            method : 'delete' , 
            headers : {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            } , 
            url : `http://3.83.74.185:7777/removeRow/${id}`, 
           
          }).then(function( response ){ 
            console.log(response.dados); 
          });
        toast.warning("Removido com Sucesso!")
    }

    

    useEffect(()=>{

        if(window.confirm("Deseja realmente excluir esse item?")){
            remover(id)
            
        }else{
            toast.error("O item não foi Removido")
        }
        setTimeout(()=>history.push("/"),500)
    },[id])
    return(
        <div></div>
    )
}

export default Remove