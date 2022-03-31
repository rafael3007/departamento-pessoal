import styled from "styled-components";


const modalStyles = styled.div`
    
    background: rgba( 255, 235, 235, 0.35 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 13.5px );
    -webkit-backdrop-filter: blur( 13.5px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    width: 100%;
    height: 100vh;
    position:absolute;
    display:flex;
    justify-content: center;
    top: 0px;
    left: 0;
    

    div{
        display: flex;
        flex-direction: column;
        aling-items: center;
        padding: 5px; 
        justify-content: center;
           
    }

    div .box {
        display: flex;
        align-items: center;
        
    }

    input{
        border-radius:5px;
    }


    
    footer{
        display:flex;
        justify-content: center;
    }

    footer button{
        background-color: #008000;
        border: 2px solid #008000;
        color: #FFF;
        border-radius: 10px;
        
    }

    footer button:first-child{
        background-color: #696969;
        border: none;
        color: #FFF;
    }

    


`;

export default modalStyles
