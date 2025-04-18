import React, { useRef } from 'react';
import './about.css';
import { motion, useInView } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay
    }
  })
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      delay
    }
  })
};

const fadeInScale = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      delay
    }
  })
}

const About: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const paragraphs = [
    "Je suis Steven, un développeur web passionné par la création d'applications web modernes et réactives.",
    "Je suis actuellement en freelance. Je travaille sur différents projets confiés par mes clients. Je fais en sorte que chaque client soit satisfait.",
    "Quand je ne travaille pas, je suis souvent en train de me renseigner sur les avancées technologiques, ou de jouer aux jeux vidéos quand j'ai le temps.",
    "Et pendant mes journées off, je passe du temps avec ma famille ou j'essaye d'avancer sur des projets perso.",
    "Toujours à la recherche de nouvelles opportunités professionnelles, me permettant de développer et renforcer mes connaissances."
  ];

  return (
    <section className="about_container" id='about' >
      <section className="about_content">
        <div className="about_title_container">
          <motion.span
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeInUp}
            custom={0.5}
          />
          <motion.h2
            className="about_title"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeInUp}
            custom={0.25}
          >
            Me Découvrir
          </motion.h2>
        </div>

        <section className="about_description" ref={ref}>
          <section className="about_competence">
            <motion.h3
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeInLeft}
              custom={4.5}
            >
              Mes compétences
            </motion.h3>
            <motion.ul
              className="about_competence_list"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeInLeft}
              custom={4.5}
            >
              {["Html", "Css", "JavaScript", "React", "Next.js", "TypeScript", "Api Rest", "Framer Motion", "Wordpress", "WooCommerce", "Git", "Github"].map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </motion.ul>

            <motion.h3
              className="title_inverted"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeInLeft}
              custom={5.5}
            >
              Mes connaissances
            </motion.h3>
            <motion.ul
              className="about_competence_list inverted"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeInLeft}
              custom={5.5}
            >
              {["Figma", "Canva", "Notion", "Trello"].map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </motion.ul>

            <motion.h3
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeInLeft}
              custom={6.5}
            >
              Mes profils
            </motion.h3>
            <motion.aside
              className='about_profil_link'
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeInLeft}
              custom={6.5}
            >
              <a href="https://www.linkedin.com/in/steven-carneiro-moreira-742626264/" target="_blank" rel="noopener noreferrer">Linkedin</a>
              <a href="https://www.malt.fr/profile/codemetasolutions" target="_blank" rel="noopener noreferrer">Malt</a>
              <a href='https://github.com/CARNEIRO-MOREIRA-Steven' target="_blank" rel="noopener noreferrer">GitHub</a>
            </motion.aside>
          </section>

          <aside className="about_text">
            {paragraphs.map((text, index) => (
              <motion.p
                key={index}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={fadeInScale}
                custom={0.5 + index * 0.8}
              >
                {text}
              </motion.p>
            ))}
          </aside>
        </section>
      </section>
    </section>
  );
};

export default About;
