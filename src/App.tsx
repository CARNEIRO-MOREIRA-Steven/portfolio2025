import logo from './logo.svg';
import Header from './components/Header';
import Banner from './components/Banner';
import About from './components/About';
import Projets from './components/Projets';
import './App.css';

function App() {
  return (
    <div className="App">
      <img className='background' src="./backgroundn.png" alt="" />
      <Header />
      <section className='container_page'>
      <Banner />
      <About />
      <Projets />
      </section>
    </div>
  );
}

export default App;
