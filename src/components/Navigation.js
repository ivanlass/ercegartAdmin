import '../App.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from '../pages/Home'
import AbonosStolovi from '../pages/AbonosStolovi'
import Contact from '../pages/Contact';
import Product from '../pages/Product';
import Separator from '../components/Separator'
import SeparatorUnikatniNamjestaj from '../components/SeparatorUnikatniNamjestaj'
import SeparatorSlike from '../components/SeparatorSlike'
import AbonosUkras from './AbonosUkras'


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
            <Nav.Link ><Link className="navbar-nav nav-link" to="/abonos">Abonos</Link></Nav.Link>
            <Nav.Link ><Link className="navbar-nav nav-link" to="/unikatni">Unikatni drveni namještaj</Link></Nav.Link>
            <Nav.Link ><Link className="navbar-nav nav-link" to="/slike">Umjetničke slike</Link></Nav.Link>
            <Nav.Link ><Link className="navbar-nav nav-link" to="/contact">Kontakt</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>



      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          
          <Route exact path="/abonos">
            <Separator first="/abonos/stolovi" second="/abonos/ostalo"/>
          </Route>

          <Route  path="/abonos/stolovi">
          <AbonosStolovi />
          </Route>

          <Route  path="/abonos/ostalo">
          <AbonosUkras />
          </Route>






          <Route exact path="/unikatni">
            <SeparatorUnikatniNamjestaj 
                first="/unikatni/garniture" 
                second="/unikatni/stolovi" 
                third="/unikatni/klupe" 
                fourth="/unikatni/ukrasi"/>
          </Route>

          <Route  path="/unikatni/garniture">
            <p>unikat vrtne</p>
          </Route>

          <Route  path="/unikatni/stolovi">
            <p>unikat stolovi</p>
          </Route>

          <Route  path="/unikatni/klupe">
            <p>unikat klupe</p>
          </Route>

          <Route  path="/unikatni/ukrasi">
            <p>unikat ukrasi</p>
          </Route>





          <Route exact path="/slike">
          <SeparatorSlike first="/slike/ulje" second="/slike/akril" third="/slike/ostalo"/>
          </Route>

          <Route  path="/slike/ulje">
            <p>ulje</p>
          </Route>

          <Route  path="/slike/akril">
            <p>akril</p>
          </Route>

          
          <Route  path="/slike/ostalo">
            <p>ostalo</p>
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





