import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget.jsx';
import { useEffect, useState } from 'react';

function NavBarra() {
  return (
    <>
      <Navbar fixed="top" expand="lg" bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#inicio">NOMBRE-SITIO</Navbar.Brand>
          <Nav className="me-auto">

            {ListItems}
            {/* <Nav.Link href="#inicio">Inicio</Nav.Link>
            <Nav.Link href="#productos">Productos</Nav.Link>
            <Nav.Link href="#nosotros">Acerca de..</Nav.Link>
            <Nav.Link href="#contacto">Contacto</Nav.Link> */}
          </Nav>
          <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <CartWidget />
          </Navbar.Text>
        </Navbar.Collapse>
        </Container>

      </Navbar>
    </>
  );
}

export default NavBarra;