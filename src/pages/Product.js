import React, {useState, useEffect} from 'react'
import '../Card.css'
import Carousels from '../components/Carousel';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {useParams} from "react-router-dom";

function Product() {
    const [product, setProduct] = useState(null)
    let { id } = useParams();

    useEffect(()=>{
        fetch('http://localhost:5000/products/findone', {
          method: 'POST', // or 'PUT'
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({query:id}),
        })
        .then(response => response.json())
        .then(data => {
          setProduct(data)
        })
        .catch((error) => {
          console.error('Error:', error);
        });
      },[])




  return (
      <>
     {product &&
    <div className="product">
        <div>
        <Carousels slike={product.slike}/>
        </div>
        <br/>
        <Container>

            <Row>
                <Col lg="4" className="product-info-sm">
                    <p>{product.name}</p>
                </Col>
                <Col className="product-info-big">
                    <p className="materials-title">Materijali</p>
                    <p className="materials-item">{product.materijali}</p>
                    <p className="materials-title">Opis</p>
                    <p className="product-about">{product.opis}</p>
                </Col>


            </Row>
        </Container>
   
        
    </div>
    }
  </>
  );
}

export default Product;
