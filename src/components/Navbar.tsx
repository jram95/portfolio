import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavigationBar(): JSX.Element {
  return (
    <>
      <Navbar
        style={{ backgroundColor: "#F16E10", marginBottom: "0px" }}
        variant="light"
      >
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

              <NavDropdown
                style={{
                  fontSize: "18px",
                  padding: "5px",
                  paddingLeft: "30px",
                }}
                title="List of projects"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item
                  style={{
                    fontSize: "18px",
                    padding: "5px",
                    paddingLeft: "30px",
                  }}
                >
                  <Nav.Link as={Link} to="/blog">
                    Next.js Blog
                  </Nav.Link>
                </NavDropdown.Item>
                <NavDropdown.Item
                  style={{
                    fontSize: "18px",
                    padding: "5px",
                    paddingLeft: "30px",
                  }}
                >
                  <Nav.Link as={Link} to="/wall-game">
                    Connecting Wall
                  </Nav.Link>
                </NavDropdown.Item>
                <NavDropdown.Item
                  style={{
                    fontSize: "18px",
                    padding: "5px",
                    paddingLeft: "30px",
                  }}
                >
                  <Nav.Link as={Link} to="/resources">
                    Resources App
                  </Nav.Link>
                </NavDropdown.Item>
                <NavDropdown.Item
                  style={{
                    fontSize: "18px",
                    padding: "5px",
                    paddingLeft: "30px",
                  }}
                >
                  <Nav.Link as={Link} to="/dog-breed">
                    Dog Breed Voting App
                  </Nav.Link>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
