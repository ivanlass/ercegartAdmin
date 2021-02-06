import logo from '../logo.svg';
import '../App.css';
import Navigation from '../components/Navigation'
import Hero from '../components/Hero';
import Aboutus from '../components/Aboutus';
import Quote from '../components/Quote'
import Abonos from '../components/Abonos';

function Home() {
  return (
    <div className="App">
      <Hero />
      <Aboutus />
      <Quote />
      <Abonos />

    </div>
  );
}

export default Home;
