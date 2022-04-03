import styled from 'styled-components'

export const Head = styled.div`
    overflow: hidden;
    background-color: #F1F1F1;
    display: flex;
    justify-content: flex-start;

    p {
        float: left;
        color: black;
        text-align: center;
        padding: 10px;
        text-decoration: none;
        font-size: 18px;
        line-height: 15px;
        border-radius: 4px;
    }

    p:hover {
        background-color: #DDD;
        color: #5D6770;
    }

    p.active {
        background-color: dodgerblue;
        color: white;
    }

    @media screen and(max-width:500px) {
        .header p {
            float: none;
            display: block;
            text-align: left;
        }
    
        .header-right{
            float: none;
        }
    }
`