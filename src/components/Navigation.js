import '../App.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import logo from '../images/logo.png'




function Navigation() {
  return (
    <div className="App">
<Navbar collapseOnSelect expand="lg" className="navigation" >
  <Navbar.Brand href="#home">
      <img src={logo} alt="logo" style={{height:40, width:150}}/>
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
    </Nav>
    <Nav>

    <Nav.Link  href="#features">HOME</Nav.Link>
      <Nav.Link  href="#pricing">NAMJESTAJ</Nav.Link>
      <Nav.Link  href="#pricing">CONTACT</Nav.Link>
      <NavDropdown  title="ENG" id="collasible-nav-dropdown">
        <NavDropdown.Item  href="#action/3.1">ENG</NavDropdown.Item>
        <NavDropdown.Item  href="#action/3.2">HR</NavDropdown.Item>
        <NavDropdown.Item  href="#action/3.3">DE</NavDropdown.Item>
      </NavDropdown>

    </Nav>

  </Navbar.Collapse>
</Navbar>
    </div>
  );
}

export default Navigation;





