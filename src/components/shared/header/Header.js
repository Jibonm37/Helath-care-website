import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Nav, Navbar,Button } from 'react-bootstrap';
import logo from '../../../img/logo.png'
import { HashLink } from 'react-router-hash-link';
import './header.css'
import useFirebase from '../../../hooks/useFirebase';

const Header = () => {
  const {user ,logOut} = useFirebase();

    return (
        <Navbar  collapseOnSelect expand="lg" sticky='top'  className='header-div py-1' >
        <Container>
        <Navbar.Brand href="#home"><img className='header-img' src={logo} alt="" /></Navbar.Brand>

            <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
        <Nav.Link as={HashLink} to="/home" >Home</Nav.Link>
          <Nav.Link as={HashLink} to="/services" >Services</Nav.Link>
          <Nav.Link as={HashLink} to="/coaches">Coaches</Nav.Link>
          
        { user.email?
         <Button  variant="dark" onClick={logOut} className='bg-transparent'> Log Out</Button> :
            <Nav.Link as={HashLink} to="/login">Login</Nav.Link>
            }
        <Navbar.Text className='text-light'>
            <span className='text-danger me-2'>Signed in as:</span>{user.displayName} <a href="#login"></a>
        </Navbar.Text>
        </Navbar.Collapse>

        
        </Container>
      </Navbar>
    );
};

export default Header;