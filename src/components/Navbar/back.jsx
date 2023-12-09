import React from "react";
import { useContext } from "react";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Loading from "../Loading/Loading";
import { CartContext } from "../../context/CartContext";




const NavBar = () =>{
  return (
<>
    <Navbar fixed="top" expand="lg" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">SKATE HOUSE</Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
            <Nav.Link as={Link} to="aboutus">Nosotros</Nav.Link>
            <Nav.Link as={Link} to="contacto">Contacto</Nav.Link>

            <NavDropdown title="T-Shirts" id="collapsible-nav-dropdown">
              <NavDropdown.Item as={Link} to="/category/Skater Tees">Skater Tees</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/category/Skater Shirts">Skater Shirts</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/category/Skater LS Shirts">Skater Long S Shirts</NavDropdown.Item>
            </NavDropdown>
          </Nav>
		      <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <CartWidget />
          </Navbar.Text>
          </Navbar.Collapse>
        </Navbar.Collapse>
      </Container>
    </Navbar>
</>
  );
}

export default NavBar;

