
import '../App.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import onama from '../images/onama.jpg'

console.log()
function Aboutus() {
    return (
        <>
            <div className="aboutus">
                <Container fluid>
                    <Row>
                        <Col>
                            <div className="about">
                                <h1 className="title-big">About us</h1>
                                <p className="about-txt">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                Lorem ipsum dolor sit amet, ectetur adipiscing elit,
                                Lorem ipsum d
                                ectetur adipiscing elit,
                                Lorem ipsum d consectetur adipiscing elit,
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            </p>
                            </div>
                        </Col>
                        <Col>
                            <div className="imgs-about">
                                <img className="img-about" src={onama} alt="logo" style={{ width: 200 }} />
                                <br />
                                <img className="img-two img-about" src={onama} alt="logo" style={{ width: 200 }} />
                            </div>
                        </Col>
                    </Row>


                </Container>
            </div>
           
        </>
    );
}

export default Aboutus;
