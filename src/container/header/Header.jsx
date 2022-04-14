import React from 'react';
import './header.css';

const Header = () => {
  return (
    <div className='gpt3__header section__padding'>
      <div className='gpt3__header-content'>
        <h1>Bienvenido a Especiera Obregon.</h1>
        <p>Manteniendo la mejor calidad y variedad en especias del mercado hace 28 años</p>
        <div className='gpt3__header-content__input'>
          <input type="email" placeholder="Escribe tu email aca..."/>
          <button type='button'>Contactanos!</button>
        </div>
        <div className='gpt3__header-content__people'>
          <p>"Texto a Rellenar"</p>
        </div>
      </div>
    </div>
  )
}

export default Header
