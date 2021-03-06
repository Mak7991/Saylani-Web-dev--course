import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

import Signin from './components/Signin/Signin';
import Signup from './components/Signup/Signup';
import { Header } from './components/Header';

const Router = () => {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <Route exact path="/" component={Signin} />
                <Route path="/signup" component={Signup} />
                <Redirect to='/' />
            </div>
        </BrowserRouter>
    );
}
export { Router };