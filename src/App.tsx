import React from 'react';
import logo from './logo.svg';
import Header from './components/Header';
import Banner from './components/Banner';
import About from './components/About';
import CustomCursor from './components/CustomCursor';
import './App.css';

const Projets = React.lazy(() => import('./components/Projets'));
const Experiences = React.lazy(() => import('./components/Experiences'));
const Contact = React.lazy(() => import('./components/Contact'));

function App() {
  return (
    <div className="App">
      <CustomCursor />
      <img className='background' loading="lazy" src="./backgroundn.png" alt="" />
      <Header />
      <section className='container_page'>
      <Banner />
      <About />
      <Projets />
     <Experiences />
      <Contact />
      </section>
    </div>
  );
}

export default App;