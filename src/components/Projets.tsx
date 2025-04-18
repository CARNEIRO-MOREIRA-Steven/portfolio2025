import React, { useRef, useState } from 'react';
import './projets.css';
import { projetsData } from '../data/projets';
import { Projet } from '../types/Projets';
import { motion, useInView } from 'framer-motion';

const containerVariants = {
  visible: {
    transition: {
      staggerChildren: 1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 300 },
  visible: { opacity: 1, y: 0 },
};

const Projets: React.FC = () => {
  const [selectedProjet, setSelectedProjet] = useState<Projet | null>(null);
  const openModal = (projet: Projet) => setSelectedProjet(projet);
  const closeModal = () => setSelectedProjet(null);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 1 });

  return (
    <section className="projets_container" id='projets'>
      <section className="projets_content" >
        {/* Titre + span ensemble */}
        <motion.div
          className="projets_title_container"
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span></span>
          <h2 className="projets_title" ref={ref}>Mes Projets</h2>
        </motion.div>

        {/* Projets avec effet en cascade */}
        <motion.div
          className="projets_grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {projetsData.map((projet) => (
            <motion.article
              key={projet.id}
              className="projets_card neon"
              variants={itemVariants}
              onClick={() => openModal(projet)}
            >
              <h3 className='projets_card_title'>{projet.title}</h3>
              <img src={projet.image} alt={projet.title} className="projets_image" />
              <p className='projets_card_short_description'>{projet.shortDescription}</p>
            </motion.article>
          ))}
        </motion.div>
      </section>

      {selectedProjet && (
        <div className="modal_overlay" onClick={closeModal}>
          <div className="modal_content" onClick={(e) => e.stopPropagation()}>
            <button className="modal_close" onClick={closeModal}>×</button>
            <h2 className='modal_title'>{selectedProjet.title}</h2>
            <aside className='modal_image_container'>
              <img src={selectedProjet.image} alt={selectedProjet.title} className="modal_image" />
            </aside>
            <p>{selectedProjet.fullDescription}</p>
            <h4>Technologies utilisées :</h4>
            <ul className='modal_technologies_list'>
              {selectedProjet.technologies.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projets;
