import React from "react";
import { Navbar, Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Bnavbar() {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="px-3">
      <Container fluid="sm">
        <Navbar.Brand href="/" style={{ fontSize: "1.2rem" }}>Movie App</Navbar.Brand>
        <div>
          <Button variant="primary" size="sm" className="mx-1" onClick={() => navigate("/login")}>
            Login
          </Button>
          <Button variant="outline-light" size="sm" onClick={() => navigate("/signup")}>
            Sign Up
          </Button>
        </div>
      </Container>
    </Navbar>
  );
}
