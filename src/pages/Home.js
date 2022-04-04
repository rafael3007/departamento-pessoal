import React,{useState,useEffect} from 'react';
import { Link,useLocation } from 'react-router-dom'
import api from '../services/useApi';

import {Pagination,Container, Tabela, Options, Edit, Delete} from './stylesHome.js'

const Home = () => {


  const [data,setData] = useState([])

  //pages
  const [itensPerPage] = useState(10) 
  const [currentPage,setCurrentPage] = useState(0)

  const pages = Math.ceil(data.length / itensPerPage)
  const startIndex = currentPage * itensPerPage;
  const endIndex = startIndex + itensPerPage;
  const currentItens = data.slice(startIndex,endIndex)


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
                        <Link to={`/remove/${currentItens[id]._id}`}>
                          <Delete >Delete</Delete>
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
            
          
        </Container>
    )
}

export default Home;






































