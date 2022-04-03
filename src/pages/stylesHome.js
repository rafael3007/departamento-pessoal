import styled from 'styled-components'

export const Container = styled.div`
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    
`;

export const Pagination = styled.div`
    margin-top: 20px;

    button{
        padding: 20px;
        border: none;
        margin: 4px;
        background-color: #009879;
        color: #F3F3F3;
        font-size: 20px;
        font-weight: bold;
        border-radius: 5px;
    }

    button:hover{
        border: 2px solid #009879;
        background-color: #F3F3F3;
        color: #009879;
        padding: 18px;
    }

    button.active{
        border: 2px solid #009879;
        background-color: #F3F3F3;
        color: #009879;
        padding: 18px;
    }
`;

export const Tabela = styled.table`
    border-collapse: collapse;
    margin: auto;
    font-size: 0.9em;
    font-family: sans-serif;
    max-width: 1200px;
    box-shadow: 0 0 20px rgba(0,0,0,0.15);
    
    
    thead tr {
        background-color: #009879;
        color: #FFF;
        text-align: left;
        height: 60px;
        
    }
    th{
        font-size: 20px;
        font-weight: bold;
        padding: 12px 15px;
        text-align: center;
    }
    
    td {
        padding: 12px 15px;
        text-align: center;
        font-size: 16px;
    }

    tbody tr {
        border-bottom: 1px solid #DDD;
    }

    tbody tr:nth-of-type(even){
        background-color: #F3F3F3;
    }

    tbody tr:last-of-type {
        border-bottom: 2px solid #009879;
    }

    tbody tr td.table {
        text-align: center;
    }

    
`

export const Options = styled.div`
    display: flex;
    flex-direction: row;

    button{
        border: none;
        color: #FFF;
        padding: 5px 8px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        border-radius: 5px;
        font-size: 16px;
        margin: 4px 2px;
        cursor: pointer;
    }
    
    
`

export const Edit = styled.button`
    background-color: #008CBA;

`

export const Delete = styled.button`
    background-color: #F44336;
`