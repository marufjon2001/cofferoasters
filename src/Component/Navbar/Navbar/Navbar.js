import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import img from "../../Images/Navbar/Navbar.svg"

const NavbarCof = () => {
  return (
    <div>
      <Navbar style={{display: 'flex',justifyContent: 'center'}} bg="#F2F2F2;" expand="lg">
        <br /><br /><br />
      <div style={{width: '90%',display: 'flex',alignItems: 'center'}}>
        <Navbar.Brand href="#home"><img src={img} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse  id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" style={{fontFamily: 'Barlow',fontWeight: '700',fontSize: '12px',lineHeight: '15px',letterSpacing: '0.92px',color: '#83888F'}}>HOME</Nav.Link>
            <Nav.Link href="#link" style={{fontFamily: 'Barlow',fontWeight: '700',fontSize: '12px',lineHeight: '15px',letterSpacing: '0.92px',color: '#83888F'}}>ABOUT US</Nav.Link>
            <Nav.Link href="#link" style={{fontFamily: 'Barlow',fontWeight: '700',fontSize: '12px',lineHeight: '15px',letterSpacing: '0.92px',color: '#83888F'}}>Create your plan</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
    </div>
  );
}

export default NavbarCof;
