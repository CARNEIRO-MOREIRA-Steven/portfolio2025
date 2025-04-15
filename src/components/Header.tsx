import React, { useEffect, useState } from 'react';
import './header.css';

const sections = ['about', 'projets', 'experiences', 'contact'];

const Header = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Si on est en haut (avant la première section)
      const firstSection = document.getElementById(sections[0]);
      if (firstSection) {
        const rect = firstSection.getBoundingClientRect();
        if (rect.top > window.innerHeight / 2) {
          setActiveSection('');
          return;
        }
      }

      // Sinon, on cherche la section visible
      for (const id of sections) {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (
            rect.top <= window.innerHeight / 2 &&
            rect.bottom >= window.innerHeight / 2
          ) {
            setActiveSection(id);
            return;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // appel initial

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const section = document.querySelector(`#${id}`);
      section?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header>
      <section className='header'>
        <h2 className='title_header'>
          <a
            href='#top'
            onClick={(e) => scrollToSection(e, 'top')}
            className={activeSection === '' ? 'active' : ''}
          >
            S<span>.</span>
          </a>
        </h2>
        <nav>
          <ol className='list_container'>
            {sections.map((id, index) => (
              <li
                key={id}
                className={`list_texte ${activeSection === id ? 'active' : ''}`}
              >
                <a href={`#${id}`} onClick={(e) => scrollToSection(e, id)}>
                  {['Me découvrir', 'Projets', 'Expériences', 'Contact'][index]}
                </a>
              </li>
            ))}
          </ol>
        </nav>
      </section>
    </header>
  );
};

export default Header;
