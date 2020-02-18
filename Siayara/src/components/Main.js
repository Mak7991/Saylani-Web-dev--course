import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import '../Style/Header.css';
import { logoutUser } from '../../store/thunk/auth.thunk';

const mapStateToProps = ({ auth }) => ({
    user: auth.user
});



class Header extends Component {

    /**
     * @param { Event } e
     */
    logout = (e) => {
        e.preventDefault();

        const data = window.localStorage.getItem('AUTH');
        const user = JSON.parse(data || '{}');


        const { logoutUser } = this.props;
        logoutUser({ type: user.type });
    }


    render() {
        const { active, user } = this.props;

        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light header">
                <div className="container-fluid margin">
                    <Link to="/" className="navbar-brand d-lg-none" >
                        <img src={require('../assets/images/logo.jpeg')} alt="Siayara" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <NavItem className={`${active === 'pilot' ? 'active' : ''}`} title="Pilot" path="/pilot" />
                            <NavItem className={`${active === 'passenger' ? 'active' : ''}`} title="Passenger" path="/passenger" />
                            <li className="nav-item logo">
                                <Link to="/">
                                    <img src={require('../assets/images/logo.jpeg')} alt="Siayara" />
                                </Link>
                            </li>
                            <NavItem
                                className={`${active === 'login' ? 'active' : ''} capitalize`}
                                title={(user.first_name) ? `${user.first_name} ${user.last_name}` : 'Login'}
                                path={(user.first_name) ? '/dashboard' : '/login'} />
                            <NavItem
                                onClick={(user.first_name) ? this.logout : () => { }}
                                className={`${active === 'signup' ? 'active' : ''} capitalize`}
                                title={(user.first_name) ? `Logout` : 'Sign Up'}
                                path="/signup" />
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}


/**
 * 
 * @param {String} title text of the tab
 * @param {String} path path to redirect
 */
const NavItem = ({ title, path = '/', className, onClick = () => { } }) => (
    <li className="nav-item" >
        <Link onClick={onClick} className={className} to={path}>{title}</Link>
    </li>
)

export default connect(mapStateToProps, { logoutUser })(user);
