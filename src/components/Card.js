import React from 'react'
import '../Card.css'
import patio from '../images/patio.jpg'
import {Link} from "react-router-dom";




function Card() {



  return (
    <Link to="/furniture/helena">
    <div className="card-item" >
      <div className="card-picture" style={{backgroundImage: `url(${patio})`}} ></div>
      <div className="card-info-wrapper">
        <p>HELENA</p>
        <p>650 €</p>
      </div>
    </div>
    </Link>
  );
}

export default Card;
