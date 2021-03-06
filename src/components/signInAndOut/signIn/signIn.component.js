import React from 'react'

import FormInput from '../form-input/formInput.component'
import CustomButton from '../custom-button/customButton.component'

import './sigIn.styles.scss'

import {signInWithGoogle, auth} from '../../../firebase/firebase.utils'




class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state={
            email:'',
            password:''
        }
    }

    handleSubmit = async e => {
        e.preventDefault();

        const {email, password} = this.state

        try{
            await auth.signInWithEmailAndPassword(email,password);
            this.setState({
                email:'',
                password:''
            })

        }catch(error){
            console.log(error);
        }

  
    }

    handleChange = e => {
        const { value, name } = e.target

        this.setState({
            [name]: value
        })
    }

    render(){
        return(
            <div className='sign-in'>

                <h4 className='title'>I have an account</h4>
                <h5 className='sub-title'>Sign in with your email and password</h5>

                <form onSubmit={this.handleSubmit}>

                    <FormInput 
                    name='email' 
                    type='email' 
                    handleChange={this.handleChange} value={this.state.email} required  
                    label='Email'
                    />


                    <FormInput 
                    name='password' 
                    type='password' 
                    handleChange={this.handleChange} value={this.state.password} required 
                    label='Password'
                    />

                    <div className='buttons'>
                    <CustomButton type='submit'>Sign In</CustomButton>

                    <CustomButton onClick={signInWithGoogle} 
                    type="button" isGoogleSignIn >Sign In with Google</CustomButton>
                    </div>
                </form>

            </div>

            
        )
    }
}


export default SignIn