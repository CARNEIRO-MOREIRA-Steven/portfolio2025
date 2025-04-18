import React from 'react'
import './experiences.css'
<script src="https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/4.2.10/iframeResizer.min.js"></script>

const Experiences = () => {
  return (
    <section className='experiences_container' id='experiences'>
      <section className='experiences_content'>
        <div className='experiences_title_container'>
          <span></span>
          <h2 className='experiences_title'>Mes Experiences</h2>
        </div>
        <section className='experiences_details'>
        <section className='experiences_description'><p>En tant que développeur front-end, je me spécialise dans la création et la maintenance de sites web,
          en offrant des solutions efficaces et esthétiques qui répondent aux besoins spécifiques de chaque client.</p>
        <p>Collaboration étroite avec les clients : J’analyse leurs besoins pour concevoir des solutions web adaptées,
           en m’assurant que chaque projet respecte leurs objectifs et attentes.</p>
        <p>Optimisation des performances et du SEO : Je veille à ce que chaque site soit rapide, fluide, et parfaitement optimisé pour le référencement naturel.</p>
        </section>
        <aside className='experiences_review'>
          <h3>Ils me recommandent</h3>
        <iframe className='experiences_iframe' src="https://widget.tagembed.com/2165307" frameBorder="0" width="100%" height="150%"></iframe>        
        </aside>
        </section>
        </section>
    </section>
  )
}

export default Experiences