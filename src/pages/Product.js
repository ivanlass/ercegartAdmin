import '../Card.css'
import Carousels from '../components/Carousel';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Product() {
  return (
    <div className="product">
        <div>
        <Carousels />
        </div>
        <br/>
        <Container>

            <Row>
                <Col lg="4" className="product-info-sm">
                    <p>HELENA</p>
                    <p className="product-price">650 €</p>
                </Col>
                <Col className="product-info-big">
                    <p className="materials-title">Materijali</p>
                    <p className="materials-item">Drvo</p>
                    <p className="materials-item">Aluminij</p>
                    <p className="materials-item">Epoxy smola</p>
                    <p className="materials-title">Opis</p>
                    <p className="product-about">Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
                    accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis 
                    et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas 
                    sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem 
                    sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, 
                    adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam 
                    aliquam quaerat voluptatem. 
                    Ut enim ad minima veniam,</p>
                </Col>


            </Row>
        </Container>
   
        
    </div>
  );
}

export default Product;
