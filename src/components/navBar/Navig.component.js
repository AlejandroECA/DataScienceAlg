import React from 'react'
import './Navig.style.css'

import {Nav,NavbarToggler,Collapse, Navbar, NavbarBrand, Col, Row, Container} from 'reactstrap'

import{NavigReus} from './NavigationReus'



class Navig extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            isNavOpen: false
        }
    }

    openOrClose = () => {
        this.setState((prevState,prevProps) => {
            return {isNavOpen: !prevState.isNavOpen}
        },)
    }
    

 
    render(){
    return(
        <Container >
            <Row >
                <Navbar light expand='md'>
                    <Col xs='6'>
                        <NavbarBrand href="/home">
                            <img src='https://media.giphy.com/media/JmPabUqU22FAbQYkzN/giphy.gif' alt='robotlogo' width='25%' height='25%' />
                        </NavbarBrand>
                    </Col>

                    <Col xs='6' className="text-right">

                        <NavbarToggler onClick={this.openOrClose} />
                                                
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavigReus link={'home'} name={'Home'}/>
                                <NavigReus link={'info'} name={'About Us'}/>
                            </Nav>
                        </Collapse>
                    </Col>
                </Navbar> 
            </Row>
        </Container>
              
    )
    }
}

export default Navig