import React, { Component } from "react";
import FormInput from "../form-input/form-input.component";
import "./sign-in.styles.scss";
import CustomButtom from "../custom-button/custom-button.component";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async e => {
    e.preventDefault();
    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.log(error);
    }

    this.setState({ email: "", password: "" });
  };

  handleChange = e => {
    const { value, name } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className='sign-in'>
        <h2>I alread have an account</h2>
        <span>Sign in with your email and password</span>

        <form>
          <FormInput type='email' name='email' label='email' value={this.state.email} handleChange={this.handleChange} required />
          <FormInput type='password' name='password' label='password' value={this.state.password} handleChange={this.handleChange} required />
          <div className='buttons'>
            <CustomButtom type='submit' onClick={this.handleSubmit}>
              SIGN IN
            </CustomButtom>
            <CustomButtom onClick={signInWithGoogle} isGoogleSignIn>
              SIGN IN WITH GOOGLE
            </CustomButtom>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
