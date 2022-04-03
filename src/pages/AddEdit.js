import React,{
    useState,
    useEffect
} from "react";

import "./AddEdit.css"


import { toast } from "react-toastify";

import { useHistory, useParams, Link } from "react-router-dom"
import { useApi } from "../services/useApi";


const initialState = {
    name: "",
    idade: 0,
    cpf: "",
    estado: "",
    cidade: "",
    estado_civil: ""
}

const AddEdit = () => {
    const { dataApi } = useApi('http://localhost/',{})
    console.log(dataApi.result)

    const [state,setState] = useState(initialState)
    const [data,setData] = useState({})

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
                    //call /addRow --post
                    //await 
                } catch (err) {
                    toast.error(err)
                }finally{
                    toast.success("Adicionado com Sucesso!")
                }
                setTimeout(()=>history.push("/"),500)
            }else{
                const updateUser = async(id) =>{
                    //try if user doc from id not found return error
                    //call /updateRow/${id}
                    toast.success("Item Atualizado com Sucesso!")
                }
                updateUser(id)
            }
        }

    }

    useEffect(()=>{
        const getUsers = async ()=> {
            //call get all Rows /getRow and set
            //const data = await getDocs(usersCollectionRef)
            //verificar se está recebendo e inserindo certo
            //setData(data.docs.map((doc) => ({...doc.data(), id:doc.id })))
        }

        getUsers()
        return ()=>{
            setData({}) 
        }
    },[id])

    useEffect(()=>{
        if(id){
            setState({...data[id]})
        }else{
           setState({...initialState}) 
        }

        return ()=>{
            setState({...initialState}) 
        }
    },[id,data])

    return(
        <div style={{marginTop: "100px"}}>
            <form style={{
                margin: "auto",
                padding: "15px",
                maxWidth: "400px",
                alignItems: "center"}}
                onSubmit={handleSubmit}
            >
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
                    value={idade || 0}
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
        </div>
    )
}
export default AddEdit;