import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" fixed="top" expand="lg">
        <Container>
          <Navbar.Brand href="/">React JS</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink
                to="/"
                style={({ isActive }) => ({
                  color: isActive ? "#fff" : "#708090",
                  textDecoration: isActive ? "none" : "none",
                  borderBottom: isActive ? "thin solid #166991" : "none",
                })}
                className="me-3"
              >
                Home
              </NavLink>
              <NavLink
                to="/albums"
                style={({ isActive }) => ({
                  color: isActive ? "#fff" : "#708090",
                  textDecoration: isActive ? "none" : "none",
                  borderBottom: isActive ? "thin solid #166991" : "none",
                })}
                className="me-3"
              >
                Albums
              </NavLink>

              <NavLink
                to="/posts"
                style={({ isActive }) => ({
                  color: isActive ? "#fff" : "#708090",
                  textDecoration: isActive ? "none" : "none",
                  borderBottom: isActive ? "thin solid #166991" : "none",
                })}
                className="me-3"
              >
                Post
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
export default Navigation;
