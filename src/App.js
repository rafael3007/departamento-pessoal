
import { useState,useEffect } from 'react'

import {Container} from './styles'

import Modal from "./components/Modal";

import { db } from "./backend/config/firebase-config"
import { 
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  deleteDoc
} from "firebase/firestore"

function App() {
  let data = [{
    id: 1,
    nome: "Rafael",
    idade: 21,
    estado_civil: "Solteiro",
    CPF: "073.871.765-74",
    cidade: "Vitória da Conquista",
    estado: "BA"

  },
  {
    id: 2,
    nome: "Daniel",
    idade: 26,
    estado_civil: "Solteiro",
    CPF: "777.777.777.89",
    cidade: "Aracaju",
    estado: "SE"

  },
  {
    id: 3,
    nome: "Eduardo",
    idade: 25,
    estado_civil: "Casado",
    CPF: "999.999.999-99",
    cidade: "Senhor do Bomfim",
    estado: "BA"

  },
  {
    id: 4,
    nome: "Debora",
    idade: 23,
    estado_civil: "Solteiro",
    CPF: "212.121.212-12",
    cidade: "Petrolina",
    estado: "PE"

  }]


  const [itens, setItens] = useState([])
  const [itensPerPage,setItensPerPage]= useState(2)
  const [currentPage,setCurrentPage] = useState(0)

  // Math.ceil para aproximar se o numero for quebrado
  const pages = Math.ceil(itens.length /itensPerPage/10)

  const startIndex = currentPage + itensPerPage
  const endIndex = startIndex + itensPerPage;

  const currentItens = itens.slice(startIndex,endIndex)

  const[modalEditVisible, setModalEditVisible] = useState(false)
  const[modalAddVisible, setModalAddVisible] = useState(false)

  //form modal
  const[nome,setNome] = useState("")
  const [idade,setIdade] = useState(0)
  const [cpf,setCpf] = useState("")
  const [estado_civil, setEstado_civil] = useState("")
  const [estado,setEstado] = useState("")
  const [cidade,setCidade] = useState("")

  const [pessoas, setPessoas] = useState([])

  const peoplesCollectionRef = collection(db,'peoples')
 

  //consulta na api e preencher a lista
  useEffect(()=>{
    const getPessoas = async () =>{

      const data = await getDocs(peoplesCollectionRef)
      setPessoas(data.docs.map((doc) => ({...doc.data(), id:doc.id })))

    }

    getPessoas()

  },[])


  

 
  const remover = async(id) => {
    //try if user doc from id not found return erro
    const userDoc = doc(db,"peoples",id)
    await deleteDoc(userDoc)
    
  }

  
  return (
    <div className="App">
      <Container>
        
        <div>
          <div className='btn-modal'>
            <button  onClick={()=>setModalAddVisible(true)}>Adicionar Linha</button>
            {modalAddVisible ? <Modal onClose={()=>{setModalAddVisible(false) }}row={{}}  />: null}
            
          </div>
          <table>
            <tr className='header'>
                <td>Nome</td>
                <td >Idade</td>
                <td >Estado Civil</td>
                <td >CPF</td>
                <td >Cidade</td>
                <td >Estado</td>
                <td></td>
                <td></td>
            </tr>
          {//currentItens
            pessoas.map(item => {
              return(
                <tr>
                  <td >{item.nome}</td>
                  <td >{item.idade}</td>
                  <td >{item.estado_civil}</td>
                  <td >{item.cpf}</td>
                  <td >{item.cidade}</td>
                  <td >{item.estado}</td>
                  <td><button className='btn-edit' onClick={async ()=>setModalEditVisible(true)}>Editar</button></td>
                  {modalEditVisible? <Modal onClose={()=>{setModalAddVisible(false)}} row={item} />: null}
                  <td><button onClick={()=>{remover(item.id)}} className='btn-remove' >Remover</button></td>
                </tr>
              )
            })
          }
          </table>
          <footer>
              {Array.from(Array(pages),(item, index) => {
                return(
                  <button 
                    value={index}
                    onClick={(e)=>setCurrentPage(Number(e.target.value))}
                  >{index+1}</button>
                )
              })}
          </footer>
        </div>
        
      </Container>
      
    </div>
  );
}
//


export default App;
