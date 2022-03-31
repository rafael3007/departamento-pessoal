import react from "react";


import ContainerModal from "./modalStyles"

const Modal = ({onClose = ()=>{},row}) => {
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
                        <button onClick={()=>{adicionar()}}>Inserir</button>
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