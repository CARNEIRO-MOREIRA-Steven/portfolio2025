import React from 'react';
import './banner.css';
import { scrollToSection } from '../utils/scrollToSection';
import { motion } from 'framer-motion';

const title = 'Développeur';
const letters = title.split('');

const Banner = () => {
  return (
    <section className='container_banner background_banner' id='top'>
      <section className='content_banner'>

        <motion.h1
          className='banner_title'
          initial='hidden'
          animate='visible'
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {letters.map((char, index) => (
            <motion.span
              key={index}
              className='letter'
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              {char}
            </motion.span>
          ))}

          <br />

          <motion.span
            className='banner_title_span'
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: letters.length * 0.2 + 0.3 }}
          >
            React
          </motion.span>

          <motion.span
            className='and_separator'
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: letters.length * 0.2 + 0.45 }}
          >
            {''} & {''}
          </motion.span>

          <motion.span
            className='banner_title_span'
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: letters.length * 0.25 + 0.6 }}
          >
            Next.js
          </motion.span>
        </motion.h1>

        <motion.h2
          className='banner_description'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: letters.length * 0.30 + 1 }}
        >
          <strong>Développeur</strong> web passionné par la création de solutions performantes.
          À l'aide de mes compétences en <strong>React & Next.js</strong> je conçois des applications web modernes et performantes.
          <strong> Contactez-moi</strong> pour discuter de vos projets.
        </motion.h2>

        <motion.a
          className='banner_button'
          href='#contact'
          onClick={(e) => scrollToSection(e, 'contact')}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: letters.length * 0.30 + 2 }}
        >
          Me contacter
        </motion.a>
      </section>
    </section>
  );
};

export default Banner;
