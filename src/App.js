import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation'
import Hero from './components/Hero';
import Aboutus from './components/Aboutus';


function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero/>
      <Aboutus />
    </div>
  );
}

export default App;
