import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Forget extends Component {
    state = {
        email: "",
        bt_forget: "disabled",
        code: null
    }

    getEmail = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        const emailRule = /^\w+((-\w+)|(\.\w+))*@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/
        this.setState({ [name]: value }, () => {
            //console.log('state: ', this.state)
            if (this.state.email.search(emailRule) !== -1) {
                this.setState({ bt_forget: "" }, () => { })
            } else {
                this.setState({ bt_forget: "disabled" }, () => { })
            }
        });
    }

    forget = (event) => {
        const data = {
            email: this.state.email,
        }
        const requestOptions = {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json; charset=UTF-8',
            }),
            body: JSON.stringify(data)
        };
        fetch('https://sign-register.herokuapp.com/check_email.php', requestOptions)
            .then(response => response.json())
            .then((responseJson) => {
                console.log(responseJson.code);
                this.setState({ code: responseJson.code }, () => { })
                /*
                localStorage.setItem("message", responseJson.message);
                localStorage.setItem("code", responseJson.code);*/
            })
        console.log(this.state.code);
    }

    render() {
        return (
            <div className="w-96 bg-indigo-50 rounded-3xl py-20 select-none px-4">
                <div className="bg-logo1 w-full h-32 bg-no-repeat bg-center bg-contain " />
                <div className="bg-white h-20 mt-16  rounded-2xl py-3">
                    <label className="ml-4">請輸入註冊的Email</label>
                    <div className="flex mx-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <input className="w-80 ml-4 mt-1 pl-1" type="email" name="email" placeholder="Username@gmail.com" onChange={this.getEmail} />
                    </div>
                </div>
                <button className="h-10 w-full mt-8 bg-indigo-800 text-white rounded-3xl hover:bg-sky-700 active:bg-indigo-800 disabled:bg-black disabled:cursor-default" disabled={this.state.bt_forget} onClick={this.forget} >發送救援信件</button>
                <div className=" grid gap-72 grid-cols-2 mt-8 "><span className="w-8 cursor-pointer"><Link to="/">登入</Link></span><span className="cursor-pointer"><Link to="/Register">註冊</Link></span></div>
            </div>
        );
    }
}

export default Forget;