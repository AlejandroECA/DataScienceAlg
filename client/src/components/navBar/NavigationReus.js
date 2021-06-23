import React from 'react'

import {NavItem} from 'reactstrap'
import {NavigStyled} from './Navig.styles'

export const NavigReus =({link,name})=> {
    return(
        <NavItem>
            <NavigStyled to={`/${link}`}>
                <i className={`fa fa-${link} fa-lg`}></i> {name}
            </NavigStyled>
        </NavItem>
    )
}