import React from 'react';
import './signInAndOut.styles.scss'
import SignIn from './signIn/signIn.component'
import SignUp from './sign-up/sign-up.component'
import {Container,Row,Col} from 'reactstrap'

const SignInAndOut = () => (
    <Container className='sign-in-and-sign-up'>
        <Row>
            <Col className='mb-4' xs="12" lg="6"><SignIn /></Col>
            <Col xs="12" lg="6"><SignUp /></Col>
        </Row>
    </Container>
)

export default SignInAndOut

