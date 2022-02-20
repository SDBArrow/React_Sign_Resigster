import React, { Component } from 'react';
import logo2 from '../Image/logo2.png';

class Image extends Component {
    state = {  } 
    render() { 
        return (
            <div class ="ml-0 sm:ml-24">
                <p class="text-center text-3xl text-blue-400 sm:mt-24">AGV WebAPP</p>
                <img class = "rounded-lg sm:h-72 mt-10 sm:mt-24 w-96" src={logo2} alt="Image"/>
            </div>

        );
    }
}
 
export default Image;