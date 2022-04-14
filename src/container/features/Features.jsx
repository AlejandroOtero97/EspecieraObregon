import React from 'react';
import Feature from './../../components/feature/Feature';
import './features.css';


const featuresData = [
  {
    title: "Granos y Semillas",
    text: "Producto 1, Producto 2, Producto 1, Producto 2, Producto 1, Producto 2, Producto 1, Producto 2, Producto 1, Producto 2"
  },
  {
    title: "Frutos Secos",
    text: "Producto 1, Producto 2, Producto 1, Producto 2, Producto 1, Producto 2, Producto 1, Producto 2, Producto 1, Producto 2"
  },
  {
    title: "Condimentos",
    text: "Producto 1, Producto 2, Producto 1, Producto 2, Producto 1, Producto 2, Producto 1, Producto 2, Producto 1, Producto 2"
  },
  {
    title: "Especias",
    text: "Producto 1, Producto 2, Producto 1, Producto 2, Producto 1, Producto 2, Producto 1, Producto 2, Producto 1, Producto 2"
  },
]

const Features = () => {
  return (
    <div className='gpt3__features section__padding' id='features'>
      <div className='gpt3__features-heading'>
        <h1 className='gradient__text'>
        El futuro del mercado se encuentra aqui y estos son algunos de nuestros productos!
        </h1>
      </div>
      <div className='gpt3__features-container'>
        {featuresData.map((item, index) =>(
          <Feature title={item.title} text={item.text} key={item.title + index} />
        ))}
      </div>
    </div>
  )
}

export default Features
