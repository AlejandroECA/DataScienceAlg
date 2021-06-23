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
  
`;

export const LogoContainer = styled(Link)`

    height: 100%;
    width: 70px;
    margin: 5px;

`

export const OptionsContainer = styled.div`

    margin-bottom: 10px;
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-size: 1rem;
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

