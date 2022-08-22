import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand></Navbar.Brand>
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
              <h4> Home </h4>
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
              <h4>Albums</h4>
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
              <h4> Post </h4>
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};
export default Navigation;
