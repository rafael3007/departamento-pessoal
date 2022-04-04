import React,{useState,useEffect} from "react";
import { useHistory, useParams, Link } from "react-router-dom"

import { toast } from "react-toastify";
import api from "../services/useApi";
import axios from "axios";
import { Container } from "./stylesAddEdit";


const initialState = {
    name: "",
    idade: 0,
    cpf: "",
    estado: "",
    cidade: "",
    estado_civil: ""
}

const AddEdit = () => { 
       
    const [state,setState] = useState(initialState)
    const [dados,setDados] = useState({})
    const {nome,idade,cpf,estado,cidade,estado_civil} = state

    const history = useHistory()

    const { id } = useParams()

    const handleInputChange = (e) => {
        const {name,value} = e.target;
        setState({...state, [name]: value})  
    }

    const handleSubmit = async (e) =>{
        e.preventDefault()
        if(!nome|| !idade || !cpf || !estado_civil || !cidade || !estado){
            toast.error("Por favor, preencha todos os campos do formulário!")
        } else {
            if(!id){
                try {
                    api.post('/addRow',state)
                } catch (err) {
                    toast.error(err)
                }finally{
                    toast.success("Adicionado com Sucesso!")
                }
                setTimeout(()=>history.push("/"),500)
            }else{
                const updateUser = async() =>{
                    axios({ 
                        method : 'put' , 
                        headers : {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        } , 
                        url : `http://3.83.74.185:7777/updateRow/${state._id}`, 
                        data : {
                            nome: state.nome,
                            idade: state.idade,
                            cpf: state.cpf,
                            estado: state.estado,
                            cidade: state.cidade,
                            estado_civil: state.estado_civil
                        },
                      })

                    toast.success("Item Atualizado com Sucesso!")
                    setTimeout(()=>history.push("/"),500)
                }
                updateUser()
            }
        }

    }

    function pegarUsuarios(){
        api.get('/getRow').then(response => setDados(response.data))
    }
    useEffect(()=>{
        pegarUsuarios()
        return ()=>{
            setDados({}) 
        }
    },[id])
    useEffect(()=>{
        if(id){
            
            setState({...dados[id]})
        }else{
           setState({...initialState}) 
        }

        return ()=>{
            setState({...initialState}) 
        }
    },[id,dados])

    return(
        <Container>
            <form onSubmit={handleSubmit}>
                <label htmlFor="nome">Nome</label>
                <input
                    type="text"
                    id="nome"
                    name="nome"
                    placeholder="Seu nome..."
                    value={nome || ""}
                    onChange={handleInputChange}
                />
                <label htmlFor="idade">Idade</label>
                <input
                    type="number"
                    id="idade"
                    name="idade"
                    placeholder="Sua idade..."
                    value={idade || null}
                    onChange={handleInputChange}
                />
                <label htmlFor="cpf">CPF</label>
                <input
                    type="text"
                    id="cpf"
                    name="cpf"
                    placeholder="Seu CPF..."
                    value={cpf || ""}
                    onChange={handleInputChange}
                />
                <label htmlFor="estado_civil">Estado Civil</label>
                <input
                    type="text"
                    id="estado_civil"
                    name="estado_civil"
                    placeholder="Seu estado civil..."
                    value={estado_civil || ""}
                    onChange={handleInputChange}
                />
                <label htmlFor="cidade">Cidade</label>
                <input
                    type="text"
                    id="cidade"
                    name="cidade"
                    placeholder="Sua cidade..."
                    value={cidade || ""}
                    onChange={handleInputChange}
                />
                <label htmlFor="estado">estado</label>
                <input
                    type="text"
                    id="estado"
                    name="estado"
                    placeholder="Seu estado..."
                    value={estado || ""}
                    onChange={handleInputChange}
                />
                <div className="btns">
                    <input className="insert" type="submit" value={id?"Atualizar":"Salvar"} />
                    <Link to={"/"}><input className="cancel" type="button" value="Cancelar" /></Link>
                </div>
            </form>
        </Container>
    )
}
export default AddEdit;