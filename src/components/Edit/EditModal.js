//import react from "react";

import {useState, useEffect } from "react"
import ContainerModal from "../modalStyles"


import { db } from "../../backend/config/firebase-config"
import { 
  updateDoc,
  doc,
} from "firebase/firestore"



const EditModal = ({onClose = ()=>{},row}) => {
     //form modal
     const [nome,setNome] = useState(row.nome)
     const [idade,setIdade] = useState(row.idade)
     const [cpf,setCpf] = useState(row.cpf)
     const [estado_civil, setEstado_civil] = useState(row.estado_civil)
     const [estado,setEstado] = useState(row.estado)
     const [cidade,setCidade] = useState(row.cidade)

    const updateRow = async () => {

            
        //try if user doc from id not found return erro
      const userDoc =doc(db,"peoples",row.id)
    
        const newFields = {
          idade: 20,// idade,
          nome: "Rafael",//nome,
          cpf: "0000000000",//cpf,
          estado_civil: "casado",//estado_civil,
          estado: "bahia",//estado,
          cidade:"ba"// cidade,
        }

        console.log("fileds:"+ newFields)
        await updateDoc(userDoc,newFields)
        //onClose()
    }

    useEffect(()=>{
        //setar todos os estados
    },[])

       
    return(
        <ContainerModal>
            <div>
                <form>
                    <div>
                        <div className="box">
                            <span className="form-field">Nome:</span><input  onChange={(event)=>{setNome(event.target.value)}}  value={nome} className="name" />
                        </div>
                        <div className="box">
                            <span className="age">Idade:</span><input onChange={(event)=>{setIdade(event.target.value)}}  type={"number"}  value={idade} className="age"/>
                        </div>
                        <div className="box">
                            <span className="CPF">CPF:</span><input onChange={(event)=>{setCpf(event.target.value)}}  value={cpf}  className="CPF"/>
                        </div>
                        <div className="box">
                            <span className="E_civil">Estado Civil:</span><input onChange={(event)=>{setEstado_civil(event.target.value)}}  value={estado_civil} className="E_civil"/>
                        </div>
                        <div className="box">
                            <span className="cidade">Cidade:</span><input  onChange={(event)=>{setCidade(event.target.value)}}  value={cidade} className="cidade"/>
                        </div>
                        <div className="box">
                            <span className="estado">Estado:</span><input onChange={(event)=>{setEstado(event.target.value)}}  value={estado} className="estado"/>
                        </div>
                    </div>
                    <footer>
                        <button onClick={onClose}>Cancelar</button>
                        <button onClick={()=>updateRow()}>Inserir</button>
                    </footer>
                </form>
            </div>
        </ContainerModal>
    )
}


export default EditModal;
