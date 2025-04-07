import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";

function AppNavbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    navigate("/");
  };

  const handleHomeClick = () => {
    navigate("/dashboard");
  };

  const isMovieDetailsPage = location.pathname.startsWith("/movie/");

  return (
    <Navbar
      expand="lg"
      style={{ backgroundColor: "#141414", borderBottom: "1px solid #222" }}
      variant="dark"
    >
      <Container className="d-flex justify-content-between">
        <Navbar.Brand style={{ color: "#e50914", fontWeight: "bold", fontSize: "1.5rem" }}>
          MyFlix
        </Navbar.Brand>

        <Nav className="ml-auto d-flex flex-row align-items-center">
          {isMovieDetailsPage && (
            <Nav.Link onClick={handleHomeClick} style={{ color: "#fff", marginRight: "20px" }}>
              Home
            </Nav.Link>
          )}
          <Nav.Link onClick={handleLogout} style={{ color: "#fff" }}>
            Logout
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
