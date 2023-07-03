import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

function NavScrollExample() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">

      <button type="button" className="navbar-toggler" data-toggle="collapse"
              data-target="#navbar"
              aria-controls="navbar"
              aria-expanded="false"
              aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <a className="navbar-brand" href="#">Project name</a>
      <div className="collapse navbar-collapse" id="navbar">
        <form className="form-check-inline mt-3 ">
          <input type="text" placeholder="Search..." className="form-control" />
        </form>
        <ul className="nav navbar-nav ">
          <li className="nav-item">
            <a className="nav-link active" href="#">Dashboard <span
              className="sr-only">(current)</span></a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#settings">Settings</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#profile">Profile</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#help">Help</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

class Header extends Component {
  render() {
    return (
      <>
       <BasicExample />
    </>
    );
  }
}

export default Header;