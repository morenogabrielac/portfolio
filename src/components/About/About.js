import React from 'react'
import "./About.css"
import imagen from "../../media/i.jpg"

function About(){
  return (
    <div className='about-container'>
        <div className='about-desc'>
            <h3>Let me tell tou somthing about me</h3>
            <p>Creando la pagina web para poner mis proyectos</p>
        </div>
        <div className='about-img'>
            <img className='me' src={imagen} alt=''/> 
            <div className='avatar'></div>            


        </div>
    </div>
  )
}

export default About