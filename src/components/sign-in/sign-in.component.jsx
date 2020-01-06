import React from 'react';
import FormInput from '../form-input/form-input.component';
import { SignInContainer,SignInTitle, ButtonsContainer} from './sign-in.styles';
import CustomButton from '../custom-button/custom-button.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.util';

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password:''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const {email, password} = this.state;
        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email:'',password:''});
        } catch(err) {
            console.log(err);
        }
    }

    handleChange = event => {
        const {value,name} = event.target;
        this.setState({[name]:value });
    }

    render() {
        return (
        <SignInContainer>
            <SignInTitle>I already have an account</SignInTitle>
            <span>Sign in with your email and password</span>
            <form onSubmit={ this.handleSubmit}>
                <FormInput name='email' type='email' value={this.state.email} 
                handleChange={this.handleChange} label='email' required />
                
                <FormInput name='password' type='password' value={this.state.password} 
                handleChange={this.handleChange} label='password' required />                    
                <ButtonsContainer>
                    <CustomButton type='submit' >Sign In</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In With Google</CustomButton>
                </ButtonsContainer>
                
            </form>
        </SignInContainer>
        )
    }
}

export default SignIn;