import React from 'react'
import './Navig.style.css'

import {Nav,NavbarToggler,Collapse,NavItem, Navbar, NavbarBrand, Jumbotron, Button, Modal, ModalHeader,ModalBody, Form, FormGroup,Label} from 'reactstrap'
import {NavLink} from 'react-router-dom'


export const NavigReus =({link,name})=> {
    return(
        <NavItem>
            <NavLink className='nav-link' to={`/${link}`}>
                <i className={`fa fa-${link} fa-lg`}></i> {name}
            </NavLink>
        </NavItem>
    )
}