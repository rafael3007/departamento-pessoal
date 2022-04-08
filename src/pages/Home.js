import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom'
import Dialoger from '../components/Dialog/Dialoger';
import api from '../services/useApi';

import { useHistory,useParams } from "react-router-dom"
import { toast } from "react-toastify"

//Caixa de confirmação estilizada para o Deletar
//import Dialog from '../components/Dialog/Dialog.js'

import {Pagination,Container, Tabela, Options, Edit, Delete} from '../styles/pages/stylesHome.js'
import Axios  from 'axios';

const Home = () => {


  const [data,setData] = useState([])

  //pages
  const [itensPerPage] = useState(10) 
  const [currentPage,setCurrentPage] = useState(0)

  const pages = Math.ceil(data.length / itensPerPage)
  const startIndex = currentPage * itensPerPage;
  const endIndex = startIndex + itensPerPage;
  const currentItens = data.slice(startIndex,endIndex)

  const [currentId,setCurrentId] = useState(null)
  
  //modal
  const [isVisible,setIsVisible] = useState(false)

  const formatarCPF = (cpf) => { 
    //retira os caracteres indesejados...
    cpf = cpf.replace(/[^\d]/g, "");
      
    //realizar a formatação...
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
  }

  const handleDelete = (choice,id)=>{ 
    console.log(id)
    if(choice){
      //delete
      
      Axios({ 
        method : 'delete' , 
        headers : {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        } , 
        url : `http://3.83.74.185:7777/removeRow/${id}`, 
       
      })
      toast.warning("Removido com Sucesso!")
    }else{
      toast.error("O item não foi Removido")
    }
    setIsVisible(false)
    window.location.reload()
  }
  
  useEffect(()=>{
    const getUsers = async ()=> {
      api.get('/getRow')
        .then(response =>setData(response.data))
    }
    getUsers()

  },[]) 

  
    return(
        <Container>
          <Tabela>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Idade</th>
                <th>CPF</th>
                <th>Estado Civil</th>
                <th>Cidade</th>
                <th>Estado</th>
                <th>Opções</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(currentItens).map((id,index)=>{
                return(
                  <tr key={id}>
                    <td>{currentItens[id].nome}</td>
                    <td>{currentItens[id].idade}</td>
                    <td>{currentItens[id].cpf}</td>
                    <td>{currentItens[id].estado_civil}</td>
                    <td>{currentItens[id].cidade}</td>
                    <td>{currentItens[id].estado}</td>
                    <td>
                      <Options>
                        <Link to={`/update/${Number(id)+(Number(itensPerPage)*Number(currentPage))}`} >
                          <Edit>Editar</Edit>
                        </Link>
                        <Link >
                          <Delete onClick={()=>{
                            setCurrentId(currentItens[id]._id)
                            setIsVisible(true)
                          }}>Deletar</Delete>
                          
                        </Link>
                      </Options>
                    </td>
                  </tr>
                )
              })}
            </tbody>
            
          </Tabela>
          <Pagination>
            {
              Array.from(Array(pages), (item,index)=>{
                return <button 
                  value={index}
                  onClick={(e)=>{        
                    setCurrentPage(Number(e.target.value))
                  }}
                  className={`${index === currentPage ? "active": ""}`} 
                >{index+1}</button>
              })
            }
          </Pagination>            
          {isVisible?<Dialoger onFechar={handleDelete} id={currentId}/>:""}
        </Container>
    )
}

export default Home;






































