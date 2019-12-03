import React from 'react';
import { Router, Route  } from 'react-router-dom';
import App from './App'; 
import About from './About';
import Contact from './Contact';
import Navbar from './Navbar'

import createBrowserHistory from 'history/createBrowserHistory'

const customHistory = createBrowserHistory()

const CustomRoutes = () => (

    <Router history={customHistory}>
        <Navbar/>
    
        <div>

            <Route exact path='/' component={App} />
            <Route path='/About' component={About} />
            <Route path='/Contact/:id' component={Contact} />
             </div>

    </Router>

)

export default CustomRoutes;
