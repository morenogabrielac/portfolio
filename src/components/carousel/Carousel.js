import React, { lazy, useState } from 'react'
import "./Carousel.css"

const Carousel = () => {
    const images = ['auto.jpg','moto.jpg','paisaje.jpg'];
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectedImage, setSelectedImage] = useState(images[0]);
    


function selectNewImage(index=Number, imagen=[], nextTrueFalse=true) {
    const condition = nextTrueFalse ? index > 0 : index < imagen.length;
    //Adelanta? si -> (verdadero/falso)=accion | no -> (verdadero/falso)=accion
    const nextIndex = nextTrueFalse ? (condition?index +1 : 0 ): (condition?index - 1 : images.length - 1);
    setSelectedImage(images[nextIndex]);
    setSelectedIndex(nextIndex);
}

    function previous(){
        selectNewImage(selectedIndex, images, false);

    };

    function next() {
        selectNewImage(selectedIndex, images);
    };

  return (
    <>
    <div>Carousel</div>
    <img className='carousel-img' src={require(`D:/PROYECTO/portfolio/my-portfolio/src/assets/img/${selectedImage}`)} alt='Gentleman'></img>
    </>
  )
}

export default Carousel