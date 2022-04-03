import styled from 'styled-components'

export const Container = styled.div`
    margin-top: 100px;

    form {
        margin: auto;
        padding: 15px;
        max-width: 400px;
        
    }

    form input[type="text"],
    form input[type="number"],
    form select {
        width: 100%;
        padding: 12px 20px;
        margin: 8px 0;
        display: inline-block;
        border: 1px solid #CCC;
        border-radius: 4px;
        box-sizing: border-box;
    }

    
    form input[type="submit"]{
        width: 100%;
        background-color: #4CAF50;
        color: #FFF;
        padding: 14px 20px;
        margin: 8px 0;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }

    form input[type="submit"]:hover {
        background-color: #45A049;
    }



    form input[type="submit"].insert {
        margin-right: 5px;
    }

    form input[type="button"].cancel {
        background-color: #F44336;
        margin-left: 5px;
        width: 100%;;
        color: #FFF;
        padding: 14px 20px;
        margin: 8px 0;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }
`

