import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

function MainNavigation() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link to="/" className="text-white text-decoration-none">
            Crossmotion Personal
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-00 col">
            <Link to="/" className="p-1 link-light text-decoration-none">
              Personal
            </Link>
            <Link to="/agregarPersonal" className="p-1 link-light text-decoration-none">
              Agregar personal
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNavigation;
