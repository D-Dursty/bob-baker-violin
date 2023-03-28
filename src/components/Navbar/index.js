import React from "react";
import './style.css';

import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';
import {Navbar, Nav} from 'react-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
    return (
      <Navbar bg="light" expand="lg" className="navBar">
        <Container>
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="navContainer">
          <span>
          <ul className="navTabs">
        
            <li className="navBtn" id='homeLink'>
              
              <LinkContainer to="/" className="link">
               <Nav.Link className="link"><span>ABOUT</span> </Nav.Link> 
              </LinkContainer>
            </li>
            <li className="navBtn" id='calLink'>
              <LinkContainer to="/calendar" className="link">
               <Nav.Link>CALENDAR</Nav.Link> 
              </LinkContainer>
            </li> 
            <li className="navBtn" id='musicLink'>
              <LinkContainer to="/music" className="link">
               <Nav.Link>MUSIC</Nav.Link> 
              </LinkContainer>
            </li>
            <li className="navBtn" id='contactLink'>
              <LinkContainer to="/message" className="link">
               <Nav.Link>CONTACT</Nav.Link> 
              </LinkContainer>
            </li>
          
          </ul>
          </span>
        </Nav>
        
        </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
  
  export default NavBar;
  