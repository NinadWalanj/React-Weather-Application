import React from "react";
import { Navbar, Container } from "react-bootstrap";
import "./Navbar.css";

export default function Navigation() {
  return (
    <Container className="navbar-main">
      <Navbar>
        <Container>
          <Navbar.Brand className="navbar-title">Weather App</Navbar.Brand>
        </Container>
      </Navbar>
    </Container>
  );
}
