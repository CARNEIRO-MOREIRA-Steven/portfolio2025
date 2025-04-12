import React from 'react'
import './header.css'

const Header = () => {
  return (
    <header>
      <section className='header'>
        <h2 className='title_header'>S<span>.</span></h2>
        <nav>
            <ol className='list_container'>
                <li className='list_texte'>Me découvrir</li>
                <li className='list_texte'>Projets</li>
                <li className='list_texte'>Skills</li>
                <li className='list_texte'>Contact</li>
            </ol>
        </nav>
      </section>
    </header>
  )
}

export default Header