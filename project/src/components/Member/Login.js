import React, { Component} from 'react';
import FormErrors from './FormErrors';
import axios from 'axios';
class Login extends Component {
  constructor(props) {
      super(props);
      this.state = {
        userName: '',
        email: '',
        password: '',
        level: '0',
        formErrors: {},
        msg: ''
      }
        this.handleInput = this.handleInput.bind(this) 
        this.handleLogin = this.handleLogin.bind(this)
  }
    handleInput(e){
        const nameInput = e.target.name;
        const value = e.target.value;
        this.setState({
            [nameInput]: value
        })
    }
    
    handleLogin(e){
        e.preventDefault();
        let flag = true;
        let submitErrors = {};
        let { userName, email, password} = this.state

        if (userName=="") {
            flag = false
            submitErrors.userName = 'vui lòng không để trống username'
        } else {
            submitErrors.userName = ''
        }

        if(email==""){
            flag = false
            submitErrors.email ='vui lòng không để tróng email'
        }else{
            submitErrors.email =''
        }
        if(password==""){
            flag = false
        }else{
            submitErrors.password ='vui lòng không để trống password'
        }





    }
    render(){
        return (
            <div className="col-sm-9"> 
                <div className="login-form">
                    <h2><b> Login </b></h2>
                    <FormErrors formErrors={this.state.formErrors} enctype="multipart/form-data" />
                    <form onSubmit={this.handleLogin }enctype="multipart/form-data" >
                    <input type="text" placeholder="Name" name="userName" value = {this.state.value} onChange={this.handleInput}/>
                        <input type="email" placeholder="Email Address" name="email" value = {this.state.value} onChange={this.handleInput}/>
                        <input type="password" placeholder="Password" name="password" value = {this.state.value} onChange={this.handleInput}/>
                        <span>
                        <input type="checkbox" className="checkbox" /> 
                        Keep me signed in
                        </span>
                        <button type="submit" className="btn btn-default">Login</button>
                    </form>
                </div>
            </div>
        )
    }
}
export default Login