import '../App.css';
import logo from '../images/logo.png'
import {Link} from "react-router-dom";

function Hero() {
  return (
    <div className="hero">

      <div className="hero-text-wrapper">
        <img className="logo" src={logo} alt="logo" style={{ width: 450 }} />

        <p className="hero-txt">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          ed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco
            </p>
        <Link to="/furniture">
          <button className="btn-seemore">SEE GALLERY</button>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
