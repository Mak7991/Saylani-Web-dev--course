import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Signin from './Container/Signin';
import Signup from './Container/Signup';
import Dashboard from './components/Dashboard';
// import { Header } from './Container/Header';
import AppBar from './components/AppBar';



const Router = () => {
    return (
        <BrowserRouter>
            <div>
                <AppBar/>
                <Route exact path="/signin" component={Signin} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/" component={Dashboard} />
            </div>
        </BrowserRouter>
    );
}
export { Router };




