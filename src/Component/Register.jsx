import React, { Component } from 'react';

class Register extends Component {
    state = {  } 
    render() { 
        return (
            <div class="w-96 bg-indigo-50 rounded-3xl py-20 select-none px-4">
                <div class="bg-logo w-full h-32 bg-no-repeat bg-center bg-contain " />
                <div class="bg-white h-20 mt-16  rounded-2xl py-3">
                    <label for="email" class="ml-4">Email 信箱</label>
                    <div class="flex mx-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <input class="w-80 ml-4 mt-1 " type="email" name="email" placeholder="Username@gmail.com" />
                    </div>
                </div>
                <div class="bg-white h-20 mt-8  rounded-2xl py-3">
                    <label for="password" class="ml-4">密碼</label>
                    <div class="flex mx-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                        <input class="w-80 ml-4 mt-1" type="password" name="password" placeholder="············" />
                    </div>
                </div>
                <div class="bg-white h-20 mt-8  rounded-2xl py-3">
                    <label for="password" class="ml-4">密碼</label>
                    <div class="flex mx-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                        <input class="w-80 ml-4 mt-1" type="password" name="password" placeholder="············" />
                    </div>
                </div>
                <button class="h-10 w-full mt-8 bg-indigo-800 text-white rounded-3xl">登入</button>
                <div class=" grid gap-48 grid-cols-2 mt-8"><span class="w-8 cursor-pointer">註冊</span><span class="cursor-pointer">忘記密碼?</span></div>
            </div>
        );
    }
}
 
export default Register;