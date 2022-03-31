import react from "react";


import ContainerModal from "./modalStyles"


import { db } from "../backend/config/firebase-config"
import { 
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
} from "firebase/firestore"


const Modal = ({onClose = ()=>{},row}) => {
    const peoplesCollectionRef = collection(db,'peoples')

    const updateRow = async (item) => {
        //try if user doc from id not found return erro
        const userDoc = doc(db,"peoples",item.id)
    
        const newFields = {
          idade: item.idade,
          nome: item.nome,
          cpf: item.cpf,
          estado_civil: item.estado_civil,
          estado: item.estado,
          cidade: item.cidade,
        }
        await updateDoc(userDoc,newFields)
    }

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
      }

    const adicionar = ()=>{
        onClose()
    }
    return(
        <ContainerModal>
            <div>
                <form>
                    <div>
                        <div className="box">
                            <span className="form-field">Nome:</span><input value={row.nome} className="name" />
                        </div>
                        <div className="box">
                            <span className="age">Idade:</span><input type={"number"}  value={row.idade} className="age"/>
                        </div>
                        <div className="box">
                            <span className="CPF">CPF:</span><input value={row.CPF}  className="CPF"/>
                        </div>
                        <div className="box">
                            <span className="E_civil">Estado Civil:</span><input  value={row.estado_civil} className="E_civil"/>
                        </div>
                        <div className="box">
                            <span className="cidade">Cidade:</span><input  value={row.cidade} className="cidade"/>
                        </div>
                        <div className="box">
                            <span className="estado">Estado:</span><input value={row.estado} className="estado"/>
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


export default Modal;

/**
 * 
 * <div class="form-group">
    <span>https://</span>
    <input class="form-field" type="text" placeholder="domain.tld">
</div>

<div class="form-group">
    <input class="form-field" type="email" placeholder="Email">
    <span>@gmail.com</span>
</div>
 */