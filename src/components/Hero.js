import '../App.css';
import logo from '../images/logo.png'
import {Link} from "react-router-dom";

function Hero() {
  return (
    <div className="hero">

      <div className="hero-text-wrapper">
        <img className="logo" src={logo} alt="logo" style={{ width: 450 }} />

        <p className="hero-txt">
        "Sreća - to je biti s prirodom, gledati je i s njom govoriti."
            <p className="">- Lav Nikolajevič Tolstoj</p>
            </p>
        <Link to="/abonos">
          <button className="btn-seemore">SEE GALLERY</button>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
