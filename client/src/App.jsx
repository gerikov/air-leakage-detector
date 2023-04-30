import './App.css';
import Calculator from './components/Calculator';
import Device from './components/Device';
import Hero from './components/Hero';
import Intro from './components/Intro';
import Technology from './components/Technology';

function App() {
  return (
    <>
      <Hero />
      <Intro />
      <Technology />
      <Device />
      <Calculator />
    </>
  );
}

export default App;
