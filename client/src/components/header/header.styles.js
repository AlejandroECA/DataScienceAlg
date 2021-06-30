import styled , { css }from "styled-components";

import {Link} from 'react-router-dom'



const OptionContainerStles = css`
    padding: 10px 15px;
    cursor: pointer;
`

export const HeaderContainer = styled.div`

    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    white-space: nowrap;

    @media screen and (max-width: 800px){
        height: 50px;
        padding: 10px;
        margin-bottom: 20px;
        margin-left:70px
    }

    @media screen and (max-width: 532px){
        height: 500px;
    }


  
`;

export const LogoContainer = styled(Link)`

    height: 100%;
    width: 70px;
    margin: 5px;

    @media screen and (max-width: 800px){
        display: none;
    }

    @media screen and (max-width: 532px){
        display: none;
    }

`

export const OptionsContainer = styled.div`

    margin-bottom: 10px;
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-size: 1rem;

    @media screen and (max-width: 800px){
        width: 80%;
        padding: 0px;
        margin :0px;
    }

    @media screen and (max-width: 532px){
        display:grid;
        grid-template-columns: 1fr;
        font-size:2rem;

    }

    /* @media screen and (max-width: 500px){
        width: 50%;
        flex: 1 1 auto;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        /* border: 1px solid black; */
        /* overflow: hidden; */
        /* font-size:2rem */


    /* } */

`

export const ImgStyled = styled.img`

    height: 80px;
    padding-bottom: 10px;


`



export const OptionLink = styled(Link)`
    ${OptionContainerStles}



`

export const OptionDiv = styled.div`
    ${OptionContainerStles}
    

`

// i can use this one and add a property "as= 'here the element o component '"

// export const OptionLink = styled(Link)`
//     padding: 10px 15px;
//     cursor: pointer;
// `

