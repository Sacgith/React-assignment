import React, { Component } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
export default class Navb extends Component {
  render() {
    return (
      <Navbar bg="dark" n expand="lg" style={{ color: "white" }}>
        <Container>
          <Navbar.Brand to="#home" style={{ color: "white" }}>
           Git repos
          </Navbar.Brand>
         
         
        </Container>
      </Navbar>
    );
  }
}
