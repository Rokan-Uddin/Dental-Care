
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../hooks/useAuth';
import logo from '../../images/Dental.svg';
import './Header.css';
const Header = () => {
    // get user and logout using hooks
    const {user,logOut}= useAuth();
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
        <Container>
        <Navbar.Brand as={Link} to="/home"> <img className="title-logo" src={logo} alt="logo" /> <span className="title-1st">Dental</span> <span className="title-2nd">Care</span> </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
            <Nav.Link as={HashLink} to="/home#services" className="nav-link" >Services</Nav.Link>
            <Nav.Link as={HashLink} to="/home#tips" className="nav-link">Tips</Nav.Link>
            <Nav.Link as={HashLink} to="/doctors" className="nav-link">Doctors</Nav.Link>
            <Nav.Link as={Link} to="/appoinment" className="nav-link">Appoinment</Nav.Link>
            </Nav>
            {/* if user's email available, Logout button displayed otherwise Sign-In button  */}
            <Nav>
            {
                user.email ? 
                <Button onClick={logOut} variant="light"  className="nav-link logout-btn" >Logout <i className="fas fa-sign-out-alt"></i> </Button> :
                <Nav.Link as={Link} to="/login" className="nav-link login-btn">Sign-In <i className="fas fa-sign-in-alt"></i> </Nav.Link>
            }
            </Nav>
            <Nav.Link className="nav-link">{user?.displayName}</Nav.Link>
        </Navbar.Collapse>
        </Container>
        </Navbar>
    );
};

export default Header;