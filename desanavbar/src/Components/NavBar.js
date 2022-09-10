
import {Navbar,Nav,Container} from "react-bootstrap";
import {Outlet,Link} from "react-router-dom";

const NavBarCodercio = () => {
    return(
    <>
   <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="">Codercio</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="">Precios</Nav.Link>
            <Nav.Link as={Link} to="">Marcas</Nav.Link>
            <Nav.Link as={Link} to="">Ofertas</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="">Ingresar</Nav.Link>
            <Nav.Link eventKey={2} as={Link} to="">
              Carrito
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    <section>
      <Outlet></Outlet>
    </section>

    </>
  );
}

export default NavBarCodercio;