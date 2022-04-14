import React from 'react';
import Feature from '../../components/feature/Feature'
import './whatREACTWEB.css';

const WhatREACTWEB = () => {
  return (
    <div className='gpt3__whatreactweb section__margin' id="whrw">
      <div className='gtp3__whatreactweb-feature'> 
        <Feature title="Quienes Somos?"/>
      </div>
      <div className='gpt3__whatreactweb-heading'>
        <h1 className='gradient__text'> 
          Las posibilidades estan fuera de tu imaginación!
        </h1>
      </div>
      <div className='gpt3__whatreactweb-container'>
        <Feature title="Titulo a Rellenar" text="Texto a rellenar Texto a rellenar Texto a rellenar Texto a rellenar Texto a rellenar Texto a rellenar"/>
        <Feature title="Titulo a Rellenar" text="Texto a rellenar Texto a rellenar Texto a rellenar Texto a rellenar Texto a rellenar Texto a rellenar"/>
        <Feature title="Titulo a Rellenar" text="Texto a rellenar Texto a rellenar Texto a rellenar Texto a rellenar Texto a rellenar Texto a rellenar"/>
      </div>
    </div>
  )
}

export default WhatREACTWEB
