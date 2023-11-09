import { Container, Nav, Navbar } from "react-bootstrap"

const MyNav = ()=>{
    return(
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Space</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#detail">Detail</Nav.Link>
            
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default MyNav