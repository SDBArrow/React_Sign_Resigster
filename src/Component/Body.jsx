import React, { Component } from 'react';
import Sign from './Sign';
import Image from './Image';
class Body extends Component {
    state = {}
    render() {
        return (
            <product class="flex flex-col gap-24 sm:flex-row sm:w-full sm:gap-24">
                <Image/>
                <Sign/>
            </product>
        );
    }
}

export default Body;



