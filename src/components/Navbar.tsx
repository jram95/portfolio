import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavigationBar(): JSX.Element {
  return (
    <>
      <Navbar style={{ backgroundColor: "#F16E10" }} variant="light">
        <Container>
          <Navbar.Brand style={{ fontSize: "20px" }}>
            Jenna's <br /> Portfolio
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                style={{
                  fontSize: "18px",
                  padding: "10px",
                }}
                as={Link}
                to="/"
              >
                Home
              </Nav.Link>
              <Nav.Link
                style={{
                  fontSize: "18px",
                  padding: "10px",
                  paddingLeft: "30px",
                }}
                as={Link}
                to="/projects"
              >
                Projects Overview
              </Nav.Link>
              <NavDropdown
                style={{
                  fontSize: "18px",
                  padding: "5px",
                  paddingLeft: "30px",
                }}
                title="List of projects"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
