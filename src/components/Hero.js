import '../App.css';


function Hero() {
  return (
    <div className="hero">
        <div className="hero-text-wrapper">
            <h1 className="hero-title">ERCEG ART STUDIO</h1>
            <h2 className="hero-subtitle">- Inspired by nature -</h2>
            <p className="hero-txt">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                ed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                quis nostrud exercitation ullamco
            </p>

            <button className="btn-seemore" onClick={()=> console.log("asdasd")}>SEE GALLERY</button>

        </div>
    </div>
  );
}

export default Hero;
