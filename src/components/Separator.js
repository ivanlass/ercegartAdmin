import {Link} from "react-router-dom";
import stolAbonos from '../images/stolAbonos.jpg'
import abonosOstalo from '../images/abonosOstalo.png'
import '../App.css'


function Separator(props) {
  return (
    <div className="separator-component">

        <Link to={props.first}>
          <div className="separator-first" style={{backgroundImage: `url(${stolAbonos})`}}>
              <p className="separator-label">Stolovi</p>
          </div>
        </Link>

        <Link to={props.second}>
          <div className="separator-first" style={{backgroundImage: `url(${abonosOstalo})`}}>
              <p className="separator-label">Unikatni ukrasi</p>
          </div>
        </Link>
      </div>

  );
}

export default Separator;
