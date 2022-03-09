import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Register extends Component {
    state = {
        firstname: "",
        lastname: "",
        email: '',
        password: "",
        passwordcheck: "",
        bt_register: "disabled",
        input_email: false,
        input_password: false,
        input_name: false,
    }

    getName = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({ [name]: value }, () =>{
            if(this.state.firstname.length > 0 && this.state.lastname.length > 0){
                this.setState({ input_name: true });
                if (this.state.input_password === true && this.state.input_email === true) {
                    this.setState({ bt_register: "" }, () => { })
                }
            }else{
                this.setState({ input_name: false})
                this.setState({ bt_register: "disabled" }, () => { })
            }
        })
    }
    //判斷信箱
    getEmail = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        const emailRule = /^\w+((-\w+)|(\.\w+))*@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/
        this.setState({ [name]: value }, () => {
            //console.log('state: ', this.state)
            if (this.state.email.search(emailRule) !== -1) {
                this.setState({ input_email: true });
                if (this.state.input_password === true && this.state.input_name === true ) {
                    this.setState({ bt_register: "" }, () => { })
                }
            } else {
                this.setState({input_email: false})
                this.setState({ bt_register: "disabled" }, () => { })
            }
        });
    }
    //判斷密碼
    getPassword = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        const passwordRule = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/
        //state不會馬上更新，需這樣改
        this.setState({ [name]: value }, () => {
            //console.log('state: ', this.state)
            if (this.state.password.search(passwordRule) !== -1 && (this.state.password === this.state.passwordcheck)) {
                this.setState({ input_password: true})
                if (this.state.input_email === true && this.state.input_name === true ) {
                    this.setState({ bt_register: "" }, () => { })
                }
            } else {
                this.setState({ input_password: false})
                this.setState({ bt_register: "disabled" }, () => { })
            }
        });
    }

    registeraccount = (event) => {
        /*
        const data = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            email: this.state.email,
            password: this.state.password,
        }
        const requestOptions = {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json; charset=UTF-8',
            }),
            body: JSON.stringify(data)
        };
        fetch('https://sign-register.herokuapp.com/register.php', requestOptions)
            .then(response => response.json())
            .then((responseJson) => {
                localStorage.setItem("message", responseJson.message);
            })*/
    }

    render() {
        return (
            <div className="w-96 bg-indigo-50 rounded-3xl py-20 select-none px-4">
                <div className="bg-logo1 w-full h-32 bg-no-repeat bg-center bg-contain " />
                <div className="h-20 mt-16 gap-8 flex ">
                    <div className="bg-white rounded-2xl w-40 py-3 ">
                        <label className="ml-4">Fist Name</label>
                        <input className="h-7 w-32 mt-1 ml-4 pl-1" type="firstname" name="firstname" placeholder="Michael" onChange={this.getName} />
                    </div>
                    <div className="bg-white rounded-2xl w-40 py-3 ">
                        <label className="ml-4">Last name</label>
                        <input className="h-7 w-32 mt-1 ml-4 pl-1" type="lastname" name="lastname" placeholder="Ke" onChange={this.getName} />
                    </div>
                </div>
                <div className="bg-white h-20 mt-8  rounded-2xl py-3">
                    <label className="ml-4">Email 信箱</label>
                    <div className="flex mx-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <input className="w-80 ml-4 mt-1 pl-1" type="email" name="email" placeholder="Username@gmail.com" onChange={this.getEmail} />
                    </div>
                </div>
                <div className="bg-white h-20 mt-8  rounded-2xl py-3">
                    <label className="ml-4">密碼 (包括英文大小寫，最多15碼)</label>
                    <div className="flex mx-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                        <input className="w-80 ml-4 mt-1 pl-1" type="password" name="password" placeholder="············" onChange={this.getPassword} />
                    </div>
                </div>
                <div className="bg-white h-20 mt-8  rounded-2xl py-3">
                    <label className="ml-4">再次輸入密碼</label>
                    <div className="flex mx-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                        <input className="w-80 ml-4 mt-1 pl-1" type="password" name="passwordcheck" placeholder="············" onChange={this.getPassword} />
                    </div>
                </div>
                <button className="h-10 w-full mt-8 bg-indigo-800 text-white rounded-3xl cursor-pointer hover:bg-sky-700 active:bg-indigo-800 disabled:bg-black disabled:cursor-default" disabled={this.state.bt_register} onClick={this.registeraccount} >註冊</button>
                <div className=" grid gap-48 grid-cols-2 mt-8"><span className="w-8 cursor-pointer"><Link to="/">登入</Link></span><span className="cursor-pointer"><Link to="/Forget">忘記密碼?</Link></span></div>
            </div>
        );
    }
}

export default Register;