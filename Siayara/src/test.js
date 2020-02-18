import React, { Component } from 'react';
// import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
// import { Link } from 'react-router-dom';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Form from 'react-bootstrap/Form';
// import FormControl from 'react-bootstrap/FormControl';
import './Nav.css'


class NavBar extends Component {


    render() {

        return (
            <div>
                <ul className="list">
                    <li><a href="">HOME</a></li>
                    <li><a href="">HOME2</a></li>
                    {/* </ul> */}
                    {/* <ul className="listimg"> */}
                    <li className="abc"><img src="https://upload.wikimedia.org/wikipedia/en/thumb/6/63/IMG_%28business%29.svg/1200px-IMG_%28business%29.svg.png" alt="" /></li>
                    {/* </ul> */}
                    {/* <ul className="list"> */}
                    <li><a href="">HOME</a></li>
                    <li><a href="">HOME2</a></li>
                </ul>
            </div>
        );
    }
}
export default NavBar;

