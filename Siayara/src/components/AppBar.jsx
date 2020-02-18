import React, { Component } from 'react';
// import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
// import { Link } from 'react-router-dom';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Form from 'react-bootstrap/Form';
// import FormControl from 'react-bootstrap/FormControl';
import '../Style/AppBar.css';


class AppBar extends Component{


render(){
    
    return (
        <div className="Container">
        {/* <Navbar bg="light" expand="lg" className="navbar">
            <Navbar.Brand href="#home" className="nav-child">
                <img src={require('../assets/images/logo.jpeg')} alt="Siayara" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="Signup">Pilot</Nav.Link>
                    <Nav.Link href="Signin">Passenger</Nav.Link>

                    <Nav.Link href="Signin">Sign In</Nav.Link>
                    <Nav.Link href="Signin">Sign Up</Nav.Link>
                 
                </Nav>
                
            </Navbar.Collapse>
        </Navbar> */}

        <nav className="nav1">
            <ul>
                <li className="nav-child2"><a href="#singup">Pilot</a></li>
                <li className="nav-logo">
                    <a href="#home">
                        <img src={require('../assets/images/logo.jpeg')} alt="Siayara" />
                    </a>
                </li>
                

            <Navbar.Brand href="#home" className="nav-child">
               
            </Navbar.Brand>

                <li className="nav-child2"><a href="/Signin">Signin</a></li>
                <li className="nav-child2"><a href="/">Signup</a></li>
            </ul>

        </nav>

        </div>
    );
    }
}
export default AppBar;

