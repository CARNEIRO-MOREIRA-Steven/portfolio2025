import React from 'react'
import './banner.css'

const Banner = () => {
  return (
    <section className='container_banner background_banner' id='top'>
        <section className='content_banner'>
        <h1 className='banner_title'>Développeur<br></br>
        <span className='banner_title_span'>React</span> & <span className='banner_title_span'>Next.js</span></h1>
        <h2 className='banner_description'><strong>Développeur</strong> web passionné par la création de solutions performantes.
             A l'aide de mes compétences en <strong>React & Next.js</strong> je conçois des applications web modernes et performantes.
            <strong> Contacter moi</strong> pour discuter de vos projets.</h2>
             <button className='banner_button'>Me contacter</button>
        </section>
    </section>
  )
}

export default Banner