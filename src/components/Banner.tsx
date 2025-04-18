import React from 'react';
import './banner.css';
import { scrollToSection } from '../utils/scrollToSection'; // adapte le chemin si besoin

const Banner = () => {
  return (
    <section className='container_banner background_banner' id='top'>
      <section className='content_banner'>
        <h1 className='banner_title'>Développeur<br />
          <span className='banner_title_span'>React</span> & <span className='banner_title_span'>Next.js</span>
        </h1>
        <h2 className='banner_description'>
          <strong>Développeur</strong> web passionné par la création de solutions performantes.
          A l'aide de mes compétences en <strong>React & Next.js</strong> je conçois des applications web modernes et performantes.
          <strong> Contactez-moi</strong> pour discuter de vos projets.
        </h2>
        <a
          className='banner_button'
          href='#contact'
          onClick={(e) => scrollToSection(e, 'contact')}
        >
          Me contacter
        </a>
      </section>
    </section>
  );
};

export default Banner;
