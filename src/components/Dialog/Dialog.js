import { Cancelar, Exclude, Modal } from "./ModalStyle";


function Dialog({ onDialog }){

    return(
        <Modal>
            <div>
                <h3>Deseja realmente excluir o item?</h3>
                <div>
                    <Exclude onClick={()=>onDialog(true)}>Excluir</Exclude>
                    <Cancelar onClick={()=>onDialog(false)}>Cancelar</Cancelar>
                </div>
            </div>
        </Modal>
    )
}

export default Dialog;