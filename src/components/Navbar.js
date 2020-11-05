import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky = "top">
    <Navbar.Brand href="#">Show Your Beauty</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#Hospitals">Hospitals</Nav.Link>
        <Nav.Link href="#Doctors">Doctors</Nav.Link>
        <Nav.Link href="#Eyes">Eyes</Nav.Link>
        <Nav.Link href="#Lips">Lips</Nav.Link>
        <Nav.Link href="#Jaw">Jaw</Nav.Link>
        <Nav.Link href="#Fillers">Fillers</Nav.Link>
        <Nav.Link href="#Breast">Breast</Nav.Link>
        <Nav.Link href="#Tummy">Tummy</Nav.Link>
        <NavDropdown title="Others" id="collasible-nav-dropdown">
          <NavDropdown.Item href="Suction Lipectomy">Suction Lipectomy"</NavDropdown.Item>
          <NavDropdown.Item href="Laser Resurfacing">Laser Resurfacing</NavDropdown.Item>
          <NavDropdown.Item href="Sclerotherapy">Sclerotherapy</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="Not Listed">Not Listed</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-light">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Navbar>
  );
};
export default Navbar;
