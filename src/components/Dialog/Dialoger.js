import { Link } from "react-router-dom";
import { Cancelar, Exclude, Modal } from "../../styles/components/ModalStyle.js";


function Dialoger({id, onFechar}){
    return(
        <Modal>
            <div>
                <h3>Deseja realmente excluir o item?</h3>
                <div>
                    
                    <Exclude onClick={()=>onFechar(true,id)}>Excluir</Exclude>
                    <Cancelar onClick={()=>onFechar(false,id)}>Cancelar</Cancelar>
                    
                </div>
            </div>
        </Modal>
    )
}

export default Dialoger;