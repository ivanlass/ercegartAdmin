import {Link} from "react-router-dom";
import stolAbonos from '../images/stolAbonos.jpg'
import abonosOstalo from '../images/abonosOstalo.png'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import '../App.css'


function SeparatorUnikatniNamjestaj(props) {
  return (
    <div className="separator-component">
        <Container fluid>
            <Row>
                <Col xs={12} md={6} xl={3}>
        <Link to={props.first}>
          <div className="separator-first" style={{backgroundImage: `url(${stolAbonos})`}}>
              <p className="separator-label">Vrtne garniture</p>
          </div>
        </Link>
                
                </Col>
<Col xs={12} md={6} xl={3}>
        <Link to={props.second}>
          <div className="separator-first" style={{backgroundImage: `url(${stolAbonos})`}}>
              <p className="separator-label">Blagovaonski stolovi</p>
          </div>
        </Link>

</Col>

<Col xs={12} md={6} xl={3}>
        <Link to={props.third}>
          <div className="separator-first" style={{backgroundImage: `url(${abonosOstalo})`}}>
              <p className="separator-label">Klupe i stolice</p>
          </div>
        </Link>

</Col>

        <Col xs={12} md={6} xl={3}>
        <Link to={props.fourth}>
          <div className="separator-first" style={{backgroundImage: `url(${abonosOstalo})`}}>
              <p className="separator-label">Ostali unikatni ukrasi</p>
          </div>
        </Link>
        
        </Col>
        </Row>
        </Container>
       
      </div>

  );
}

export default SeparatorUnikatniNamjestaj;
