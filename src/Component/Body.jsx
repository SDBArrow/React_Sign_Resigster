import React, { Component } from 'react';

import backgrounds from '../Image/background.png';

class Body extends Component {
    state = {}
    render() {
        return (
            <div class="screen-1">
                <img class="image" src={backgrounds} alt="Background" />
                <div class="email">
                    <label for="email">Email 信箱</label>
                    <div class="sec-2">
                        <ion-icon name="mail-outline"></ion-icon>
                        <input type="email" name="email" placeholder="Username@gmail.com" />
                    </div>
                </div>
                <div class="password">
                    <label for="password">密碼</label>
                    <div class="sec-2">
                        <ion-icon name="lock-closed-outline"></ion-icon>
                        <input class="pas" type="password" name="password" placeholder="············" />
                        <ion-icon class="show-hide" name="eye-outline"></ion-icon>
                    </div>
                </div>
                <button class="login">登入 </button>
                <div class="footer"><span>註冊</span><span>忘記密碼?</span></div>
            </div>
        );
    }
}

export default Body;



