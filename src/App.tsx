import logo from './logo.svg';
import Header from './components/Header';
import Banner from './components/Banner';
import About from './components/About';
import Projets from './components/Projets';
import Experiences from './components/Experiences';
import CustomCursor from './components/CustomCursor';
import './App.css';

function App() {
  return (
    <div className="App">
      <CustomCursor />
      <img className='background' src="./backgroundn.png" alt="" />
      <Header />
      <section className='container_page'>
      <Banner />
      <About />
      <Projets />
      <Experiences />
      </section>
    </div>
  );
}

export default App;