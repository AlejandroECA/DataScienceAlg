import React, {useState}from 'react'
import { connect } from 'react-redux'

import FormInput from '../form-input/formInput.component'
import CustomButton from '../custom-button/customButton.component'

import './sigIn.styles.scss'

import { googleSignInStart , emailSignInStart} from '../../../redux/user/users.actions'



const SignIn = ({emailSignInStart, googleSignInStart}) => {

    const [userCredentials, setCredentials] = useState({
        email:'',
        password:''
    })

    const {email, password} = userCredentials



    const handleSubmit = async e => {
        
        e.preventDefault();

        emailSignInStart(email,password)
  
    }

    const handleChange = e => {

        const { value, name } = e.target

        setCredentials({
            ...userCredentials, 
            [name]: value
        })
    }



    return(

        <div className='sign-in'>

            <h4 className='title'>I have an account</h4>
            <h5 className='sub-title'>Sign in with your email and password</h5>

            <form onSubmit={handleSubmit}>

                <FormInput 
                name='email' 
                type='email' 
                handleChange={handleChange} value={email} required  
                label='Email'
                />


                <FormInput 
                name='password' 
                type='password' 
                handleChange={handleChange} value={password} required 
                label='Password'
                />

                <div className='buttons'>
                <CustomButton type='submit'>Sign In</CustomButton>

                <CustomButton onClick={googleSignInStart} 
                type="button" isGoogleSignIn >Sign In with Google</CustomButton>
                </div>
            </form>

        </div>

            
    )
}



const mapDispatchToProps =  (dispatch) => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
})

export default connect(null,mapDispatchToProps)(SignIn);