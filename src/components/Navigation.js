import '../App.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from '../pages/Home'
import GalleryList from '../pages/GalleryList';
import Contact from '../pages/Contact';
import Product from '../pages/Product';



function Navigation() {
  return (
    <div className="App">
      <Router>
      <Navbar collapseOnSelect expand="lg" className="navigation" >

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto ">
          </Nav>
          <Nav className="navigacija">
          
            <Nav.Link ><Link className="navbar-nav nav-link" to="/">Home</Link></Nav.Link>
            <Nav.Link ><Link className="navbar-nav nav-link" to="/furniture">Namjestaj</Link></Nav.Link>
            <Nav.Link ><Link className="navbar-nav nav-link" to="/contact">Kontakt</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>



      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/furniture">
            <GalleryList />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/furniture/helena">
            <Product />
          </Route>
        </Switch>
 

      </Router>
    </div>
  );
}

export default Navigation;





