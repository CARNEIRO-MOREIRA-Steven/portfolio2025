import React, { useRef } from 'react';
import './experiences.css';
import { Review } from '../types/Reviews';
import { reviewsData } from '../data/reviews';
import { delay, motion, useInView } from 'framer-motion';

const containerVariants = {
  visible: {
    transition: {
      staggerChildren: 1,
    },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const Experiences = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 1 });

  return (
    <section className='experiences_container' id='experiences'>
      <section className='experiences_content' >
        <motion.div
          className='experiences_title_container'
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeIn}
          transition={{ duration: 1}}
        >
          <span></span>
          <h2 className='experiences_title' ref={ref}>Mes Expériences</h2>
        </motion.div>

        <section className='experiences_details'>
          {/* Description en cascade */}
          <motion.section
            className='experiences_description'
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <motion.p variants={fadeIn}>
              En tant que développeur front-end, je me spécialise dans la création et la maintenance de sites web, en offrant des solutions efficaces et esthétiques qui répondent aux besoins spécifiques de chaque client.
            </motion.p>
            <motion.p variants={fadeIn}>
              Collaboration étroite avec les clients : J’analyse leurs besoins pour concevoir des solutions web adaptées, en m’assurant que chaque projet respecte leurs objectifs et attentes.
            </motion.p>
            <motion.p variants={fadeIn}>
              Optimisation des performances et du SEO : Je veille à ce que chaque site soit rapide, fluide, et parfaitement optimisé pour le référencement naturel.
            </motion.p>
          </motion.section>

          {/* Avis en cascade aussi */}
          <motion.aside
            className='experiences_review'
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <motion.h3 variants={fadeIn}>Ils me recommandent</motion.h3>
            <motion.div className="carousel">
              {reviewsData.map((review: Review) => (
                <motion.article key={review.id} variants={fadeIn}>
                  <h4>{review.name}</h4>
                  <p>{review.review}</p>
                  <p className='review_stars'>
                    {'⭐'.repeat(review.star)}
                  </p>
                </motion.article>
              ))}
            </motion.div>
          </motion.aside>
        </section>
      </section>
    </section>
  );
};

export default Experiences;
