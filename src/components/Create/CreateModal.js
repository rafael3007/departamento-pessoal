import react from "react";
import {useState, useEffect } from "react"

import ContainerModal from "../modalStyles"


import { db } from "../backend/config/firebase-config"
import { 
  collection,
  addDoc,
} from "firebase/firestore"


const CreateModal = ({onClose = ()=>{},row}) => {
    const peoplesCollectionRef = collection(db,'peoples')

    
    //form modal
    const[nome,setNome] = useState("")
    const [idade,setIdade] = useState(0)
    const [cpf,setCpf] = useState("")
    const [estado_civil, setEstado_civil] = useState("")
    const [estado,setEstado] = useState("")
    const [cidade,setCidade] = useState("")


    const createRow = async() => {
        //try if inputs are incorrects or null 
        await addDoc(peoplesCollectionRef,{
          nome: nome,
          idade: Number(idade),
          cpf: cpf,
          estado_civil: estado_civil,
          estado: estado,
          cidade: cidade,
        })
        onClose()
    }
    
        
    return(
        <ContainerModal>
            <div>
                <form>
                    <div>
                        <div className="box">
                            <span className="form-field">Nome:</span><input value={row.nome} onChange={(event)=>{
                                setNome(event.target.value);
                                console.log(nome)
                            }} className="name" />
                        </div>
                        <div className="box">
                            <span className="age">Idade:</span><input type={"number"}  onChange={(event)=>{setIdade(event.target.value)}} value={row.idade} className="age"/>
                        </div>
                        <div className="box">
                            <span className="CPF">CPF:</span><input  onChange={(event)=>{setCpf(event.target.value)}}  value={row.cpf}  className="CPF"/>
                        </div>
                        <div className="box">
                            <span className="E_civil">Estado Civil:</span><input   onChange={(event)=>{setEstado_civil(event.target.value)}}  value={row.estado_civil} className="E_civil"/>
                        </div>
                        <div className="box">
                            <span className="cidade">Cidade:</span><input    onChange={(event)=>{setCidade(event.target.value)}}  value={row.cidade} className="cidade"/>
                        </div>
                        <div className="box">
                            <span className="estado">Estado:</span><input   onChange={(event)=>{setEstado(event.target.value)}}  value={row.estado} className="estado"/>
                        </div>
                    </div>
                    <footer>
                        <button onClick={onClose}>Cancelar</button>
                        <button onClick={()=>createRow}>Inserir</button>
                    </footer>
                </form>
            </div>
        </ContainerModal>
    )
}


export default CreateModal;
