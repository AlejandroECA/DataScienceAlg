import React from 'react';
import {Container} from 'reactstrap'

const DefaulTitle = ({title}) => {
    return (
        <Container className='container text-center mb-3'  style={{backgroundColor:'white', opacity:'70%'}}>
            <h1 className='ml-auto mr-auto mt-2'>{title}</h1>
        </Container> 
    )
}

export default DefaulTitle