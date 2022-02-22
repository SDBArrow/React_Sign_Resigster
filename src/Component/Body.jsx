import React, { Component } from 'react';
import Sign from './Sign';
import Register from './Register';
import Error from './Error';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


class Body extends Component {
    state = {}
    render() {
        return (
            <Router>
                <Routes>
                    <Route path="/" element={<Sign />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            </Router>
        );
    }
}

export default Body;



