import React from 'react'
import './about.css'

const About = () => {
  return (
    <section className='about_container'>
        <section className='about_content'>
            <div className='about_title_container'>
            <span></span>
            <h2 className='about_title'>Me découvrir</h2>
            </div>
            <section className='about_description'>
            <section className='about_competence'>
                <h3>Mes competences</h3>
                <ul className='about_competence_list'>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JAVASCRIPT</li>
                    <li>REACT</li>
                    <li>NEXT.JS</li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </section>
            <aside className='about_text'>
            <p>Je suis Steven, un développeur web passionné par la création d'applications web modernes et réactives.</p>
            <p>Je suis actuellement en freelance. Je travaille sur différents projets confiés par mes clients. Je fais en sorte que chaque client soit satisfait.</p>
            <p>Quand je ne travaille pas, je suis souvent en train de me renseigner sur les avancées technologiques, ou de jouer aux jeux videos quand j'ai le temps.</p>
            <p>Et pendant mes journées off, je passe du temps avec ma famille ou j'essaye d'avancer sur des projets perso</p>
            <p>Toujours à la recherche de nouvelles opportunités professionnelles, me permettant de développer et renforcer mes connaissances.</p>
            </aside>
            </section>
        </section>
    </section>
  )
}

export default About