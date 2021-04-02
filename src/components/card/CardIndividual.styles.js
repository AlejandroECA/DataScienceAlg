import styled , {css} from "styled-components";
import {Link} from 'react-router-dom'


export const CardContainer = styled.div`

    display: flex;
    flex-direction: column;
    background: linear-gradient(#c0bdbd, #707072);
    border: 1px solid black;
    border-radius: 5px;
    padding:  0px;
    cursor: pointer;
    -moz-osx-font-smoothing: grayscale;
    backface-visibility: hidden;
    transform: translate(0);
    transition:  transform 0 25s ease-out ;
    margin-top  : 20px;
    color:white;
    align-items: center;

    &:hover{
    transform: scale(1.05);
    }


`

export const LinkCardIndividual = styled(Link)`
    &:hover{
        color: black;
        text-decoration: none;
    }   

`