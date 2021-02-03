
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
            {window.innerWidth > 400 ?
                <svg className="brdo" viewBox="0 0 1440 405" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1439 42.5H-1V276.243C199.996 -39.9597 340.809 439.297 397.638 276.243C454.468 113.189 684.906 77.973 880.806 151.28C1076.71 224.588 1110.37 212.807 1258.44 261.653C1406.5 310.5 1435.83 424.374 1439 401V42.5Z" fill="#666666" fill-opacity="0.1" />
                    <path d="M0 3H1440V204.044C1239 -67.9242 1098.19 344.288 1041.36 204.044C984.532 63.8001 754.094 33.5106 558.194 96.5628C362.294 159.615 257.962 131.474 180.563 204.044C103.164 276.614 84.6981 132.013 0 225V3Z" fill="#242424" fill-opacity="0.3" />
                    <path d="M1440 0H0V43.0141C280.984 36.1184 509.935 63.2364 586.5 32.1626C663.065 1.08882 756.825 35.4404 881.806 20.0181C1006.79 4.59582 1172.05 28.9881 1259.44 61.5432C1371.02 103.113 1436.83 91.4876 1440 87.1862V0Z" fill="#242424" />
                </svg>
                :
                <svg className="brdo" viewBox="0 0 776 159" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M776 17H2.47955e-05V108.785C108.314 -15.3797 184.197 172.811 214.822 108.785C245.446 44.7577 369.627 30.9293 475.196 59.7151C580.764 88.501 598.907 83.8749 678.697 103.056C758.486 122.236 774.293 166.952 776 157.773V17Z" fill="#666666" fill-opacity="0.1" />
                    <path d="M0 1H776V80.1828C667.686 -26.9341 591.803 135.419 561.178 80.1828C530.554 24.9466 406.373 13.0168 300.804 37.8505C195.236 62.6841 139.013 51.6005 97.3032 80.1828C55.5938 108.765 45.6429 51.8128 0 88.4365V1Z" fill="#242424" fill-opacity="0.3" />
                    <path d="M776 0H0V31.793C151.419 26.6962 274.798 46.7399 316.058 23.7724C357.318 0.804781 407.845 26.1951 475.196 14.796C542.547 3.39691 631.603 21.426 678.697 45.4885C738.83 76.2136 774.293 67.6213 776 64.442V0Z" fill="#242424" />
                </svg>

            }
        </>
    );
}

export default Aboutus;
