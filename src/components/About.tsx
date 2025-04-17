import React from 'react';
import './about.css';

const About: React.FC = () => {
  return (
    <section className="about_container" id='about'>
      <section className="about_content">
        <div className="about_title_container">
          <span></span>
          <h2 className="about_title">Me Découvrir</h2>
        </div>
        <section className="about_description">
          <section className="about_competence">
            <h3>Mes compétences</h3>
            <ul className="about_competence_list">
              {["Html", "Css", "JavaScript", "React", "Next.js", "TypeScript","Api Rest", "Framer Motion", "Wordpress", "WooCommerce",  "Git", "Github"].map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
            <h3 className='title_inverted'>Mes connaissances</h3>
            <ul className="about_competence_list inverted">
              {["Figma", "Canva", "Notion", "Trello"].map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
            <h3>Mes profils</h3>
            <aside className='about_profil_link'>
            <a href="https://www.linkedin.com/in/steven-carneiro-moreira-742626264/" target="_blank" rel="noopener noreferrer">Linkedin</a>
            <a href="https://www.malt.fr/profile/codemetasolutions" target="_blank" rel="noopener noreferrer">Malt</a>
            <a href='https://github.com/CARNEIRO-MOREIRA-Steven' target="_blank" rel="noopener noreferrer">GitHub</a>
            </aside>
          </section>
          <aside className="about_text">
            <p>Je suis Steven, un développeur web passionné par la création d'applications web modernes et réactives.</p>
            <p>Je suis actuellement en freelance. Je travaille sur différents projets confiés par mes clients. Je fais en sorte que chaque client soit satisfait.</p>
            <p>Quand je ne travaille pas, je suis souvent en train de me renseigner sur les avancées technologiques, ou de jouer aux jeux vidéos quand j'ai le temps.</p>
            <p>Et pendant mes journées off, je passe du temps avec ma famille ou j'essaye d'avancer sur des projets perso.</p>
            <p>Toujours à la recherche de nouvelles opportunités professionnelles, me permettant de développer et renforcer mes connaissances.</p>
          </aside>
        </section>
      </section>
    </section>
  );
};

export default About;
