import React, { useState } from 'react';
import './projets.css';
import { projetsData } from '../data/projets';
import { Projet } from '../types/Projets';

const Projets: React.FC = () => {
  const [selectedProjet, setSelectedProjet] = useState<Projet | null>(null);

  const openModal = (projet: Projet) => setSelectedProjet(projet);
  const closeModal = () => setSelectedProjet(null);

  return (
    <section className="projets_container">
      <section className="projets_content">
      <div className="projets_title_container">
          <span></span>
          <h2 className="projets_title">Mes projets</h2>
        </div>

        <div className="projets_grid">
          {projetsData.map((projet) => (
            <article key={projet.id} className="projets_card" onClick={() => openModal(projet)}>
              <h3 className='projets_card_title'>{projet.title}</h3>
              <img src={projet.image} alt={projet.title} className="projets_image" />
              <p className='projets_card_short_description'>{projet.shortDescription}</p>
            </article>
          ))}
        </div>
      </section>

      {selectedProjet && (
        <div className="modal_overlay" onClick={closeModal}>
          <div className="modal_content" onClick={(e) => e.stopPropagation()}>
            <button className="modal_close" onClick={closeModal}>×</button>
            <h2>{selectedProjet.title}</h2>
            <aside className='modal_image_container'>
            <img src={selectedProjet.image} alt={selectedProjet.title} className="modal_image" />
            </aside>
            <p>{selectedProjet.fullDescription}</p>
            <h4>Technologies utilisées :</h4>
            <ul>
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
