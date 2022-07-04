import React from 'react'
import "./About.css"
import imagen from "../../media/i.jpg"

function About(){
  return (
    <div className='about-container'>
        <div className='about-desc'>
            <h3>About me</h3>
            <p>Me considero una persona decidida a conseguir y mantener una vida en la que pueda sentirme satisfecho, busco mejorar en cada pequeño aspecto que sea capaz de identificar un cambio, con frecuencia investigo y aprendo sobre todo tipo de temas que van surgiendo en el día a día. 
Soy del tipo de persona que observa y analiza su entorno para poder llevarse lo mejor posible con los demás, como también poder adquirir actitudes o habilidades que desconocía. En ocasiones suelo ser obsecionado a la hora de aprender tanto habilidades como disciplinas pero siempre considero que si voy de a poco y constante puedo conseguir la mayoría de las cosas que me proponga</p>
        </div>
        <div className='about-img'>
            <img className='me' src={imagen} alt=''/> 
            <div className='avatar'></div>            


        </div>
    </div>
  )
}

export default About