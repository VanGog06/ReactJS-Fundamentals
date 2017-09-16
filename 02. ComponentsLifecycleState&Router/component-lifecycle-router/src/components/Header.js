import React from 'react';
import { Navbar, NavItem, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => (
  <Navbar inverse>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/">Books&Authors 2017</Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavItem>
          <Link to='/'>Home</Link>
        </NavItem>
        <NavItem>
          <Link to='/books/all'>Books</Link>
        </NavItem>
        <NavItem>
          <Link to='/authors/all'>Authors</Link>
        </NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Header;