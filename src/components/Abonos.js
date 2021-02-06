
import '../App.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import astal from '../images/astal.png'
import {Link} from "react-router-dom";

function Abonos() {
    return (
        <>
            <div className="aboutus abonos-component">
                <Container fluid>
                    <Row>

                        <Col>
                            <div className="">
                                <img className="abonos-img" src={astal} alt="logo" style={{ width: 500 }} />
                            </div>
                        </Col>
                        <Col>
                            <div className="abonos">
                                <h1 className="title-big">Abonos</h1>
                                <p className="about-txt abonos-about">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        </p>
                            </div>
                        </Col>
                    </Row>
                    <Link to="/furniture">
                    <button className="btn-seemore">SEE GALLERY</button>
                    </Link>
                </Container>
            </div>
        </>
    );
}

export default Abonos;
