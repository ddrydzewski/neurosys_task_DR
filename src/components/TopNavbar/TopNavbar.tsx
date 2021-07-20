import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import Contact from "../Contact/Contact";

const TopNavbar = () => {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Navbar.Toggle aria-controls="basic-navbar-nav" style={{marginLeft: "4%"}} />
      <Navbar.Collapse id="basic-navbar-nav" style={{marginLeft: "4%"}}>
        <Nav className="mr-auto">
          <Nav.Link href="#Omnie">O mnie</Nav.Link>
          <Nav.Link href="#">Galeria</Nav.Link>
          <Nav.Link href="#features">Wideo</Nav.Link>
          <Contact />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default TopNavbar;
