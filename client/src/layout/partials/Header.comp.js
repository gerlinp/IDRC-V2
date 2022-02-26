import React from 'react';
import {Navbar, Nav,} from 'react-bootstrap';
// import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';

export  const Header = () => {
  
  return (
    <Navbar
        // collapseOnSelect
        // bg="info"
        variant="dark"
        expand="md"
        id="nav"
    >
    <Navbar.Brand className="logo">
        IDRC
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
    <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">

        <Nav.Link as={Link} to="/exam-list">Exams</Nav.Link>


            <Nav.Link as={Link} to="/admin-list">Admin</Nav.Link>
        </Nav>
    </Navbar.Collapse>
        
    </Navbar>
  )
}

export default Header