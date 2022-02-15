import React, { Component } from 'react';


class Body extends Component {
    state = {}
    render() {
        return (
            <div class="w-96 bg-indigo-50 rounded-3xl py-10">

                <div class="bg-logo w-96 h-32 bg-no-repeat bg-center bg-contain bg-origin-content"/>
                <div class="bg-white h-20 mt-16 mr-4 ml-4 rounded-2xl ">
                    <div class="w-96 h-4"/>
                    <label for="email" class="ml-4">Email 信箱</label>
                    <div class="sec-2">
                        <ion-icon name="mail-outline"></ion-icon>
                        <input class = "ml-4 mt-1" type="email" name="email" placeholder="Username@gmail.com" />
                    </div>
                </div>
                <div class="bg-white h-20 mt-8 mr-4 ml-4 rounded-3xl ">
                    <div class="w-96 h-4"/>
                    <label for="password" class="ml-4">密碼</label>
                    <div class="sec-2">
                        <ion-icon name="lock-closed-outline"></ion-icon>
                        <input class="ml-4 mt-1" type="password" name="password" placeholder="············" />
                        <ion-icon class="show-hide" name="eye-outline"></ion-icon>
                    </div>
                </div>
                <button class="mt-8 ">登入 </button>
                <div class="ml-4 grid gap-48 grid-cols-2"><span>註冊</span><span>忘記密碼?</span></div>
                <div class="w-96 h-16"/>
            </div>
        );
    }
}

export default Body;



