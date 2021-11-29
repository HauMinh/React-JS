import React, { Component } from 'react';
// import { Link, withRouter } from 'react-router-dom';
import FormErrors from './FormErrors';
import axios from 'axios';
class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: '',
            email: '',
            password: '',
            address: '',
            phone: '',
            avatar: '',
            file: '',
            level: '0',
            formErrors: {},
            msg: ''
        }
        this.handleInput = this.handleInput.bind(this)
        this.handleSubmitRegister = this.handleSubmitRegister.bind(this)
        this.handleUserInputFile = this.handleUserInputFile.bind(this)
    }
     handleUserInputFile(e) {
         const file = e.target.files;
         //  gọi tới files
         let reader = new FileReader();
         reader.onload = (e) => {
             this.setState({
                 avatar: e.target.result,
                 file: file[0]
             });
         }
         reader.readAsDataURL(file[0])
     }
    handleInput(e) {
        const nameInput = e.target.name;
        const value = e.target.value;
        this.setState({
            [nameInput]: value
        })
    }
    handleSubmitRegister(e) {
        e.preventDefault();
        let { file } = this.state
        // console.log(file)
        let size = file.size
        let type = file.type
        let flag = true;
        let submitErrors = {};
        let { userName, email, password, address, phone, avatar } = this.state

        if (email=="") {
            flag = false
            submitErrors.email = "vui lòng không để trống email"
        } else {
            submitErrors.email = ''
        }
        if (userName=="") {
            flag = false
            submitErrors.userName = "vui lòng không để trống username "
        } else {
            submitErrors.userName = ''
        }
         if (password=="") {
             flag = false
             submitErrors.password = "vui lòng không để trống password"
         } else {
             submitErrors.password = ''
         }
         if (address=="") {
             flag = false
             submitErrors.address = "vui lòng không để trống address"
         } else {
             submitErrors.address = ''
         }
       
         if (phone=="") {
             flag = false
             submitErrors.phone = "vui lòng không để trống phone"
         } else {
             submitErrors.phone = ''
         }
         if (file && (size > (1024 * 1024))) {
             flag = false
             submitErrors.file = "another size!"
         } else {
             submitErrors.file = ""
        }
         if (file && !type.match(/.(jpg|jpeg|png|gif)$/i)) {
             flag = false
             submitErrors.file = "not an image!"
         }else {
             submitErrors.file = ''
         }
         if (!avatar) {
             flag = false
             submitErrors.avatar = 'pick your avatar'
         } else {
             submitErrors.avatar = ''
         }
        if (!flag) {
            this.setState({
                formErrors: submitErrors
            })
        } else {
         
            //   kiểm tra  các lỗi dc thao tác và được đưa vào Obj formError phía trên
             let user = {
                 name: userName,
                 avatar: this.state.avatar,
                 password: this.state.password,
                 email: this.state.email,
                 address: this.state.address,
                 phone: this.state.phone,
                 level: 0
             }
             axios.post('http://localhost/laravel/public/api/register', user)
                 .then(res => {
                     console.log(res);
                     //  khởi tạo người dùng ở register này thì res.data trả về là response và thông báo errors rằng có lỗi hay ko, response này trả về các giá trị mà người dùng đã khởi tạo
                     if (res.data.errors) {
                         this.setState({
                             formErrors: res.data.errors
                         })
                     } else {
                        this.setState({
                             msg: "register success! Please login"
                         })
                       
                     }
                 })
                 .catch(error => {
                     console.log(error)
                 })
               
        }
    }
    render() {
        return (
            <div className="col-sm-9">
                <div className="signup-form">
                    <h2> Register!</h2>
                    <p>{this.state.msg}</p>
                    <FormErrors formErrors={this.state.formErrors} enctype="multipart/form-data" />
                    <form action="" onSubmit={this.handleSubmitRegister} enctype="multipart/form-data">
                        <input type="text" placeholder="Name" name="userName" value = {this.state.value} onChange={this.handleInput} />
                        <input type="email" placeholder="Email Address" name="email" value = {this.state.value} onChange={this.handleInput} />
                        <input type="password" placeholder="Password" name="password" value = {this.state.value} onChange={this.handleInput} />
                        <input type="text" placeholder="Address" name="address" value = {this.state.value} onChange={this.handleInput} />
                       
                        <input type="number" placeholder="Phone" name="phone" value = {this.state.value} onChange={this.handleInput} />
                        <input type="file" name="avatar" value = {this.state.value} onChange={this.handleUserInputFile} />
                        {/* ở đây chỉ cần onChange như trên, ko cần gọi onChange Input như các input trên */}
                        <button type="submit" className="btn btn-default" >Signup</button>
                    </form>
                </div>
            </div>
        )
    }
}
export default Register;


