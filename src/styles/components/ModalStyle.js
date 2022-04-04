import styled from 'styled-components'

export const Modal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,.5);
    display: flex;
    flex-direction: column;
    

    div {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 50%;
        left: 50%;
        background-color: #FFF;
        padding: 25px;
        height: 400px;
        transform: translate(-50%,-50%);
        border-radius: 15px;
        
    }

    div h3{
        font-size: 24px;
        margin-bottom: 50%;
        font-weight: bold;
    }

    div div {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        height: 50px;
        margin-top: 40%;
    }


`

export const Exclude = styled.button`
    background-color: #F44336;
    color: #FFF;
    border: none;
    padding: 20px;
    border-radius: 10px;
    font-size: 20px;
    margin-right: 10px;

    :hover{
        background-color: #f27f77;
        border: 2px solid  #F44336;
        color: #FFF;
        font-size: 20px;
        padding: 18px;
    }
`

export const Cancelar = styled.button`
    background-color: #3b3b3b;
    color: #FFF;
    border: none;
    padding: 20px;
    border-radius: 10px;
    font-size: 20px;
    margin-left: 10px;

    :hover{
        background-color: #807e7e;
        border: 2px solid  #3b3b3b;
        color: #FFF;
        font-size: 20px;
        padding: 18px;
    }
`