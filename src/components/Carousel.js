import React, {useState} from 'react'
import Carousel from 'react-bootstrap/Carousel'
import patio from '../images/patio.jpg'
import "../Card.css"

function Carousels() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect} className="carousel-wrapper">

        <Carousel.Item>
        <img
            className="d-block w-100 carousel-img"
            src={patio}
            alt="Second slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src={patio}
            alt="Second slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src={patio}
            alt="Third slide"
          />
        </Carousel.Item>

      </Carousel>
    );
  }
  
  export default Carousels;