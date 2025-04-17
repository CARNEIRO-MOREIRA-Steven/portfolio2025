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
<div className="calendly-inline-widget" data-url="https://calendly.com/codemetasolutions/30min?hide_event_type_details=1&hide_gdpr_banner=1&hide_scrollbar"></div>
<script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
                </section>
            </section>
        </section>
    )
}

export default Contact