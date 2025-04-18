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
                <section className='contact_content_container'>
                    <section className='contact_content_info'>
                        <ul className='contact_list'>
                            <li className='contact_item'>
                                <a href="https://www.linkedin.com/in/steven-carneiro-moreira-742626264/" target="_blank" rel="noopener noreferrer">
                                    <img src='./arrow-right.svg' alt='arrow right icon' className='arrow_right'></img>
                                    <img id='logo_contact' alt='logo linkedin' className='logo_linkedin' src='./linkedin.svg'></img></a>
                            </li>
                            <li className='contact_item'>
                                <a href="https://www.malt.fr/profile/codemetasolutions" target="_blank" rel="noopener noreferrer">
                                    <img src='./arrow-right.svg' alt='arrow right icon' className='arrow_right'></img>
                                    <img id='logo_contact' alt='logo malt' className='logo_malt' src='./malt.svg'></img></a>
                            </li>
                            <li className='contact_item'>
                                <a href="https://github.com/CARNEIRO-MOREIRA-Steven" target="_blank" rel="noopener noreferrer">
                                    <img src='./arrow-right.svg' alt='arrow right icon' className='arrow_right'></img>
                                    <img id='logo_contact' alt='logo github' className='logo_github' src='./github-logo.svg'></img></a>
                            </li>
                            <li className='contact_number'>
                                <a href="tel:+33627575907"><img className='logo_phone' alt='logo phone' src='./phone.svg'></img>06 27 57 59 07</a>
                            </li>
                            <li className='contact_mail'>
                                <a href="mailto:codemetasolutions@gmail.com"><img className='logo_mail' alt='logo mail' src='./mail.svg'></img>codemetasolutions@gmail.com</a>
                            </li>
                        </ul>
                    </section>
                    <section className='contact_links neon'>
                    <h2 className='contact_links_title '>Discutons ensemble</h2>
                    <p className='contact_links_description'>
                        Tu as un projet, une idée ou une opportunité à me proposer ?
                        Tu peux facilement réserver un appel de 30 minutes en cliquant ci-dessous.
                        Si tu préfères, tu peux aussi me contacter directement par e-mail.
                    </p>
                    <a href="https://calendly.com/codemetasolutions/30min" target="_blank" rel="noopener noreferrer" className="contact_links_calendly neon">
                        Réserver un créneau
                    </a>
                    <p className='contact_links_alternative'>
                        Ou écris-moi à <a className='contact_links_email' href="mailto:codemetasolutions@gmail.com">codemetasolutions@gmail.com</a><br></br> (réponse rapide garantie !)
                    </p>
                    </section>
                </section>
            </section>
        </section>
    )
}

export default Contact