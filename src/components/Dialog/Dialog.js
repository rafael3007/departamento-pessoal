import { Cancelar, Exclude, Modal } from "../../styles/components/ModalStyle.js";


function Dialog(){

    return(
        <Modal>
            <div>
                <h3>Deseja realmente excluir o item?</h3>
                <div>
                    <Exclude >Excluir</Exclude>
                    <Cancelar >Cancelar</Cancelar>
                </div>
            </div>
        </Modal>
    )
}

export default Dialog;