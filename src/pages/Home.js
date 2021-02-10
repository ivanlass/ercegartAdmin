import '../App.css';
import Hero from '../components/Hero';
import Aboutus from '../components/Aboutus';
import Quote from '../components/Quote'
import Abonos from '../components/Abonos';

function Home() {
  return (
    <div className="App">
      <Hero />
      <Abonos />
      <Quote />
      <Aboutus />

    </div>
  );
}

export default Home;
