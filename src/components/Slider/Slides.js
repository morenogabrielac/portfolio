import React from "react";
import uml from "./../../media/uml.png"
import bc from "./../../media/blockchain.jpg"
import bio from "./../../media/biomechanic.png"
import './Slider.css'


const slidesInfo = [
    {        src:uml,
        alt: 'Proyecto UML',
        desc: 'proyecto de la facu'
    },
    {        src:bc,
        alt: 'Blockchain',
        desc: 'Proyecto que voy a hacer proximamente'
    },
    {        src:bio,
        alt: 'Biomechanics controler andriod',
        desc: 'asdlfjñlgaksdjgñl'
    }
    
]

const Slides = slidesInfo.map(slide =>(
    <div className="slide-container">
        <img className="slide-img" src={slide.src} alt={slide.alt}/>
        <div>
            <span>{slide.desc}</span>
        </div>
    </div>
))
export default Slides;