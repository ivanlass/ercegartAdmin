import '../App.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'




function Navigation() {
  return (
    <div className="App">
      <Navbar collapseOnSelect expand="lg" className="navigation" >

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto ">
          </Nav>
          <Nav className="navigacija">

            <Nav.Link href="#features">HOME</Nav.Link>
            <Nav.Link href="#pricing">NAMJESTAJ</Nav.Link>
            <Nav.Link href="#pricing">CONTACT</Nav.Link>


          </Nav>

        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;





