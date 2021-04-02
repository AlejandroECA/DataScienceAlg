import styled from 'styled-components'

import {NavLink} from 'react-router-dom'


export const NavigStyled = styled(NavLink)`

    display: flex;
    flex-direction: row;
    align-items: center;


    &:hover{
        transform: scale(1.25);
        color: black;
        text-decoration: none;
    }

    &:visited{
        color: black;
        text-decoration: none;
    }

`


