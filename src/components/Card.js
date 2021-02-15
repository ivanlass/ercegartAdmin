import React from 'react'
import '../Card.css'
import patio from '../images/patio.jpg'
import {Link} from "react-router-dom";




function Card(props) {



  return (
    <Link to={'/furniture/'+props.product._id}>
    <div className="card-item" >
      <div className="card-picture" style={{backgroundImage: `url(${props.product.slike[0].path})`}} ></div>
      <div className="card-info-wrapper">
        <p>{props.product.name}</p>
      </div>
    </div>
    </Link>
  );
}

export default Card;
