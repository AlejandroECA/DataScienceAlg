import React, { useState } from 'react';

import './sign-up.styles.scss'

import FormInput from '../form-input/formInput.component'
import CustomButton from '../custom-button/customButton.component'

import { auth, createUserProfileDocument} from '../../../firebase/firebase.utils'

import { connect } from 'react-redux'

import {
signUpStart
} from '../../../redux/user/users.actions'


const SignUp = ({ signUpStart }) => {

    const [userCredentials,setUserCredentials] = useState({
        displayName: '',
        email: '',
        password:'',
        confirmPassword:''
    })

    const { displayName, email, password, confirmPassword} = userCredentials


    const handleSubmit = async event => {
        event.preventDefault()

        if(password !== confirmPassword) {
            alert("password don't match");
            return;
        } 

        signUpStart({ displayName, email , password})

    }
    
    const handleChange = event =>{
        const {name,value} = event.target;

        setUserCredentials({
            ...userCredentials,
            [name]: value
        })
    }



    return(
        <div className='sign-up'>
            <h4>I do not have a acoount</h4>
            <h5>Sign up with your email and password</h5>

            <form className='sign-up-form' onSubmit={handleSubmit}>
                <FormInput 
                type='text'
                name='displayName'
                value={displayName}
                onChange={handleChange}
                label='Display Name'
                required
                />

                <FormInput 
                type='email'
                name='email'
                value={email}
                onChange={handleChange}
                label='Email'
                required
                />

                <FormInput 
                type='password'
                name='password'
                value={password}
                onChange={handleChange}
                label='Password'
                required
                />

                <FormInput 
                type='password'
                name='confirmPassword'
                value={confirmPassword}
                onChange={handleChange}
                label='Confirm Password'
                required
                />

                <CustomButton type='submit'>SIGN UP</CustomButton>
            </form>
        </div>
    ) 
}


const mapDispatchToProps =  dispatch => ({
    signUpStart: userCredentials => dispatch( signUpStart(userCredentials))
})

export default connect(null, mapDispatchToProps)(SignUp)


