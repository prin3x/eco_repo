import React, { Component } from "react";

import FormInput from "../form-input/form-input.component";
import CustomButtom from "../custom-button/custom-button.component";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import "./sign-up.styles.scss";

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = async e => {
    e.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("passwords do not match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);

      await createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: "",
        email: "",
        password: "",
        comfirmPassword: "",
      });
    } catch (err) {
      console.log(err);
    }
  };

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({ [name]: value }, () => console.log(this.state));
  };
  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className='sign-up'>
        <h2 className='title'> I do not have am account</h2>
        <span>Sign up with your email and password</span>
        <form className='sign-up-form' onSubmit={this.handleSubmit}>
          <FormInput type='text' name='displayName' value={displayName} handleChange={this.handleChange} label='Display Name' required />
          <FormInput type='email' name='email' value={email} handleChange={this.handleChange} label='Display Email' required />
          <FormInput type='password' name='password' value={password} handleChange={this.handleChange} label='Display Password' required />
          <FormInput type='password' name='confirmPassword' value={confirmPassword} handleChange={this.handleChange} label='Confirm Password' required />
          <CustomButtom type='submit'> SIGN UP</CustomButtom>
        </form>
      </div>
    );
  }
}

export default SignUp;
