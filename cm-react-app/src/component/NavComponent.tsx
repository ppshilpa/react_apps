import { Navbar, Container, Nav, Button, Form, NavDropdown, Offcanvas } from "react-bootstrap"
import React from 'react';
import logo from '../logo.png';
import { Link} from 'react-router-dom';
export const NavComponent = ()=>{
    return   (<Navbar bg="dark" variant="dark">
 <Navbar.Brand href="/">
            <img
              src={logo}
              height="40"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />        

          </Navbar.Brand>
        <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Link to="/user-form" className="nav-link">User Form</Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Nav>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand`}
              aria-labelledby={`offcanvasNavbarLabel-expand`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">Link</Nav.Link>
                  <NavDropdown
                    title="Dropdown"
                    id={`offcanvasNavbarDropdown-expand`}
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand`}  className="d-block float-end"/>

  </Navbar>)
}