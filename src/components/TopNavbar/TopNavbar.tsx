import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import Contact from "../Contact/Contact";
import { LinkStyled } from "./style";

const TopNavbar = () => {
  return (
      <Navbar
        className="fixed-top"
        fixed="top"
        bg="dark"
        expand="lg"
        variant="dark"
        sticky="top"
      >
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          style={{ marginLeft: "4%" }}
        />
        <Navbar.Collapse id="basic-navbar-nav" style={{ marginLeft: "4%" }}>
          <Nav className="mr-auto">
            <LinkStyled to="about" spy={true} smooth={true} offset={-50}>
              O mnie
            </LinkStyled>
            <LinkStyled to="gallery" spy={true} smooth={true} offset={-50}>
              Galeria
            </LinkStyled>
            <LinkStyled to="videoComp" spy={true} smooth={true} offset={-50}>
              Wideo
            </LinkStyled>
            <Contact />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
  );
};

export default TopNavbar;
