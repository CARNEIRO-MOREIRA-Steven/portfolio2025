import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <section className='contact_container' id='contact'>
        <section className='contact_content'>
        <div className='contact_title_container'>
            <span></span>
            <h2 className='contact_title'>Contact</h2>
        </div>
        <ul className='contact_list'>
            <li className='contact_item'>
                <a href="https://www.linkedin.com/in/steven-carneiro-moreira-742626264/" target="_blank" rel="noopener noreferrer">Linkedin</a>
            </li>
            <li className='contact_item'>
                <a href="https://www.malt.fr/profile/codemetasolutions" target="_blank" rel="noopener noreferrer">Malt</a>
            </li>
            <li className='contact_number'>
                <a href="tel:+33659582926">06 27 57 59 07</a>
            </li>
        </ul>
        </section>
    </section>
  )
}

export default Contact